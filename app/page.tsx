import OurCommitment from "@/component/about-section";
import TeamSection from "@/component/doctor-section";
import FAQSection from "@/component/faq";
import FerlixHero from "@/component/hero-section";
import WorkProcessSection from "@/component/our-services";
import FunFacts from "@/component/transparent-ivf";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <FerlixHero />
    <OurCommitment />
    <TeamSection />
    <WorkProcessSection />
    <FunFacts />
    <FAQSection />
    </>
  );
}
