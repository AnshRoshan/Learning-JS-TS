import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import getDataFromToken from '@/helpers/getDataFromToken'
import LogoutButton from '@/components/LogoutButton'

export const dynamic = 'force-dynamic'
export default async function Profile() {
  const user = await getDataFromToken((await cookies()).get('token')?.value)
  if (!user) redirect('/login')
  return (
    <section className="profile">
      <div className="eyebrow">YOUR SERVER-VERIFIED SESSION</div>
      <h1>Hello, {user.username}.</h1>
      <p className="lede">
        You’re signed in. This page checks your session on the server, not just
        whether a cookie exists.
      </p>
      <div className="profile-grid">
        <article className="form-card">
          <span className="badge">● Email verified</span>
          <h2>Account details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{user.username}</dd>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>User ID</dt>
            <dd>
              <code>{String(user._id)}</code>
            </dd>
            <dt>Joined</dt>
            <dd>{new Date(user.createdAt).toISOString().slice(0, 10)}</dd>
          </dl>
          <LogoutButton />
        </article>
        <article className="mini-note">
          <h2>What was checked?</h2>
          <ol>
            <li>The cookie contains a correctly signed JWT.</li>
            <li>The session has not expired.</li>
            <li>The user exists and has verified their email.</li>
            <li>The session version matches the database.</li>
          </ol>
          <p>
            Signing out increments your session version and clears the cookie.
            Old tokens can no longer access protected data.
          </p>
          <a href="/api/users/me">Inspect the safe profile API ↗</a>
        </article>
      </div>
    </section>
  )
}
