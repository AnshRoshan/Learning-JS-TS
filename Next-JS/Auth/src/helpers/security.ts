import { createHash, randomBytes } from 'node:crypto'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

export const emailSchema = z.string().trim().toLowerCase().email().max(254)
export const passwordSchema = z
  .string()
  .min(12, 'Use at least 12 characters.')
  .refine(
    (value) => Buffer.byteLength(value, 'utf8') <= 72,
    'Password must be at most 72 UTF-8 bytes.',
  )
export const tokenSchema = z
  .string()
  .regex(/^[a-f0-9]{64}$/, 'Invalid or expired link.')
export const hashToken = (value: string) =>
  createHash('sha256').update(value).digest('hex')
export const newToken = () => randomBytes(32).toString('hex')
export const sessionSeconds = 60 * 60 * 24

function secret() {
  const value = process.env.JWT_SECRET
  if (!value || value.length < 32)
    throw new Error('JWT_SECRET must contain at least 32 characters')
  return value
}
export function signSession(id: string, version: number) {
  return jwt.sign({ version }, secret(), {
    subject: id,
    algorithm: 'HS256',
    expiresIn: sessionSeconds,
    issuer: 'learning-js-ts-auth',
    audience: 'auth-lab',
  })
}
export function readSession(token: string) {
  const payload = jwt.verify(token, secret(), {
    algorithms: ['HS256'],
    issuer: 'learning-js-ts-auth',
    audience: 'auth-lab',
  })
  if (
    typeof payload === 'string' ||
    !payload.sub ||
    !/^[a-f0-9]{24}$/.test(payload.sub) ||
    !Number.isInteger(payload.version)
  )
    throw new Error('Invalid session')
  return { id: payload.sub, version: payload.version as number }
}
export function appOrigin() {
  const url = new URL(process.env.APP_URL || '')
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.username ||
    url.password
  ) {
    throw new Error('APP_URL must be an HTTP(S) origin')
  }
  return url.origin
}
export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    secure:
      process.env.NODE_ENV === 'production' || appOrigin().startsWith('https:'),
    maxAge: sessionSeconds,
  }
}
