import TeamSections from "@/component/smilebaby/doctor";
import TrustedFamiliesSection from "@/component/smilebaby/ivf-about";
import ServicesGrid from "@/component/smilebaby/ivf-card-service";
import CompassionateCareSection from "@/component/smilebaby/ivf-compassion";
import VisitClinic from "@/component/smilebaby/ivf-contact";
import FAQSections from "@/component/smilebaby/ivf-faq";
import FertilitySection from "@/component/smilebaby/ivf-Fertility";
import Footers from "@/component/smilebaby/ivf-footer";
import FerlixHeros from "@/component/smilebaby/ivf-hero";
import PersonalInfo from "@/component/smilebaby/ivf-personalinfo";
import WhoIsThisFor from "@/component/smilebaby/ivf-service";
import MobileActionBar from "@/component/smilebaby/mobile-bar";
import TestsSection from "@/component/smilebaby/testssection";
// import TestsSection from "@/component/smilebaby/testssection";



export default function Home() {
  return (
    <>
    <FerlixHeros />
    <TrustedFamiliesSection />
    <WhoIsThisFor />
    <FertilitySection />
    <TestsSection />
    <CompassionateCareSection />
    <ServicesGrid />
    <TeamSections />
    <PersonalInfo />
    <FAQSections />
    <VisitClinic />
    <Footers />
    <MobileActionBar />
    </>
  );
}
