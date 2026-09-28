import nodemailer from 'nodemailer'
import { appOrigin } from './security'

export async function sendAuthEmail(
  email: string,
  token: string,
  kind: 'verify' | 'reset',
) {
  const host = process.env.SMTP_HOST
  const from = process.env.MAIL_FROM
  if (!host || !from)
    throw new Error('SMTP_HOST and MAIL_FROM must be configured')
  const transport = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
    connectionTimeout: 10000,
    socketTimeout: 10000,
  })
  const path = kind === 'verify' ? '/verify-email' : '/reset-password'
  const link = `${appOrigin()}${path}?token=${token}`
  await transport.sendMail({
    from,
    to: email,
    subject:
      kind === 'verify'
        ? 'Verify your Auth Lab email'
        : 'Reset your Auth Lab password',
    text: `${kind === 'verify' ? 'Verify your email' : 'Reset your password'}: ${link}\n\nThis link expires in ${kind === 'verify' ? '60' : '15'} minutes and can be used once. If you did not request this, ignore this email.`,
  })
}
