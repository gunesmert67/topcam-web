import type { Metadata } from 'next'
import { HizmetlerContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Topçam Güvenlik Sistemleri',
  description: 'Güvenlik kamerası montajı, tır ve iş makinesi mobil kameraları, binek araç ön-arka yol kayıt sistemleri, alarm ve santral kurulumu.',
}

export default function HizmetlerPage() {
  return <HizmetlerContent />
}
