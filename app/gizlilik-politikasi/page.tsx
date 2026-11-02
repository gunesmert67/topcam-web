import type { Metadata } from 'next'
import { GizlilikContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Topçam Güvenlik Sistemleri',
  description: 'Topçam Güvenlik Sistemleri web sitesi gizlilik ve güvenlik politikası.',
}

export default function GizlilikPolitikasiPage() {
  return <GizlilikContent />
}
