import Footer from "@/component/footer";
import PrivacyPolicy from "@/component/pravicy-policy";
import Header from "@/component/thank-navbar";
import ThankYouPage from "@/component/thankpage";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
