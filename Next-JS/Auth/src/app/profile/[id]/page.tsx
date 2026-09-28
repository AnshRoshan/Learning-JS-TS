import { redirect } from 'next/navigation'
// Compatibility with the original example. A URL ID never authorizes access.
export default function LegacyProfile() {
  redirect('/profile')
}
