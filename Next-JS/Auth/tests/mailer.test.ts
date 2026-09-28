import { afterAll, afterEach, beforeAll, expect, it, vi } from 'vitest'
import { SMTPServer } from 'smtp-server'
import { sendAuthEmail } from '@/helpers/mailer'

let smtp: SMTPServer
let port: number
const inbox: string[] = []
beforeAll(async () => {
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
  port = address.port
})
afterEach(() => vi.unstubAllEnvs())
afterAll(async () => {
  if (smtp) await new Promise<void>((resolve) => smtp.close(resolve))
})
it('sends verification and recovery links through a real local SMTP server', async () => {
  vi.stubEnv('SMTP_HOST', '127.0.0.1')
  vi.stubEnv('SMTP_PORT', String(port))
  vi.stubEnv('SMTP_SECURE', 'false')
  vi.stubEnv('SMTP_USER', '')
  vi.stubEnv('APP_URL', 'https://auth.example.test')
  vi.stubEnv('MAIL_FROM', 'Auth Lab <auth@example.test>')
  for (const kind of ['verify', 'reset'] as const) {
    await sendAuthEmail('learner@example.test', 'a'.repeat(64), kind)
    const message = inbox
      .at(-1)!
      .replace(/=\r?\n/g, '')
      .replace(/=3D/g, '=')
    const path = kind === 'verify' ? 'verify-email' : 'reset-password'
    expect(message).toContain(
      `https://auth.example.test/${path}?token=${'a'.repeat(64)}`,
    )
    expect(message).toContain('To: learner@example.test')
    expect(message).toContain(kind === 'verify' ? '60 minutes' : '15 minutes')
  }
})
it('fails explicitly rather than pretending to send unconfigured mail', async () => {
  vi.stubEnv('SMTP_HOST', '')
  await expect(
    sendAuthEmail('learner@example.test', 'a'.repeat(64), 'verify'),
  ).rejects.toThrow()
})
