export interface FaqItem {
  question: string
  answer: string
}

export const faqData: FaqItem[] = [
  {
    question: 'Araç kamerası taktırmak aracımın garantisini bozar mı?',
    answer: 'Hayır, kesinlikle bozmaz. Montaj sırasında orijinal kablolar kesilmez veya soyulmaz; sigorta baypası (fuse-tap) ile bağımsız emniyetli bağlantı yapılır. Aracınızın fabrika garantisi %100 korunur.'
  },
  {
    question: 'Kamera kabloları aracın içinde dağınık durur mu?',
    answer: 'Hayır. Tüm kablolar tavan döşemesi, kapı fitilleri ve plastik trimlerin altına gizlenir. Dışarıda hiçbir kablo görünmez, orijinal fabrika görünümü korunur.'
  },
  {
    question: 'Tır ve iş makinesi kameraları tazyikli suya ve toza dayanıklı mı?',
    answer: 'Evet. Kameralarımız IP68 ve IP69K endüstriyel su ve toz geçirmezlik standardına sahiptir. Yüksek basınçlı sıcak su jetiyle yıkamada, çamurda ve aşırı şantiye tozunda sorunsuz çalışır.'
  },
  {
    question: 'İnternet bağlantısı olmadan da kameralar kayıt yapar mı?',
    answer: 'Evet. Kamera sistemi internet olmasa da kesintisiz kayıt yapmaya devam eder. İnternet sadece telefonunuzdan uzaktan canlı izlemek istediğinizde gereklidir.'
  },
  {
    question: 'Araç kamerası araç stop ettiğinde park halinde de kayıt yapar mı?',
    answer: 'Evet. Akıllı park kiti sayesinde kontak kapandığında park moduna geçer; darbe veya hareket algıladığında kayıt alır. Akü koruma devresi sayesinde aküyü asla bitirmez.'
  },
  {
    question: 'Montaj için adrese geliyor musunuz?',
    answer: 'Evet. İstanbul ve çevre illere adresinizde mobil montaj hizmeti veriyoruz. Filo, fabrika ve şantiye iş makineleri projelerinde şehir dışına da yerinde kurulum yapıyoruz.'
  },
  {
    question: 'Fiyat nasıl belirlenir ve nasıl teklif alabilirim?',
    answer: 'Fiyat; kurulacak mekan/araç tipine ve kamera adedine göre değişir. 0542 571 0078 WhatsApp hattımıza aracınızı veya mekanınızı yazarak aynı gün net fiyat alabilirsiniz.'
  }
]
