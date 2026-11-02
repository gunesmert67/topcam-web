import Image from 'next/image'
import Link from 'next/link'
import { productsData } from '../data/products'
import { ROUTES } from '@/config/routes'
import { ArrowRight } from 'lucide-react'

export function ProductsShowcase() {
  const featured = productsData.slice(0, 4)

  return (
    <section className="py-20 bg-secondary/40 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Donanım & Ekipman Vitrini
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-4">
              Yüksek Teknolojili Güvenlik Ekipmanları
            </h2>
            <p className="text-base text-muted-foreground mt-3">
              Kullandığımız tüm ürünler zorlu çevre şartlarına karşı test edilmiş, orijinal ve garantili cihazlardır.
            </p>
          </div>

          <Link
            href={ROUTES.products}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>Tüm Ürünleri İncele</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:-translate-y-1 group"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white border-b border-border p-5 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                  {product.category}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                  {product.summary}
                </p>

                <div className="flex flex-col gap-1.5 mb-5 mt-auto text-[11px] text-muted-foreground">
                  {product.specs.slice(0, 2).map((s, idx) => (
                    <div key={idx} className="flex justify-between border-b border-border/50 pb-1">
                      <span className="font-medium text-foreground">{s.label}:</span>
                      <span className="text-right">{s.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/905425710078?text=Merhaba,%20${encodeURIComponent(product.title)}%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors"
                >
                  <span>Fiyat Teklifi Al</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
