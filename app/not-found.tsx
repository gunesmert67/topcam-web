import Link from 'next/link'
import { ShieldAlert, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl mb-2">404</h1>
        <h2 className="text-xl font-bold text-foreground mb-4">Sayfa Bulunamadı</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanım dışı olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>
    </div>
  )
}
