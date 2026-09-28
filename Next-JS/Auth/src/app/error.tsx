'use client'
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="profile">
      <h1>The lab needs attention.</h1>
      <p>
        Unable to load this page. Check your database and environment
        configuration, then try again.
      </p>
      <button onClick={reset}>Try again</button>
    </section>
  )
}
