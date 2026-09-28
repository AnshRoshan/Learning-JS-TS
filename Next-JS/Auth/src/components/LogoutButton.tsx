'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function LogoutButton() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  async function logout() {
    setPending(true)
    setError('')
    try {
      const result = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
      })
      if (!result.ok) throw new Error('Could not sign out. Please try again.')
      router.push('/login')
      router.refresh()
    } catch {
      setError('Could not sign out. Please try again.')
    } finally {
      setPending(false)
    }
  }
  return (
    <>
      <button onClick={logout} disabled={pending}>
        {pending ? 'Signing out…' : 'Sign out on all devices ↗'}
      </button>
      {error && <p role="alert">{error}</p>}
    </>
  )
}
