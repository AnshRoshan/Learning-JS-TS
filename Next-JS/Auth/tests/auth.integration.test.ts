import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { SMTPServer } from 'smtp-server'
import mongoose from 'mongoose'
import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { authPost, me } from '@/helpers/authHandlers'
import User from '@/models/userModels'
import { hashToken, newToken } from '@/helpers/security'

const origin = 'http://localhost:3000'
const email = 'learner@example.test'
const password = 'a-strong-learning-password'
const inbox: string[] = []
let mongo: MongoMemoryServer
let smtp: SMTPServer
function post(
  action: Parameters<typeof authPost>[0],
  body: object,
  cookie = '',
  requestOrigin = origin,
) {
  return authPost(action)(
    new NextRequest(`${origin}/api/users/${action}`, {
      method: 'POST',
      headers: {
        origin: requestOrigin,
        'content-type': 'application/json',
        cookie,
      },
      body: JSON.stringify(body),
    }),
  )
}
function profile(cookie = '') {
  return me(new NextRequest(`${origin}/api/users/me`, { headers: { cookie } }))
}
function tokenFromLastEmail(path: string) {
  // Nodemailer may wrap quoted-printable lines. Tokens themselves are hex.
  const message = inbox
    .at(-1)!
    .replace(/=\r?\n/g, '')
    .replace(/=3D/g, '=')
  expect(message).toContain(`${origin}/${path}?token=`)
  return message.match(/token=([a-f0-9]{64})/)![1]
}
function sessionCookie(response: Response) {
  return response.headers.get('set-cookie')!.split(';')[0]
}

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  process.env.MONGO_URI = mongo.getUri()
  process.env.JWT_SECRET = 'test-only-secret-with-at-least-32-characters'
  process.env.APP_URL = origin
  process.env.SMTP_HOST = '127.0.0.1'
  process.env.SMTP_SECURE = 'false'
  process.env.MAIL_FROM = 'Auth Lab <auth@example.test>'
  delete process.env.SMTP_USER
  smtp = new SMTPServer({
    authOptional: true,
    disabledCommands: ['STARTTLS'],
    onData(stream, _session, callback) {
      let message = ''
      stream.on('data', (chunk) => {
        message += chunk.toString()
      })
      stream.on('end', () => {
        inbox.push(message)
        callback()
      })
    },
  })
  await new Promise<void>((resolve) => smtp.listen(0, '127.0.0.1', resolve))
  const address = smtp.server.address()
  if (!address || typeof address === 'string')
    throw new Error('SMTP did not start')
  process.env.SMTP_PORT = String(address.port)
  await mongoose.connect(process.env.MONGO_URI)
  await User.init()
})
afterAll(async () => {
  await mongoose.disconnect()
  if (smtp) await new Promise<void>((resolve) => smtp.close(resolve))
  if (mongo) await mongo.stop()
})

