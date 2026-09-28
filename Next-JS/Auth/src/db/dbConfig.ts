import mongoose from 'mongoose'

const cache = globalThis as typeof globalThis & {
  authDb?: Promise<typeof mongoose>
}

export default async function connectdb() {
  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI is not configured')
  if (!cache.authDb) {
    cache.authDb = mongoose
      .connect(uri, { serverSelectionTimeoutMS: 5000 })
      .catch((error) => {
        cache.authDb = undefined
        throw error
      })
  }
  return cache.authDb
}
