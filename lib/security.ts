/**
 * Topçam Güvenlik Sistemleri Security Utilities
 * Application-wide defensive security helpers for input sanitization,
 * output escaping, and injection prevention.
 */

const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

/**
 * Escapes HTML characters in untrusted strings to prevent XSS and HTML injection.
 */
export function escapeHtml(str: string): string {
  if (!str) return ''
  return str.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] || char)
}

/**
 * Strips newline and carriage return characters (\r, \n) to prevent
 * Email Header Injection and HTTP Response Splitting.
 */
export function sanitizeHeaderValue(str: string): string {
  if (!str) return ''
  return str.replace(/[\r\n\x00-\x1F\x7F]+/g, ' ').trim()
}

/**
 * Sanitizes filenames to prevent path traversal and filesystem manipulation.
 */
export function sanitizeFilename(filename: string): string {
  if (!filename) return 'unnamed'
  return filename
    .replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/^\.+/, '')
    .slice(0, 100)
}

/**
 * Validates email according to RFC 5321 length limits and standard format,
 * strictly rejecting control characters and unsafe patterns.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  if (email.length > 254) return false
  if (/[\r\n\x00-\x1F\x7F]/.test(email)) return false
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return emailRegex.test(email.trim())
}
