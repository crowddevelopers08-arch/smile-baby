import React from 'react'
import Script from 'next/script'

import FertilityHero from '@/component/treatment/FertilityHero'
import FertilityBanner from '@/component/treatment/herosection'
import Navbar from '@/component/treatment/nabat'
import OurTeam from '@/component/treatment/OurTeam'
import ServicesSection from '@/component/treatment/PricingSection'
import CostBanner from '@/component/treatment/sectiontwo'
import ComparisonBanner from '@/component/treatment/tablecomponent'
import TestimonialsSection from '@/component/treatment/TestimonialsSection'
import FAQSection from '@/component/treatment/FAQSection'
import Footer from '@/component/treatment/footer'
import MobileActionBar from '@/component/treatment/mobile-bar'

const page = () => {
  return (
    <div>
      {/* Google Ads Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17991432817"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17991432817');
        `}
      </Script>

      <MobileActionBar />
      <Navbar />
      <FertilityBanner />
      <FertilityHero />
      <OurTeam />
      <CostBanner />
      <ServicesSection />
      <ComparisonBanner />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default page