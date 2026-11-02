import type { Metadata } from 'next'
import { HakkimizdaContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Hakkımızda | Topçam Güvenlik Sistemleri',
  description: 'Topçam Güvenlik Sistemleri hakkında; profesyonel kamera montajı, mobil araç güvenliği, alarm ve kurumsal teknoloji altyapısı hikayemiz.',
}

export default function HakkimizdaPage() {
  return <HakkimizdaContent />
}
