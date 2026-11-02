import type { Metadata } from 'next'
import { CerezContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Çerez Politikası | Topçam Güvenlik Sistemleri',
  description: 'Topçam Güvenlik Sistemleri web sitesi çerez kullanım politikası.',
}

export default function CerezPolitikasiPage() {
  return <CerezContent />
}
