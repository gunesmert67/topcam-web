export interface FaqItem {
  question: string
  answer: string
}

export const faqData: FaqItem[] = [
  {
    question: 'Binek araca sonradan takılan ön ve arka kamera aracın garantisini bozar mı?',
    answer: 'Hayır, kesinlikle bozmaz. Montaj işlemlerimizde orijinal kablo demetleri kesilmez veya soyulmaz. Aracın sigorta kutusundan sigorta baypası (fuse-tap) aparatı kullanılarak, bağımsız bir hat üzerinden güvenli elektrik bağlantısı yapılır. Bu sayede aracınızın garantisi ve orijinalliği %100 korunur.'
  },
  {
    question: 'Tır ve kamyon kameraları zorlu hava ve yıkama koşullarına dayanıklı mı?',
    answer: 'Evet. Ağır vasıtalar, tırlar ve iş makineleri için kullandığımız kameralar IP68 ve IP69K endüstriyel su ve toz geçirmezlik sertifikalarına sahiptir. Yüksek basınçlı sıcak su jetiyle araç yıkamalarında, yoğun yağmur, kar, çamur ve aşırı sıcak havalarda sorunsuz çalışır.'
  },
  {
    question: 'Güvenlik kamera sistemini internet olmadan da kullanabilir miyim?',
    answer: 'Evet. Kamera ve kayıt cihazınız mekanınızda internet bağlantısı olmasa dahi kesintisiz kayıt yapmaya devam eder ve görüntüleri kendi dahili diskinde saklar. Monitörden canlı ve geçmiş kayıtları izleyebilirsiniz. İnternet bağlantısı ise yalnızca telefon veya bilgisayarınızdan uzaktan canlı izleme yapabilmeniz için gereklidir.'
  },
  {
    question: 'Araç kamerası araç stop ettiğinde park halinde de kayıt yapar mı?',
    answer: 'Evet. Kullandığımız akıllı park kiti (Hardwire Kit) sayesinde araç kontağı kapandığında kamera otomatik olarak Park Moduna geçer. Harekete ve darbeye duyarlı olarak kayıt yapmaya devam eder. Entegre düşük voltaj koruma rölesi, araç akü voltajı belirlenen sınırın (örneğin 11.8V) altına indiğinde kameranın elektriğini otomatik keserek aracınızın aküsünün bitmesini kesinlikle engeller.'
  },
  {
    question: 'Montaj ve keşif hizmetiniz nereleri kapsıyor?',
    answer: 'Topçam Güvenlik Sistemleri olarak başta İstanbul olmak üzere çevre illere yerinde keşif ve profesyonel mobil montaj hizmeti sunuyoruz. Kurumsal filo projeleri, şantiye ve fabrika iş makinesi kurulumlarında ise Türkiye genelinde proje bazlı hizmet sağlamaktayız.'
  },
  {
    question: 'Fiyatlandırma nasıl belirlenir ve nasıl teklif alabilirim?',
    answer: 'Fiyatlarımız; kurulacak alanın büyüklüğüne, kamera ve sensör adedine, kablo mesafesine ve tercih edilen donanım özelliklerine (IP, AHD, 4K, gece renkli vb.) göre en uygun maliyetle optimize edilir. 0542 571 0078 numaralı WhatsApp hattımızdan veya iletişim formumuzdan mekanınızın detaylarını ileterek aynı gün içinde net fiyat teklifi alabilirsiniz.'
  }
]
