// Learning-only, per-process limiter. Use a shared store before public deployment.
const buckets = new Map<string, { count: number; expires: number }>()
export function allowAttempt(key: string, max = 10, now = Date.now()) {
  for (const [id, bucket] of buckets)
    if (bucket.expires <= now) buckets.delete(id)
  const bucket = buckets.get(key) || { count: 0, expires: now + 15 * 60 * 1000 }
  bucket.count++
  buckets.set(key, bucket)
  return bucket.count <= max
}
