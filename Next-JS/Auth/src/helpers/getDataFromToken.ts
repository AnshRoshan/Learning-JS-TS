import connectdb from '@/db/dbConfig'
import User from '@/models/userModels'
import { readSession } from './security'

export default async function getDataFromToken(token?: string) {
  if (!token) return null
  let session
  try {
    session = readSession(token)
  } catch {
    return null
  }
  await connectdb()
  return User.findOne({
    _id: session.id,
    sessionVersion: session.version,
    verifyEmail: true,
  }).select('_id username email verifyEmail createdAt')
}
