import {
  LandingHero,
  BrandsSection,
  ServicesSection,
  WhyUsSection,
  ProductsShowcase,
  FaqSection,
  CtaBanner,
} from '@/features/website'

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <BrandsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProductsShowcase />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
