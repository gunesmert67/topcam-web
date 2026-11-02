import { MetadataRoute } from 'next'
import { baseUrl } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: 'hizmetler', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'urunler', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'hakkimizda', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: 'iletisim', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: 'kvkk', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'gizlilik-politikasi', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'cerez-politikasi', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  return routes.map((r) => ({
    url: r.path ? `${baseUrl}/${r.path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
