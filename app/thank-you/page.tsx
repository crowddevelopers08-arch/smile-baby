import Footer from "@/component/footer";
import Header from "@/component/thank-navbar";
import ThankYouPage from "@/component/thankpage";
import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div>
      <Script id="main-thank-you-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17991432817/TqeQCOjJs58cEPH0_YJD',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
      <Header />
      <ThankYouPage />
      <Footer />
    </div>
  );
};

export default page;
