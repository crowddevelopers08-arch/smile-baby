'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';
import SmileBabyForm from '../contact-froms';

interface imgse {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BookingModal = ({ isOpen, onClose, children }: imgse) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 popup-overlay">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all"
        >
          <X size={20} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const credentials = [
  { label: "MBBS, MS (OBG)", sub: null },
  { label: "Fertility Specialist", sub: "Dip. In reprod. Med." },
];

const MeetDoctorSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-6 sm:py-16 bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 lg:py-20 px-4 sm:px-6 lg:px-8">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Mobile/Tablet top label ── */}
        <div className="lg:hidden flex items-center gap-2 mb-5">
          <span className="h-px w-8 bg-[#ec4899]" />
          <p className="text-[#ec4899] text-xs font-semibold tracking-[0.2em] uppercase">
            Meet Your Doctor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ══════════════════════════════════════
              LEFT — Doctor Image
          ══════════════════════════════════════ */}
          <div className="relative">

            {/* Decorative border frame — desktop only */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border-2 border-[#ec4899]/30 rounded-3xl" />

            {/* Image wrapper */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
              <img
                src="/doctors.avif"
                alt="Dr. Mangala Devi K R"
                className="w-full h-[420px] sm:h-[520px] lg:h-[640px] object-cover object-top"
              />

              {/* Dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/20 to-transparent" />

              {/* Experience badge — top right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-center shadow-lg">
                <p className="text-white font-extrabold text-xl sm:text-2xl leading-none">10+</p>
                <p className="text-white/70 text-xs mt-0.5">Years Exp.</p>
              </div>

              {/* Name card — bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                      Dr. Mangala Devi K R
                    </h3>
                    <p className="text-[#f9a8d4] font-medium text-sm sm:text-base mt-0.5">
                      MBBS, MS (OBG)
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                      Fertility Specialist · Dip. In reprod. Med.
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">Reg No. 65809</p>
                  </div>
                  {/* Verified badge */}
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ec4899] shadow-lg shadow-[#ec4899]/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="18" height="18">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Pink glow bottom */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#ec4899] opacity-20 blur-2xl rounded-full" />
          </div>

          {/* ══════════════════════════════════════
              RIGHT — Content
          ══════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* Section label — desktop only */}
            <div className="hidden lg:flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#ec4899]" />
              <p className="text-[#ec4899] text-xs font-semibold tracking-[0.25em] uppercase">
                Meet Your Doctor
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#1e2a6e] mb-4 sm:mb-5">
              Meet{" "}
              <span className="relative inline-block text-[#f9a8d4]">
                Dr. Mangala
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" height="5">
                  <path d="M0 6 Q50 1 100 5 Q150 9 200 3" stroke="#ec4899" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Devi K R
            </h2>

            {/* Bio */}
            <p className="text-[#1e2a6e] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Dr. Mangala Devi K R is a consultant obstetrician, gynaecologist, and fertility specialist focused on ethical, personalised IVF planning. Known for clear communication and patient-first care, she guides couples through the process with continuity and transparency.
            </p>

            {/* Credentials */}
            <div className="flex gap-3 sm:gap-3.5 mb-7 sm:mb-9">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 bg-black/5 hover:bg-black/10 border border-black/10 hover:border-[#ec4899]/40 rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ec4899]/20 flex items-center justify-center group-hover:bg-[#ec4899]/30 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" width="14" height="14">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1e2a6e] font-semibold text-sm sm:text-base leading-tight">{c.label}</p>
                    {c.sub && <p className="text-[#1e2a6e]/50 text-xs sm:text-sm">{c.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-[#ec4899]/30 hover:shadow-[#ec4899]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Consult Dr. Mangala Devi
              </button>
            </div>

          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <SmileBabyForm />
      </BookingModal>
    </section>
  );
};

export default MeetDoctorSection;