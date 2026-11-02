
interface RateLimitRecord {
  timestamps: number[]
}

const rateLimitMap = new Map<string, RateLimitRecord>()

// Clean up expired sliding-window records every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000
let lastCleanup = Date.now()

function cleanup(windowMs: number) {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return
  lastCleanup = now

  const cutoff = now - windowMs
  for (const [key, record] of rateLimitMap.entries()) {
    record.timestamps = record.timestamps.filter(ts => ts > cutoff)
    if (record.timestamps.length === 0) {
      rateLimitMap.delete(key)
    }
  }
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetInSeconds: number
}

export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): RateLimitResult {
  const now = Date.now()
  cleanup(windowMs)

  const record = rateLimitMap.get(key) ?? { timestamps: [] }
  const cutoff = now - windowMs
  record.timestamps = record.timestamps.filter(ts => ts > cutoff)

  if (record.timestamps.length >= limit) {
    const oldestTimestamp = record.timestamps[0]
    const resetInSeconds = Math.ceil((oldestTimestamp + windowMs - now) / 1000)
    rateLimitMap.set(key, record)
    return {
      success: false,
      remaining: 0,
      resetInSeconds: Math.max(1, resetInSeconds),
    }
  }

  record.timestamps.push(now)
  rateLimitMap.set(key, record)

  return {
    success: true,
    remaining: limit - record.timestamps.length,
    resetInSeconds: Math.ceil(windowMs / 1000),
  }
}

export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get('x-forwarded-for')
  if (forwardedFor) {
    const clientIp = forwardedFor.split(',')[0].trim()
    if (clientIp) return clientIp
  }

  const realIp = headers.get('x-real-ip')
  if (realIp) return realIp.trim()

  const vercelIp = headers.get('x-vercel-forwarded-for')
  if (vercelIp) return vercelIp.split(',')[0].trim()

  return '127.0.0.1'
}
