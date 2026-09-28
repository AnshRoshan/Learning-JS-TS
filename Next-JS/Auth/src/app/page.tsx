import Link from 'next/link'

export const dynamic = 'force-dynamic'

const lessons = [
  [
    '01',
    'Create an account',
    'Validate input and store a bcrypt password hash, never the password.',
    '/signup',
    'Try signup',
  ],
  [
    '02',
    'Verify your email',
    'Send an expiring link through SMTP. Store only its SHA-256 hash.',
    '/resend-verification',
    'Request a link',
  ],
  [
    '03',
    'Start a session',
    'Verify credentials and issue a signed JWT in an HTTP-only cookie.',
    '/login',
    'Sign in',
  ],
  [
    '04',
    'Protect your data',
    'Check the signature, expiry and database session version on the server.',
    '/profile',
    'View my session',
  ],
  [
    '05',
    'Recover access',
    'Use a one-time email link to reset a password and revoke old sessions.',
    '/forgot-password',
    'Reset a password',
  ],
  [
    '06',
    'End the session',
    'Clear the cookie and invalidate existing sessions on every device.',
    '/profile',
    'Manage session',
  ],
]
export default function Home() {
  const configured = !!(
    process.env.MONGO_URI &&
    process.env.JWT_SECRET &&
    process.env.APP_URL &&
    process.env.SMTP_HOST &&
    process.env.MAIL_FROM
  )
  return (
    <>
      <section className="hero">
        <div className="eyebrow">THE AUTHENTICATION PLAYGROUND</div>
        <h1>
          Understand what happens
          <br />
          <em>after “sign in”.</em>
        </h1>
        <p className="lede">
          One small app. The complete account lifecycle. Explore authentication,
          secure sessions, and transactional email — with the code right here in
          Learning-JS-TS.
        </p>
        <div className="actions">
          <Link className="button" href="/signup">
            Create your account ↗
          </Link>
          <Link className="button secondary" href="/login">
            I already have an account
          </Link>
        </div>
        <div className="pills">
          <span>TypeScript</span>
          <span>App Router</span>
          <span>Cookie-based sessions</span>
          <span>No external auth service</span>
        </div>
      </section>
      {!configured && (
        <aside className="notice">
          <strong>Set up your lab first.</strong> Add MongoDB, a JWT secret,
          your app URL, and SMTP settings to <code>.env.local</code>. See{' '}
          <code>Next-JS/Auth/README.md</code>. No accounts or email delivery are
          simulated.
        </aside>
      )}
      <section>
        <div className="section-heading">
          <div>
            <div className="eyebrow">LEARN BY DOING</div>
            <h2>The account lifecycle</h2>
          </div>
          <span>Six steps, end to end</span>
        </div>
        <div className="grid">
          {lessons.map(([number, title, text, href, label]) => (
            <article className="card" key={number}>
              <span className="number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href={href}>
                {label} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="notes">
        <h2>
          Small enough to read.
          <br />
          Real enough to learn.
        </h2>
        <p>
          Follow the route handlers, user model, and security helpers. Email
          links expire, protected routes verify the session server-side, and
          password resets invalidate old sessions. The README explains the
          tradeoffs and what to harden before production.
        </p>
      </section>
    </>
  )
}