describe('Complete account lifecycle, with MongoDB and SMTP', () => {
  let verificationToken: string
  let cookie: string
  it('rejects cross-origin and malformed requests', async () => {
    expect((await post('signup', {}, '', 'https://evil.example')).status).toBe(
      403,
    )
    expect(
      (await post('signup', { email: 'bad', username: 'x', password: 'short' }))
        .status,
    ).toBe(400)
    const response = await authPost('signup')(
      new NextRequest(`${origin}/api/users/signup`, {
        method: 'POST',
        headers: { origin, 'content-type': 'application/json' },
        body: '{',
      }),
    )
    expect(response.status).toBe(400)
  })
  it('creates a user, hashes secrets, and delivers a verification email', async () => {
    const response = await post('signup', {
      username: 'Learner',
      email: ' LEARNER@example.test ',
      password,
    })
    expect(response.status).toBe(201)
    const data = await response.json()
    expect(Object.keys(data)).toEqual(['message'])
    const user = await User.findOne({ email }).select(
      '+password +verifyEmailToken',
    )
    expect(await bcrypt.compare(password, user.password)).toBe(true)
    expect(user.password).not.toBe(password)
    verificationToken = tokenFromLastEmail('verify-email')
    expect(user.verifyEmailToken).toBe(hashToken(verificationToken))
    expect((await post('login', { email, password })).status).toBe(403)
  })
  it('handles duplicate signup without leaking a user document', async () => {
    const response = await post('signup', {
      username: 'Learner',
      email,
      password,
    })
    expect(response.status).toBe(200)
    expect(Object.keys(await response.json())).toEqual(['message'])
    expect(await User.countDocuments({ email })).toBe(1)
  })
  it('resends verification, invalidates old links and consumes a link once', async () => {
    expect((await post('resend-verification', { email })).status).toBe(200)
    const replacement = tokenFromLastEmail('verify-email')
    expect(replacement).not.toBe(verificationToken)
    expect(
      (await post('verify-email', { token: verificationToken })).status,
    ).toBe(400)
    expect((await post('verify-email', { token: replacement })).status).toBe(
      200,
    )
    expect((await post('verify-email', { token: replacement })).status).toBe(
      400,
    )
  })
  it('rejects bad credentials and forged cookies, then starts a safe session', async () => {
    expect(
      (await post('login', { email, password: 'not-correct' })).status,
    ).toBe(401)
    expect((await profile()).status).toBe(401)
    expect((await profile('token=forged')).status).toBe(401)
    const response = await post('login', { email, password })
    expect(response.status).toBe(200)
    expect(await response.json()).not.toHaveProperty('token')
    expect(response.headers.get('set-cookie')).toMatch(/HttpOnly/i)
    expect(response.headers.get('set-cookie')).toMatch(/SameSite=lax/i)
    expect(response.headers.get('set-cookie')).toContain('Max-Age=86400')
    cookie = sessionCookie(response)
    const meResponse = await profile(cookie)
    expect(meResponse.status).toBe(200)
    expect(meResponse.headers.get('cache-control')).toBe('no-store')
    const { user } = await meResponse.json()
    expect(user.email).toBe(email)
    expect(Object.keys(user).sort()).toEqual(
      ['_id', 'createdAt', 'email', 'username', 'verifyEmail'].sort(),
    )
  })
  it('uses generic recovery messages and does not mail nonexistent accounts', async () => {
    const count = inbox.length
    const unknown = await post('forgot-password', {
      email: 'unknown@example.test',
    })
    expect(inbox.length).toBe(count)
    const known = await post('forgot-password', { email })
    expect(await unknown.json()).toEqual(await known.json())
    expect(inbox.length).toBe(count + 1)
  })
  it('rejects expired links, resets once and revokes previous sessions', async () => {
    const expired = tokenFromLastEmail('reset-password')
    await User.updateOne(
      { email },
      { forgotPasswordExpire: new Date(Date.now() - 1000) },
    )
    expect(
      (
        await post('reset-password', {
          token: expired,
          password: 'new-learning-password',
        })
      ).status,
    ).toBe(400)
    await post('forgot-password', { email })
    const token = tokenFromLastEmail('reset-password')
    const user = await User.findOne({ email }).select('+forgotPassword')
    expect(user.forgotPassword).toBe(hashToken(token))
    expect(
      (await post('reset-password', { token, password: 'short' })).status,
    ).toBe(400)
    expect(
      (
        await post('reset-password', {
          token,
          password: 'new-learning-password',
        })
      ).status,
    ).toBe(200)
    expect(
      (
        await post('reset-password', {
          token,
          password: 'another-learning-password',
        })
      ).status,
    ).toBe(400)
    expect((await profile(cookie)).status).toBe(401)
    expect((await post('login', { email, password })).status).toBe(401)
    const response = await post('login', {
      email,
      password: 'new-learning-password',
    })
    expect(response.status).toBe(200)
    cookie = sessionCookie(response)
  })
  it('clears the cookie and invalidates a copied token on logout', async () => {
    const response = await post('logout', {}, cookie)
    expect(response.status).toBe(200)
    expect(response.headers.get('set-cookie')).toContain('Max-Age=0')
    expect((await profile(cookie)).status).toBe(401)
    expect((await post('logout', {})).status).toBe(200)
  })
  it('does not allow expired verification tokens', async () => {
    const token = newToken()
    await User.create({
      username: 'Expired',
      email: 'expired@example.test',
      password: 'not-used',
      verifyEmailToken: hashToken(token),
      verifyTokenExpire: new Date(Date.now() - 1000),
    })
    expect((await post('verify-email', { token })).status).toBe(400)
  })
  it('enforces login throttling', async () => {
    for (let i = 0; i < 10; i++)
      await post('login', { email: 'limit@example.test', password: 'wrong' })
    expect(
      (await post('login', { email: 'limit@example.test', password: 'wrong' }))
        .status,
    ).toBe(429)
  })
})
