import SampleComponent from "@/component/treatments/sample-component";
import TreatmentFooter from "@/component/treatments/treatment-footer";
import TreatmentNavbar from "@/component/treatments/treatment-navbar";

export default function TreatmentPage() {
  return (
    <>
      <TreatmentNavbar />
      <SampleComponent />
      <TreatmentFooter />
    </>
  );
}
