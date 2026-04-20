import MeetDoctorSection from "@/component/smilebaby/doctor";
import TeamSections from "@/component/smilebaby/doctor";
import TrustedFamiliesSection from "@/component/smilebaby/smile-about";
import ServicesGrid from "@/component/smilebaby/smile-card-service";
import CompassionateCareSection from "@/component/smilebaby/smile-compassion";
import VisitClinic from "@/component/smilebaby/smile-contact";
import FAQSections from "@/component/smilebaby/smile-faq";
import ReproductiveHealth from "@/component/smilebaby/smile-reproductive";
import Footers from "@/component/smilebaby/smile-footer";
import FerlixHeros from "@/component/smilebaby/smile-hero";
import PersonalInfo from "@/component/smilebaby/smile-personalinfo";
import WhoIsThisFor from "@/component/smilebaby/smile-service";
import MobileActionBar from "@/component/smilebaby/mobile-bar";
import TestsSection from "@/component/smilebaby/testssection";
// import TestsSection from "@/component/smilebaby/testssection";



export default function Home() {
  return (
    <>
    <FerlixHeros />
    <TrustedFamiliesSection />
    <WhoIsThisFor />
    <ReproductiveHealth />
    <MeetDoctorSection />
    <TestsSection />
    <CompassionateCareSection />
    <ServicesGrid />
    {/* <TeamSections /> */}
    <PersonalInfo />
    <FAQSections />
    <VisitClinic />
    <Footers />
    <MobileActionBar />
    </>
  );
}
