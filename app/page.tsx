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
import FunFacts from "@/component/transparent-ivf";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <FerlixHero />
    <OurCommitment />
    <MeetDoctorSection />
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
