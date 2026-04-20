"use client";

import { useState } from "react";
import { CalendarCheck, HeartPulse, ShieldCheck, X } from "lucide-react";
import SmileBabyForm from "./contacts";

const services = [
  {
    icon: HeartPulse,
    title: "Personalized Care",
    text: "Friendly guidance with a plan shaped around your comfort, questions, and next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Care Journey",
    text: "Simple steps, practical timelines, and supportive conversations from start to finish.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Appointment Booking",
    text: "Quick scheduling so you can connect with the Smile Baby team at a convenient time.",
  },
];

export default function SampleComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="bg-[#fff7fb]">
      <section className="mx-auto flex min-h-[72vh] max-w-7xl flex-col items-center gap-10 px-5 py-16 md:flex-row md:px-8 lg:py-20">
        <div className="w-full md:w-[54%]">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-pink-500">
            Smile Baby Care
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
            Compassionate support for every family.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Meet a caring team in a calm, welcoming environment designed around your comfort,
            privacy, and peace of mind.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="inline-flex h-12 items-center justify-center rounded-md bg-pink-500 px-6 font-semibold text-white shadow-sm transition hover:bg-pink-600"
            >
              Book Appointment
            </button>
            <a
              href="#care-highlights"
              className="inline-flex h-12 items-center justify-center rounded-md border border-pink-200 bg-white px-6 font-semibold text-pink-600 transition hover:border-pink-300 hover:bg-pink-50"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-xl shadow-pink-100/80 md:ml-auto md:w-[46%]">
          <img
            src="https://ik.imagekit.io/tnvhh8yfa/public/mother-with.jpg"
            alt="Family care moment"
            className="block aspect-[4/3] h-auto min-h-[260px] w-full object-cover sm:min-h-[340px] md:min-h-[460px]"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/92 p-4 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-slate-950">Begin with expert guidance</p>
            <p className="mt-1 text-sm text-slate-600">
              Speak with the Smile Baby care team about your next step.
            </p>
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Book appointment form"
        >
          <button
            type="button"
            aria-label="Close appointment form"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsFormOpen(false)}
          />
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              aria-label="Close appointment form"
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition hover:bg-pink-50 hover:text-pink-600"
            >
              <X className="h-5 w-5" />
            </button>
            <SmileBabyForm />
          </div>
        </div>
      )}
    </main>
  );
}
