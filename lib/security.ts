
const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeHtml(str: string): string {
  if (!str) return ''
  return str.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] || char)
}

export function sanitizeHeaderValue(str: string): string {
  if (!str) return ''
  return str.replace(/[\r\n\x00-\x1F\x7F]+/g, ' ').trim()
}

export function sanitizeFilename(filename: string): string {
  if (!filename) return 'unnamed'
  return filename
    .replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/^\.+/, '')
    .slice(0, 100)
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  if (email.length > 254) return false
  if (/[\r\n\x00-\x1F\x7F]/.test(email)) return false
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return emailRegex.test(email.trim())
}
