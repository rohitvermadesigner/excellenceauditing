// import PageTemplate, { generateMetadata } from './[slug]/page'

import { AboutSection } from './components/AboutSection'
import AffiliationAccreditations from './components/AffiliationAccreditations'
import BlogSection from './components/BlogSection'
import FaqSection from './components/FaqSection'
import { HeroSection } from './components/HeroSection'
import { LogosSection } from './components/LogosSection'
import { ServicesSection } from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import { VideoSection } from './components/VideoSection'

// export default PageTemplate

// export { generateMetadata }

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LogosSection />
      <ServicesSection />
      <AffiliationAccreditations />
      <TestimonialsSection />
      <FaqSection />
      <VideoSection />
      {/* <BlogSection /> */}
    </>
  )
}
