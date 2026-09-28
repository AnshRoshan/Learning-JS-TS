import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import jwt from 'jsonwebtoken'
import {
  appOrigin,
  cookieOptions,
  hashToken,
  newToken,
  passwordSchema,
  readSession,
  signSession,
} from '@/helpers/security'
import { allowAttempt } from '@/helpers/rateLimit'

beforeEach(() => {
  vi.stubEnv('JWT_SECRET', 'test-only-secret-with-at-least-32-characters')
  vi.stubEnv('APP_URL', 'http://localhost:3000')
})
afterEach(() => vi.unstubAllEnvs())

describe('Security primitives', () => {
  it('checks session expiry, issuer, signature and shape', () => {
    const id = 'a'.repeat(24)
    expect(readSession(signSession(id, 2))).toEqual({ id, version: 2 })
    expect(() => readSession('garbage')).toThrow()
    const expired = jwt.sign({ version: 0 }, process.env.JWT_SECRET!, {
      subject: id,
      issuer: 'learning-js-ts-auth',
      audience: 'auth-lab',
      expiresIn: -1,
    })
    expect(() => readSession(expired)).toThrow()
    expect(() => readSession(signSession('not-an-object-id', 0))).toThrow()
    expect(() =>
      readSession(jwt.sign({ sub: id, version: 0 }, process.env.JWT_SECRET!)),
    ).toThrow()
    expect(() =>
      readSession(jwt.sign({ sub: id, version: 0 }, 'wrong-key')),
    ).toThrow()
  })
  it('fails closed with a missing or weak signing secret', () => {
    vi.stubEnv('JWT_SECRET', 'weak')
    expect(() => signSession('a'.repeat(24), 0)).toThrow()
  })
  it('prevents bcrypt truncation, including multibyte passwords', () => {
    expect(passwordSchema.safeParse('short').success).toBe(false)
    expect(passwordSchema.safeParse('a'.repeat(72)).success).toBe(true)
    expect(passwordSchema.safeParse('a'.repeat(73)).success).toBe(false)
    expect(passwordSchema.safeParse('🔐'.repeat(19)).success).toBe(false)
  })
  it('generates random tokens with deterministic non-plaintext hashes', () => {
    const token = newToken()
    expect(token).toMatch(/^[a-f0-9]{64}$/)
    expect(newToken()).not.toBe(token)
    expect(hashToken(token)).not.toBe(token)
    expect(hashToken(token)).toBe(hashToken(token))
  })
  it('uses safe cookie flags and the correct lifetime in seconds', () => {
    vi.stubEnv('NODE_ENV', 'development')
    expect(cookieOptions()).toEqual({
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: false,
      maxAge: 86400,
    })
    vi.stubEnv('APP_URL', 'https://example.test')
    expect(cookieOptions().secure).toBe(true)
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('APP_URL', 'http://localhost:3000')
    expect(cookieOptions().secure).toBe(true)
  })
  it('rejects unconfigured or non-HTTP origins', () => {
    vi.stubEnv('APP_URL', '')
    expect(appOrigin).toThrow()
    vi.stubEnv('APP_URL', 'file:///etc')
    expect(appOrigin).toThrow()
  })
  it('resets rate limits after the time window', () => {
    expect(allowAttempt('unit-limit', 1, 100)).toBe(true)
    expect(allowAttempt('unit-limit', 1, 101)).toBe(false)
    expect(allowAttempt('unit-limit', 1, 100 + 15 * 60 * 1000)).toBe(true)
  })
})
