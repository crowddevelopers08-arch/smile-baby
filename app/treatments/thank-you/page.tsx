import React from 'react'
import Script from 'next/script'

import Headers from '@/component/smilebaby/smile-navbar'
import Footer from '@/component/treatment/footer'
import ThankYouPage from '@/component/treatment/thankpage'

const page = () => {
  return (
    <div>
      {/* Google Ads - Load gtag library first */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=AW-17991432817`}
        strategy="afterInteractive"
      />
      
      {/* Initialize gtag */}
      <Script id="google-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17991432817');
        `}
      </Script>

      {/* Conversion Tracking Script */}
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-17991432817/noj0CJejuZ8cEPH0_YJD',
              'value': 1.0,
              'currency': 'INR',
              'event_callback': callback
            });
            return false;
          }
          
          // Ensure gtag is loaded before triggering
          if (typeof gtag !== 'undefined') {
            gtag_report_conversion();
          } else {
            // Wait for gtag to load
            window.addEventListener('load', function() {
              if (typeof gtag !== 'undefined') {
                gtag_report_conversion();
              }
            });
          }
        `}
      </Script>

      <Headers />
      <ThankYouPage />
      <Footer />
    </div>
  )
}

export default page