
export const ROUTES = {
  home: '/',
  about: '/hakkimizda',
  services: '/hizmetler',
  products: '/urunler',
  blog: '/blog',
  contact: '/iletisim',
  kvkk: '/kvkk',
  privacy: '/gizlilik-politikasi',
  cookie: '/cerez-politikasi',
  serviceCameras: '/hizmetler#guvenlik-kamera-sistemleri',
  serviceTrucks: '/hizmetler#tir-ve-agır-vasita-kamera-sistemleri',
  serviceMachinery: '/hizmetler#is-makinesi-kamera-sistemleri',
  servicePassengerCars: '/hizmetler#binek-arac-on-arka-kamera-montaji',
  serviceAlarms: '/hizmetler#hirsiz-ve-yangin-alarm-sistemleri',
  serviceServers: '/hizmetler#santral-ve-server-sistemleri',
} as const

export type RouteKey = keyof typeof ROUTES
