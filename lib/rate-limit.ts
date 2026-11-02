/**
 * Topçam Güvenlik In-Memory Sliding Window Rate Limiter
 * Protects public endpoints (like /api/contact) against brute force,
 * email bombing, and Denial of Service (DoS) attacks.
 */

interface RateLimitRecord {
  timestamps: number[]
}

const rateLimitMap = new Map<string, RateLimitRecord>()

// Periodically clean up expired entries every 5 minutes to avoid memory leaks
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

/**
 * Checks if the given key has exceeded the rate limit within the specified window.
 *
 * @param key Unique identifier (e.g., client IP address)
 * @param limit Maximum allowed requests within the time window
 * @param windowMs Time window in milliseconds (default: 15 minutes)
 */
export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): RateLimitResult {
  const now = Date.now()
  cleanup(windowMs)

  const record = rateLimitMap.get(key) ?? { timestamps: [] }
  const cutoff = now - windowMs
  // Keep only timestamps within the active sliding window
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

/**
 * Safely extracts client IP from request headers.
 */
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
