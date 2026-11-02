import {
  LandingHero,
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
      <ServicesSection />
      <WhyUsSection />
      <ProductsShowcase />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
