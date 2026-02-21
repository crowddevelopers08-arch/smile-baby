'use client'

import { useState } from "react";

const cards = [
  {
    number: "01",
    title: "For the Wife",
    desc: "Ultrasound + basic hormone tests (as advised)",
    accent: "#ec4899",
    iconBg: "#fff0f7",
    imgSrc: "/ivf-smile/blood-test.png", // ✅ change path
    imgAlt: "Wife tests icon",
  },
  {
    number: "02",
    title: "For the Husband",
    desc: "Semen analysis — sperm count & quality",
    accent: "#1e2a6e",
    iconBg: "#eef1fb",
    imgSrc: "/ivf-smile/sperm.png", // ✅ change path
    imgAlt: "Husband tests icon",
  },
  {
    number: "03",
    title: "Together",
    desc: "Doctor review + plan for the best next step",
    accent: "#ec4899",
    iconBg: "#fff0f7",
    imgSrc: "/ivf-smile/vision.png", // ✅ change path
    imgAlt: "Couple review icon",
  },
];

export default function TestsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-8 px-5 sm:px-10 overflow-hidden">

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
          Fertility Evaluation
        </span>

        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-4 md:text-4xl text-2xl"
          style={{ color: "#1e2a6e" }}
        >
          What Tests Are Done for{" "}
          <span style={{ color: "#ec4899" }}>Husband &amp; Wife?</span>
        </h2>

        <p className="mx-auto" style={{ fontSize: 16, color: "#6b7280", maxWidth: 710 }}>
          Many couples feel anxious before the first consultation. The good news: the initial
          tests are simple, standard, and designed to give clarity quickly.
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
              className="relative flex flex-col items-center gap-6 rounded-2xl overflow-hidden cursor-default"
              style={{
                padding: "22px 28px",
                background: active
                  ? accent === "#ec4899"
                    ? "linear-gradient(135deg, #fff0f7, #fce7f3)"
                    : "linear-gradient(135deg, #eef1fb, #e0e7ff)"
                  : "#fafafa",
                border: `1.5px solid ${active ? accent + "35" : "#f0f0f0"}`,
                transform: active ? "translateX(8px)" : "translateX(0px)",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                style={{
                  background: accent,
                  opacity: active ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Number */}
              <span
                className="font-extrabold text-sm tracking-widest flex-shrink-0 w-8 text-center"
                style={{ color: accent, opacity: active ? 0.7 : 0.35, transition: "opacity 0.3s" }}
              >
                {number}
              </span>

              {/* Image circle (replacing SVG icon) */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-2xl"
                style={{
                  width: 56,
                  height: 56,
                  background: active ? accent : iconBg,
                  boxShadow: active ? `0 8px 24px ${accent}40` : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  width={26}
                  height={26}
                  style={{
                    width: 26,
                    height: 26,
                    objectFit: "contain",
                    // ✅ on hover -> icon becomes white
                    filter: active ? "brightness(0) invert(1)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 min-w-0">
                <span
                  className="font-extrabold leading-tight mb-1"
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

              {/* Right arrow — appears on hover */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background: active ? accent : "transparent",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateX(0) scale(1)" : "translateX(-8px) scale(0.8)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center">
        <button
          className="group flex items-center gap-2 font-bold text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105"
          style={{
            padding: "15px 36px",
            borderRadius: 50,
            background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          Book Your First Consultation
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes testPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}