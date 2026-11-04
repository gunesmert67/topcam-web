import { BookOpen, Clock, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

const upcomingArticles = [
  {
    title: 'Tır ve Kamyonlarda Kör Nokta Kazalarını Sıfıra İndirmenin Yolları',
    category: 'Mobil Araç Güvenliği',
    readTime: '4 dk okuma',
    summary: 'Ağır vasıtalarda sağ ve sol kör nokta kameraları nasıl konumlandırılmalı? Dorse bağlantılarında dikkat edilmesi gerekenler.',
  },
  {
    title: 'Binek Araç Yol Kayıt Kamerası Montajında Gizli Kablolama Nasıl Yapılır?',
    category: 'Araç Kamerası Montajı',
    readTime: '5 dk okuma',
    summary: 'Aracın garantisini bozmadan, sigorta baypası ile 24 saat park nöbeti devresi kurulumunun tüm püf noktaları.',
  },
  {
    title: 'İş Yeri ve Fabrika Güvenliğinde IP mi, AHD mi Tercih Edilmeli?',
    category: 'Güvenlik Kameraları',
    readTime: '6 dk okuma',
    summary: 'Bütçe, çözünürlük, kablo mesafesi ve yapay zeka analizlerine göre en doğru güvenlik kamera mimarisini seçme rehberi.',
  },
  {
    title: 'Kablosuz Akıllı Alarm Sistemlerinde Yanlış Alarmlar Nasıl Önlenir?',
    category: 'Alarm Sistemleri',
    readTime: '3 dk okuma',
    summary: 'Evcil hayvan algılamayan (Pet-Immune) PIR dedektörler ve doğru konumlandırma ile sıfır hatalı alarm kılavuzu.',
  },
]

export function BlogContent() {
  return (
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-20 select-none">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Blog & Teknik Yazılar
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Güvenlik kamerası teknolojileri, araç montaj ipuçları ve teknik rehberlerimiz çok yakında burada olacak.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {upcomingArticles.map((article, idx) => (
            <div
              key={idx}
              className="flex flex-col p-5 sm:p-7 rounded-3xl border border-border bg-card shadow-apple transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/40">
                  <Clock className="w-3 h-3" />
                  <span>Çok Yakında</span>
                </span>
              </div>

              <h2 className="text-base font-bold text-foreground mb-2 leading-snug">
                {article.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                {article.summary}
              </p>

              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.readTime}</span>
                <span className="font-semibold text-slate-400">Yayına Hazırlanıyor</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-[#0B132B] text-white p-6 sm:p-10 text-center flex flex-col items-center shadow-apple-lg">
          <BookOpen className="w-10 h-10 text-blue-400 mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Aklınıza Takılan Bir Güvenlik Konusu mu Var?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mb-6 leading-relaxed">
            Makalelerimizin yayınlanmasını beklemeden; kamera seçimi, montaj uygunluğu veya fiyatlar hakkında Kadir Topçam’a hemen danışabilirsiniz.
          </p>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all active:scale-[0.99] hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp’tan Kadir Topçam’a Sor</span>
          </a>
        </div>

      </div>
    </div>
  )
}
