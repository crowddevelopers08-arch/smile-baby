import { CalendarClock, Check, HeartHandshake, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import TreatmentFooter from "@/component/treatments/treatment-footer";
import TreatmentNavbar from "@/component/treatments/treatment-navbar";

const nextSteps = [
  "Our care coordinator will review your request.",
  "You will receive a call or WhatsApp follow-up shortly.",
  "A clear appointment slot and guidance will be shared with you.",
];

const reassuranceItems = [
  {
    icon: CalendarClock,
    title: "Quick Follow-Up",
    text: "The Smile Baby team will connect with you soon.",
  },
  {
    icon: ShieldCheck,
    title: "Private Details",
    text: "Your information stays confidential with our care team.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Care",
    text: "You will be guided with patience and clarity.",
  },
];

export default function TreatmentThankYouPage() {
  return (
    <>
      <Script id="treatment-thank-you-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17991432817/noj0CJejuZ8cEPH0_YJD',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
      <TreatmentNavbar />
      <main className="bg-white">
        <section className="relative overflow-hidden bg-[#fff7fb]">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:py-20">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-200">
                <Check className="h-8 w-8" aria-hidden="true" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-500">
                Request received
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
                Thank you. Your appointment request is with us.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                We have received your details. Our Smile Baby care team will contact you soon to
                understand your needs and help you plan the next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+918884752134"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-pink-500 px-6 font-semibold text-white shadow-sm transition hover:bg-pink-600"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
                <Link
                  href="/treatment"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-pink-200 bg-white px-6 font-semibold text-pink-600 transition hover:border-pink-300 hover:bg-pink-50"
                >
                  Back to Treatment
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-pink-100">
                <img
                  src="https://ik.imagekit.io/tnvhh8yfa/public/mother-with.jpg"
                  alt="Smile Baby care support"
                  className="block aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
                    What happens next
                  </p>
                  <div className="mt-4 space-y-4">
                    {nextSteps.map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600">
                          {index + 1}
                        </span>
                        <p className="pt-0.5 text-sm leading-6 text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-pink-100 bg-white px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {reassuranceItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-lg border border-pink-100 bg-white p-5">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-pink-50 text-pink-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <TreatmentFooter />
    </>
  );
}
