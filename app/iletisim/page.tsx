import type { Metadata } from 'next'
import { IletisimContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'İletişim & Fiyat Teklifi | Topçam Güvenlik Sistemleri',
  description: 'Topçam Güvenlik Sistemleri iletişim; 0542 571 0078, kadirtopcam34@gmail.com, ücretsiz keşif ve montaj fiyat teklifi.',
}

export default function IletisimPage() {
  return <IletisimContent />
}
