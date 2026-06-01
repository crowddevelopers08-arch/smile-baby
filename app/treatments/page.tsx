'use client'
import React, { useEffect } from 'react'
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

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const page = () => {
  // For conversion tracking on page load (if this is a thank you page)
  useEffect(() => {
    // Check if gtag is loaded and this is a conversion page
    const trackConversion = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17991432817/noj0CJejuZ8cEPH0_YJD', // Your conversion label
          'value': 1.0,
          'currency': 'INR'
        });
      }
    };

    // Small delay to ensure gtag is loaded
    const timer = setTimeout(trackConversion, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Google Ads Base Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17991432817"
        strategy="afterInteractive"
      />

      {/* Google Ads Initialization */}
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17991432817');
        `}
      </Script>

      {/* For manual conversion triggers (like button clicks) */}
      <Script id="conversion-functions" strategy="afterInteractive">
        {`
          function trackFertilityConversion() {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17991432817/noj0CJejuZ8cEPH0_YJD',
                'value': 1.0,
                'currency': 'INR'
              });
            }
            return false;
          }
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
