import type { Metadata } from 'next'
import { BlogContent } from '@/features/website'

export const metadata: Metadata = {
  title: 'Blog & Güvenlik Rehberi | Topçam Güvenlik Sistemleri',
  description: 'Güvenlik kamerası seçim rehberi, araç kamerası montaj ipuçları ve alarm sistemleri hakkında teknik makaleler yakında yayında.',
}

export default function BlogPage() {
  return <BlogContent />
}
