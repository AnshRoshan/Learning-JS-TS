'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useRef, useState } from 'react'

type Action =
  | 'signup'
  | 'login'
  | 'verify-email'
  | 'resend-verification'
  | 'forgot-password'
  | 'reset-password'
const copy: Record<Action, [string, string, string]> = {
  signup: [
    'Your learning starts here.',
    'Create an account. We’ll email you a verification link before you can sign in.',
    'Create account',
  ],
  login: [
    'Welcome back.',
    'Sign in to inspect your server-verified session.',
    'Sign in',
  ],
  'verify-email': [
    'Make it official.',
    'Confirm your email address using the link from your inbox.',
    'Verify email',
  ],
  'resend-verification': [
    'A fresh start.',
    'Request a new verification link. Older links will no longer work.',
    'Send verification link',
  ],
  'forgot-password': [
    'Let’s get you back in.',
    'If your email belongs to a verified account, we’ll send a reset link.',
    'Send reset link',
  ],
  'reset-password': [
    'Choose a new password.',
    'Resetting your password signs out all existing sessions.',
    'Reset password',
  ],
}
export default function AuthForm({ action }: { action: Action }) {
  const router = useRouter()
  const tokenRead = useRef(false)
  const [token, setToken] = useState('')
  const [ready, setReady] = useState(false)
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')
  const [failed, setFailed] = useState(false)
  const [done, setDone] = useState(false)
  const needsToken = action === 'verify-email' || action === 'reset-password'
  const needsPassword =
    action === 'signup' || action === 'login' || action === 'reset-password'
  useEffect(() => {
    if (tokenRead.current) return
    tokenRead.current = true
    const value = new URLSearchParams(window.location.search).get('token') || ''
    setToken(value)
    setReady(true)
    // Keep email tokens out of browser history/referrers after reading them.
    if (value) window.history.replaceState(null, '', window.location.pathname)
  }, [])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setMessage('')
    setFailed(false)
    const form = event.currentTarget
    const body = Object.fromEntries(new FormData(form))
    if (needsToken) body.token = token
    try {
      const response = await fetch(`/api/users/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Please try again.')
      setMessage(data.message)
      setDone(true)
      form.reset()
      if (action === 'login') {
        router.push('/profile')
        router.refresh()
      }
    } catch (error) {
      setFailed(true)
      setMessage(
        error instanceof Error
          ? error.message
          : 'Unable to connect. Try again.',
      )
    } finally {
      setPending(false)
    }
  }
  const missingToken = ready && needsToken && !/^[a-f0-9]{64}$/.test(token)
  return (
    <section className="form-layout">
      <div className="form-intro">
        <div className="eyebrow">AUTH LAB / ACCOUNT ACCESS</div>
        <h1>{copy[action][0]}</h1>
        <p className="lede">{copy[action][1]}</p>
        <div className="mini-note">
          <strong>Behind the scenes</strong>
          <p>
            {needsToken
              ? 'Links are single-use. The database stores only a hash of the token, along with an expiration time.'
              : 'Your password never comes back from the API. Sessions live in an HTTP-only cookie, not local storage.'}
          </p>
        </div>
        <Link href="/">← Back to the lab</Link>
      </div>
      <div className="form-card">
        <h2>{copy[action][2]}</h2>
        <form onSubmit={submit}>
          {action === 'signup' && (
            <label htmlFor="username">
              Name
              <input
                id="username"
                name="username"
                autoComplete="nickname"
                required
                minLength={2}
                maxLength={40}
                placeholder="Your name"
              />
            </label>
          )}
          {!needsToken && (
            <label htmlFor="email">
              Email address
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </label>
          )}
          {needsPassword && (
            <label htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  action === 'login' ? 'current-password' : 'new-password'
                }
                required
                minLength={action === 'login' ? 1 : 12}
                maxLength={72}
                aria-describedby="password-help"
              />
              <small id="password-help">
                {action === 'login'
                  ? 'Use the password for your verified account.'
                  : 'At least 12 characters; at most 72 UTF-8 bytes.'}
              </small>
            </label>
          )}
          {missingToken && (
            <p className="feedback error" role="alert">
              This link is missing or invalid. Open the full link from your
              email, or request a new one below.
            </p>
          )}
          {message && (
            <p
              className={`feedback ${failed ? 'error' : ''}`}
              role={failed ? 'alert' : 'status'}
            >
              {message}
            </p>
          )}
          <button
            disabled={pending || !ready || missingToken || done}
            type="submit"
          >
            {pending
              ? 'Please wait…'
              : done
                ? 'Done ✓'
                : copy[action][2] + ' →'}
          </button>
        </form>
        <div className="form-links">
          <Link href="/login">Sign in</Link>
          <Link href="/signup">Create account</Link>
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/resend-verification">Resend verification</Link>
        </div>
      </div>
    </section>
  )
}
