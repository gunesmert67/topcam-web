import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ProductsShowcase } from '@/components/sections/ProductsShowcase'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaBanner } from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProductsShowcase />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
