"use client";

import { useEffect } from "react";
import MeetDoctorSection from "@/component/about-doctor";
import OurCommitment from "@/component/about-section";
import VisitClinic from "@/component/contact";
import TeamSection from "@/component/doctor-section";
import FAQSection from "@/component/faq";
import Footer from "@/component/footer";
import FerlixHero from "@/component/hero-section";
import WorkProcessSection from "@/component/our-services";
import SuccessRatesSection from "@/component/success";
import TestimonialsSection from "@/component/testomials";
import FunFacts from "@/component/transparent-smile";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Check if GTM is already added to avoid duplicates
    if (!document.querySelector('#gtm-script')) {
      // Add the main GTM script
      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T6LXZFWR');
      `;
      document.head.appendChild(script);

      // Add the noscript iframe (for users with JS disabled)
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-T6LXZFWR';
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      
      // Insert after body opening tag
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, []);

  return (
    <>
      <FerlixHero />
      <OurCommitment />
      {/* <MeetDoctorSection /> */}
      <TeamSection />
      <WorkProcessSection />
      <FunFacts />
      <SuccessRatesSection />
      <TestimonialsSection />
      <FAQSection />
      <VisitClinic />
      <Footer />
    </>
  );
}