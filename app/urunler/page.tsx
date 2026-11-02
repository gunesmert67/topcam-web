import type { Metadata } from 'next'
import { UrunlerContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Ürünlerimiz & Donanım Kataloğu | Topçam Güvenlik Sistemleri',
  description: 'IP, AHD kameralar, araç ve mobil DVR setleri, akıllı hırsız alarm panelleri ve server donanımları.',
}

export default function UrunlerPage() {
  return <UrunlerContent />
}
