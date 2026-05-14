// import PageTemplate, { generateMetadata } from './[slug]/page'

import { AboutSection } from './components/AboutSection'
import { HeroSection } from './components/HeroSection'
import { LogosSection } from './components/LogosSection'
import { ServicesSection } from './components/ServicesSection'

// export default PageTemplate

// export { generateMetadata }

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LogosSection />
      <ServicesSection />
    </>
  )
}
