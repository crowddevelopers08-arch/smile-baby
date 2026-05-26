import React from 'react'
import Script from 'next/script'

import Headers from '@/component/smilebaby/smile-navbar'
import Footer from '@/component/treatment/footer'
import ThankYouPage from '@/component/treatment/thankpage'

const page = () => {
  return (
    <div>
      {/* Google Ads Conversion Tracking */}
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

          // Auto trigger on thank you page load
          gtag_report_conversion();
        `}
      </Script>

      <Headers />
      <ThankYouPage />
      <Footer />
    </div>
  )
}

export default page