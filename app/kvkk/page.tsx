import type { Metadata } from 'next'
import { KvkkContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Topçam Güvenlik Sistemleri',
  description: 'Topçam Güvenlik Sistemleri 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki aydınlatma metnidir.',
}

export default function KvkkPage() {
  return <KvkkContent />
}
