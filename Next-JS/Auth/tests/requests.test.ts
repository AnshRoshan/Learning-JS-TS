import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { authPost, me } from '@/helpers/authHandlers'
import getDataFromToken from '@/helpers/getDataFromToken'

const origin = 'http://localhost:3000'
beforeEach(() => {
  vi.stubEnv('APP_URL', origin)
  vi.stubEnv('JWT_SECRET', 'test-only-secret-with-at-least-32-characters')
  vi.stubEnv('MONGO_URI', '')
})
afterEach(() => vi.unstubAllEnvs())
function request(
  body: string,
  requestOrigin = origin,
  type = 'application/json',
) {
  return new NextRequest(`${origin}/api/users/signup`, {
    method: 'POST',
    headers: { origin: requestOrigin, 'content-type': type },
    body,
  })
}
it('rejects mutations with a missing or foreign origin before accessing the database', async () => {
  expect(
    (await authPost('signup')(request('{}', 'https://evil.example'))).status,
  ).toBe(403)
  expect((await authPost('logout')(request('{}', ''))).status).toBe(403)
})
it('rejects unsupported content, malformed JSON and oversized bodies', async () => {
  expect(
    (await authPost('signup')(request('{}', origin, 'text/plain'))).status,
  ).toBe(415)
  expect((await authPost('signup')(request('{'))).status).toBe(400)
  expect((await authPost('signup')(request('x'.repeat(8193)))).status).toBe(413)
  expect((await authPost('signup')(request('null'))).status).toBe(400)
})
it('does not trust a forged or missing cookie', async () => {
  expect(await getDataFromToken('forged-token')).toBeNull()
  expect(await getDataFromToken()).toBeNull()
  const response = await me(new NextRequest(`${origin}/api/users/me`))
  expect(response.status).toBe(401)
  expect(response.headers.get('cache-control')).toBe('no-store')
})
it('reports service failures without exposing internal errors or credentials', async () => {
  const response = await authPost('signup')(request('{}'))
  expect(response.status).toBe(503)
  expect(await response.text()).not.toContain('MONGO_URI')
})
