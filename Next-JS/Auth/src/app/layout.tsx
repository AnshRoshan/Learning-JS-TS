import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auth Lab · Learning JS / TS',
  description: 'A hands-on Next.js authentication and email learning project.',
  robots: { index: false, follow: false },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/" className="brand">
            <span className="mark">a.</span> Auth Lab
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Overview</Link>
            <Link href="/profile">My session</Link>
            <Link href="/login">Sign in ↗</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <span>LEARNING JS / TS</span>
          <span>Next.js · MongoDB · SMTP</span>
          <span>A learning project, not a managed identity service.</span>
        </footer>
      </body>
    </html>
  )
}
