'use client'

import { X } from "lucide-react";
import { useState } from "react";
import SmileBabyFormed from "./ivf-contact-form";

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

const cards = [
  {
    number: "01",
    title: "For the Wife",
    desc: "Ultrasound + basic hormone screening (as advised)",
    accent: "#ec4899",
    iconBg: "#fff0f7",
    imgSrc: "https://ik.imagekit.io/tnvhh8yfa/public/ivf-smile/blood-test.png?updatedAt=1773300923146",
    imgAlt: "Wife tests icon",
  },
  {
    number: "02",
    title: "For the Husband",
    desc: "Semen analysis — sperm count & quality",
    accent: "#1e2a6e",
    iconBg: "#eef1fb",
    imgSrc: "https://ik.imagekit.io/tnvhh8yfa/public/ivf-smile/sperm.png?updatedAt=1773300923039",
    imgAlt: "Husband tests icon",
  },
  {
    number: "03",
    title: "Together",
    desc: "Doctor review + plan for the best next step",
    accent: "#ec4899",
    iconBg: "#fff0f7",
    imgSrc: "https://ik.imagekit.io/tnvhh8yfa/public/ivf-smile/vision.png?updatedAt=1773300923089",
    imgAlt: "Couple review icon",
  },
];

export default function TestsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="w-full bg-white max-sm:py-0 max-sm:pt-5 py-8 px-5 sm:px-10 overflow-hidden">

      {/* ── HEADER ── */}
      <div className="text-center max-sm:mb-4 mb-8 max-w-2xl mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-5"
          style={{ background: "#fff0f7", color: "#ec4899", border: "1px solid rgba(236,72,153,0.18)" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#ec4899", animation: "testPulse 2s ease-in-out infinite" }}
          />
          Conception Evaluation
        </span>

        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-4 md:text-4xl text-2xl"
          style={{ color: "#1e2a6e" }}
        >
          What Checkups Are Done for{" "}
          <span style={{ color: "#ec4899" }}>Husband &amp; Wife?</span>
        </h2>

        <p className="mx-auto" style={{ fontSize: 16, color: "#6b7280", maxWidth: 710 }}>
          Many couples feel anxious before the first consultation. The good news: the initial screenings are simple, standard, and designed to give clarity quickly.
        </p>
      </div>

      {/* ── 3 HORIZONTAL CARDS ── */}
      <div className="max-w-5xl mx-auto flex max-sm:flex-col gap-4 max-sm:mb-5 mb-10">
        {cards.map(({ number, title, desc, accent, iconBg, imgSrc, imgAlt }, i) => {
          const active = hovered === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col items-center gap-4 rounded-2xl overflow-hidden cursor-default flex-1"
              style={{
                padding: "22px 28px",
                background: active
                  ? accent === "#ec4899"
                    ? "linear-gradient(135deg, #fff0f7, #fce7f3)"
                    : "linear-gradient(135deg, #eef1fb, #e0e7ff)"
                  : "#fafafa",
                border: `1.5px solid ${active ? accent + "35" : "#f0f0f0"}`,
                transform: active ? "translateY(-4px)" : "translateY(0px)",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: active ? `0 12px 32px ${accent}18` : "none",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-4 right-4 h-0.5 rounded-b-full"
                style={{
                  background: accent,
                  opacity: active ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Number */}
              <span
                className="font-extrabold text-xs tracking-widest self-start"
                style={{ color: accent, opacity: active ? 0.8 : 0.4, transition: "opacity 0.3s" }}
              >
                {number}
              </span>

              {/* Image icon — always visible with color tint */}
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: 64,
                  height: 64,
                  background: active ? accent : iconBg,
                  boxShadow: active ? `0 8px 24px ${accent}40` : `0 2px 12px ${accent}18`,
                  transition: "all 0.3s ease",
                  border: `1.5px solid ${active ? "transparent" : accent + "30"}`,
                }}
              >
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  width={32}
                  height={32}
                  style={{
                    width: 32,
                    height: 32,
                    objectFit: "contain",
                    // white on hover, colored tint at rest
                    filter: active
                      ? "brightness(0) invert(1)"
                      : accent === "#ec4899"
                        ? "invert(40%) sepia(90%) saturate(500%) hue-rotate(300deg) brightness(100%) contrast(95%)"
                        : "invert(12%) sepia(60%) saturate(800%) hue-rotate(210deg) brightness(80%) contrast(95%)",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-center text-center gap-1">
                <span
                  className="font-extrabold leading-tight"
                  style={{
                    fontSize: 17,
                    color: active ? accent : "#1e2a6e",
                    transition: "color 0.3s",
                  }}
                >
                  {title}
                </span>
                <span className="text-sm leading-snug" style={{ color: "#6b7280" }}>
                  {desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="group flex items-center rounded-xl gap-2 font-bold text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105"
          style={{
            padding: "15px 36px",
            background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          Book Your First Consultation
        </button>
      </div>

      <style>{`
        @keyframes testPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <SmileBabyFormed />
      </BookingModal>
    </section>
  );
}