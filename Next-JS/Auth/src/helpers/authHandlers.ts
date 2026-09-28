import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import connectdb from '@/db/dbConfig'
import User from '@/models/userModels'
import getDataFromToken from './getDataFromToken'
import { sendAuthEmail } from './mailer'
import { allowAttempt } from './rateLimit'
import {
  appOrigin,
  cookieOptions,
  emailSchema,
  hashToken,
  newToken,
  passwordSchema,
  signSession,
  tokenSchema,
} from './security'

type Action =
  | 'signup'
  | 'login'
  | 'logout'
  | 'verify-email'
  | 'resend-verification'
  | 'forgot-password'
  | 'reset-password'
const json = (data: object, status = 200) =>
  NextResponse.json(data, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
const error = (message: string, status: number) =>
  json({ error: message }, status)
const genericMailMessage =
  'If the account is eligible, an email has been sent. Check your inbox.'
// Compare even when an account does not exist, reducing obvious timing differences.
const dummyHash = bcrypt.hashSync('not-a-real-account-password', 12)

async function issueEmail(
  userId: string,
  email: string,
  kind: 'verify' | 'reset',
) {
  const token = newToken()
  const tokenField = kind === 'verify' ? 'verifyEmailToken' : 'forgotPassword'
  const expiryField =
    kind === 'verify' ? 'verifyTokenExpire' : 'forgotPasswordExpire'
  await User.updateOne(
    { _id: userId },
    {
      $set: {
        [tokenField]: hashToken(token),
        [expiryField]: new Date(
          Date.now() + (kind === 'verify' ? 60 : 15) * 60 * 1000,
        ),
      },
    },
  )
  await sendAuthEmail(email, token, kind)
}

export function authPost(action: Action) {
  return async (request: NextRequest) => {
    try {
      // Require the configured browser origin for every mutation, including login/logout.
      if (request.headers.get('origin') !== appOrigin())
        return error('Untrusted request origin.', 403)
      if (!allowAttempt('global', 500))
        return error('Too many requests. Try again in 15 minutes.', 429)
      if (!request.headers.get('content-type')?.startsWith('application/json'))
        return error('Expected JSON.', 415)
      const text = await request.text()
      if (Buffer.byteLength(text) > 8192)
        return error('Request too large.', 413)
      let body: unknown
      try {
        body = JSON.parse(text)
      } catch {
        return error('Invalid JSON.', 400)
      }
      const fields = z.record(z.string(), z.unknown()).parse(body)
      const identity =
        typeof fields.email === 'string'
          ? fields.email.trim().toLowerCase()
          : typeof fields.token === 'string'
            ? fields.token
            : 'session'
      if (
        !allowAttempt(
          `${action}:${hashToken(identity)}`,
          action === 'logout' ? 100 : 10,
        )
      ) {
        return error('Too many attempts. Try again in 15 minutes.', 429)
      }
      await connectdb()

      if (action === 'signup') {
        const { email, username, password } = z
          .object({
            email: emailSchema,
            username: z.string().trim().min(2).max(40),
            password: passwordSchema,
          })
          .parse(fields)
        if (await User.exists({ email }))
          return json({ message: genericMailMessage })
        const user = await User.create({
          email,
          username,
          password: await bcrypt.hash(password, 12),
        })
        await issueEmail(String(user._id), email, 'verify')
        return json({ message: genericMailMessage }, 201)
      }
      if (action === 'login') {
        const { email, password } = z
          .object({
            email: emailSchema,
            password: z
              .string()
              .min(1)
              .refine(
                (value) => Buffer.byteLength(value, 'utf8') <= 72,
                'Password is too long.',
              ),
          })
          .parse(fields)
        const user = await User.findOne({ email }).select(
          '+password +sessionVersion',
        )
        const matches = await bcrypt.compare(
          password,
          user?.password || dummyHash,
        )
        if (!user || !matches) return error('Invalid email or password.', 401)
        if (!user.verifyEmail)
          return error(
            'Verify your email before signing in. You can request a new link.',
            403,
          )
        const response = json({ message: 'Signed in.' })
        response.cookies.set(
          'token',
          signSession(String(user._id), user.sessionVersion),
          cookieOptions(),
        )
        return response
      }
      if (action === 'logout') {
        const user = await getDataFromToken(request.cookies.get('token')?.value)
        // Revoking all existing sessions is intentional for this learning example.
        if (user)
          await User.updateOne(
            { _id: user._id },
            { $inc: { sessionVersion: 1 } },
          )
        const response = json({ message: 'Signed out on all devices.' })
        response.cookies.set('token', '', { ...cookieOptions(), maxAge: 0 })
        return response
      }
      if (action === 'verify-email') {
        const { token } = z.object({ token: tokenSchema }).parse(fields)
        const user = await User.findOneAndUpdate(
          {
            verifyEmailToken: hashToken(token),
            verifyTokenExpire: { $gt: new Date() },
            verifyEmail: false,
          },
          {
            $set: { verifyEmail: true },
            $unset: { verifyEmailToken: 1, verifyTokenExpire: 1 },
          },
        )
        return user
          ? json({ message: 'Email verified. You can now sign in.' })
          : error('Invalid or expired link.', 400)
      }
      if (action === 'reset-password') {
        const { token, password } = z
          .object({ token: tokenSchema, password: passwordSchema })
          .parse(fields)
        const passwordHash = await bcrypt.hash(password, 12)
        // The conditional update consumes the token atomically, preventing replay.
        const user = await User.findOneAndUpdate(
          {
            forgotPassword: hashToken(token),
            forgotPasswordExpire: { $gt: new Date() },
            verifyEmail: true,
          },
          {
            $set: { password: passwordHash },
            $inc: { sessionVersion: 1 },
            $unset: { forgotPassword: 1, forgotPasswordExpire: 1 },
          },
        )
        return user
          ? json({ message: 'Password reset. Sign in with your new password.' })
          : error('Invalid or expired link.', 400)
      }
      const { email } = z.object({ email: emailSchema }).parse(fields)
      const user = await User.findOne({ email })
      if (user && action === 'resend-verification' && !user.verifyEmail)
        await issueEmail(String(user._id), email, 'verify')
      if (user && action === 'forgot-password' && user.verifyEmail)
        await issueEmail(String(user._id), email, 'reset')
      return json({ message: genericMailMessage })
    } catch (cause) {
      if (cause instanceof z.ZodError)
        return error(cause.issues[0]?.message || 'Invalid input.', 400)
      if (
        typeof cause === 'object' &&
        cause &&
        'code' in cause &&
        cause.code === 11000
      ) {
        return json({ message: genericMailMessage })
      }
      // Never return driver/SMTP errors, credentials, password hashes or tokens.
      return error(
        'Authentication service unavailable. Check database and mail configuration. If signup failed, request a new verification link after restoring service.',
        503,
      )
    }
  }
}

export async function me(request: NextRequest) {
  try {
    const user = await getDataFromToken(request.cookies.get('token')?.value)
    return user ? json({ user }) : error('Please sign in.', 401)
  } catch {
    return error('Authentication service unavailable.', 503)
  }
}
