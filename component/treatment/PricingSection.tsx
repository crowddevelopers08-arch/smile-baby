'use client';

import { useState } from "react";
import BookingModal from "./BookingModal";

const steps = [
  {
    number: "01",
    title: "Planning Visit",
    short: "Review & Strategy",
    description:
      "We review your reports, confirm your diagnosis, and walk you through realistic expectations and full costs. No obligation after this visit.",
    iconPath: "/image4.png",
  },
  {
    number: "02",
    title: "Stimulation",
    short: "Controlled Ovarian Stimulation",
    description:
      "A customised hormone protocol based on your ovarian reserve — AMH, antral follicle count, and your history. Close scan monitoring every few days ensures optimal response.",
    iconPath: "/image5.png",
  },
  {
    number: "03",
    title: "Egg Retrieval",
    short: "Minor Procedure Under Sedation",
    description:
      "A minor procedure under sedation. Our team retrieves mature eggs with precision. You're typically awake and resting within a few hours.",
    iconPath: "/image6.png",
  },
  {
    number: "04",
    title: "Fertilisation & Culture",
    short: "Embryology Lab · 3–5 Days",
    description:
      "In our on-site embryology lab, eggs and sperm are combined and monitored for 3–5 days. Our embryologist updates you as your embryos develop.",
    iconPath: "/image1.png",
  },
  {
    number: "05",
    title: "Embryo Transfer",
    short: "Gentle, Painless Procedure",
    description:
      "The best-quality embryo is transferred — a gentle, typically painless procedure. Additional embryos can be frozen for future attempts if needed.",
    iconPath: "/image2.png",
  },
  {
    number: "06",
    title: "Pregnancy Confirmation",
    short: "Blood Test · 14 Days Post-Transfer",
    description:
      "A blood test 14 days post-transfer confirms the result. If successful, we guide early pregnancy care. If not, we re-evaluate the full cycle — not just repeat the same protocol.",
    iconPath: "/image3.png",
  },
];

export default function IVFRoadmap() {
  const [active, setActive] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const current = steps[active];

  return (
    <section
      className="ivf-root w-full relative overflow-hidden"
      style={{ background: "#faf8f5", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .ivf-root { font-family: 'DM Sans', sans-serif; }
        .ivf-serif { font-family: 'DM Serif Display', serif !important; }

        .ivf-step { transition: all 0.25s ease; cursor: pointer; border: none; outline: none; }
        .ivf-step-inactive { background: #ffffff; }
        .ivf-step-inactive:hover { background: rgba(30,47,95,0.04) !important; }
        .ivf-step-active { background: #1e2f5f !important; box-shadow: 0 6px 24px rgba(30,47,95,0.2); }
        .ivf-step-active .ivf-step-num   { color: rgba(255,255,255,0.35) !important; }
        .ivf-step-active .ivf-step-short  { color: rgba(255,255,255,0.6) !important; }
        .ivf-step-active .ivf-step-title  { color: #ffffff !important; }
        .ivf-step-active .ivf-step-icon   { background: rgba(255,255,255,0.15) !important; }
        .ivf-step-inactive .ivf-step-num   { color: rgba(30,47,95,0.18); }
        .ivf-step-inactive .ivf-step-short { color: rgba(30,47,95,0.45); }
        .ivf-step-inactive .ivf-step-title { color: #1e2f5f; }
        .ivf-step-inactive .ivf-step-icon  { background: rgba(236,72,153,0.09); }

        /* icon image — invert to white when active */
        .ivf-icon-img { transition: filter 0.25s ease; width: 26px; height: 26px; object-fit: contain; }
        .ivf-step-active   .ivf-icon-img { filter: brightness(0) invert(1); }
        .ivf-step-inactive .ivf-icon-img { filter: none; }

        .ivf-connector { width: 2px; background: rgba(30,47,95,0.08); }
        .ivf-connector-active { background: linear-gradient(180deg, #1e2f5f, rgba(30,47,95,0.15)); }

        .ivf-panel { animation: ivfFade 0.38s ease forwards; }
        @keyframes ivfFade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .ivf-track { background: rgba(30,47,95,0.08); border-radius: 99px; overflow: hidden; }
        .ivf-fill  { transition: width 0.4s cubic-bezier(0.4,0,0.2,1); background: linear-gradient(90deg,#ec4899,#1e2f5f); border-radius: 99px; }

        .ivf-nav { transition: all 0.2s ease; cursor: pointer; border: none; }
        .ivf-nav:hover:not(:disabled) { background: #1e2f5f !important; color: #fff !important; }
        .ivf-nav:disabled { opacity: 0.3; cursor: not-allowed; }

        .ivf-dot-grid { background-image: radial-gradient(rgba(30,47,95,0.07) 1px, transparent 1px); background-size: 18px 18px; }
      `}</style>

      {/* Decorative */}
      <div className="ivf-dot-grid absolute top-0 right-0 w-64 h-64 opacity-60 pointer-events-none" />
      <div className="ivf-dot-grid absolute bottom-0 left-0 w-48 h-48 opacity-40 pointer-events-none" />
      <div className="absolute pointer-events-none"
        style={{ top:"-80px", left:"-80px", width:"300px", height:"300px", borderRadius:"50%", border:"1px solid rgba(236,72,153,0.12)" }} />

      <div id="roadmap" className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-4 md:py-8">

        {/* ── HEADER ── */}
        <div className="mb-4 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-2 sm:mb-5"
            style={{ border:"1px solid rgba(236,72,153,0.35)", background:"rgba(236,72,153,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" />
            <span className="text-xs tracking-widest uppercase text-[#ec4899] font-medium">Your IVF Journey</span>
          </div>
          <h2 className="ivf-serif text-[#1e2f5f] leading-tight mb-1 sm:mb-3"
            style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:400, maxWidth:"640px", marginLeft:"auto", marginRight:"auto" }}>
            Your IVF Roadmap —{" "}
            <span className="ivf-serif" style={{ fontStyle:"italic", color:"#ec4899" }}>
              No Surprises, No Undefined Steps.
            </span>
          </h2>
          <p style={{ fontSize:"14px", color:"rgba(30,47,95,0.55)", fontWeight:300, maxWidth:"520px", lineHeight:1.75, marginLeft:"auto", marginRight:"auto" }}>
            Here&apos;s exactly what every stage looks like at Smile Baby. Transparent, personalised, and always evolving around you.
          </p>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — Step list */}
          <div className="w-full">
            {steps.map((s, i) => {
              const isActive = active === i;
              const isLast = i === steps.length - 1;
              return (
                <div key={s.number}>
                  <button
                    onClick={() => setActive(i)}
                    className={`ivf-step w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left ${
                      isActive ? "ivf-step-active" : "ivf-step-inactive"
                    }`}
                  >
                    {/* ✅ FIXED: use <img> not SVG path */}
                    <span className="ivf-step-icon flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center">
                      <img
                        src={s.iconPath}
                        alt={s.title}
                        className="ivf-icon-img"
                      />
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="ivf-step-num text-xs font-semibold tracking-widest">{s.number}</span>
                        <span className="ivf-step-title text-sm font-semibold leading-snug truncate">{s.title}</span>
                      </div>
                      <p className="ivf-step-short text-xs mt-0.5 truncate">{s.short}</p>
                    </div>

                    {/* Arrow on active */}
                    {isActive && (
                      <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>

                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className={`ivf-connector h-4 ${i < active ? "ivf-connector-active" : ""}`}
                      style={{ width:"2px", margin:"0 28px" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — Detail panel */}
          <div className="w-full">
            <div
              key={active}
              className="ivf-panel rounded-3xl overflow-hidden"
              style={{ border:"1px solid rgba(30,47,95,0.1)", background:"#ffffff" }}
            >
              {/* Top accent bar */}
              <div style={{ height:"4px", background:"linear-gradient(90deg,#ec4899,#1e2f5f)" }} />

              <div className="p-8 md:p-10 flex flex-col gap-8">

                {/* Step title */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="ivf-serif"
                      style={{ fontSize:"4.5rem", fontWeight:400, lineHeight:1, color:"rgba(30,47,95,0.06)", userSelect:"none" }}>
                      {current.number}
                    </span>
                    <div style={{ marginLeft:"-8px" }}>
                      <p style={{ fontSize:"10px", letterSpacing:"0.25em", textTransform:"uppercase", color:"#ec4899", fontWeight:500, marginBottom:"4px" }}>
                        Step {current.number} of {steps.length}
                      </p>
                      <h3 className="ivf-serif text-[#1e2f5f]"
                        style={{ fontSize:"clamp(1.5rem,3vw,2.1rem)", fontWeight:400, lineHeight:1.2 }}>
                        {current.title}
                      </h3>
                      <p style={{ fontSize:"12px", color:"#ec4899", fontWeight:400, marginTop:"2px" }}>{current.short}</p>
                    </div>
                  </div>

                  <div style={{ height:"1px", background:"rgba(30,47,95,0.08)", marginBottom:"24px" }} />

                  <p style={{ fontSize:"15px", color:"rgba(30,47,95,0.65)", lineHeight:1.85, fontWeight:300 }}>
                    {current.description}
                  </p>
                </div>

                {/* Progress tracker */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(30,47,95,0.4)", fontWeight:400 }}>
                      Journey Progress
                    </span>
                    <span style={{ fontSize:"11px", color:"#ec4899", fontWeight:600 }}>
                      {Math.round(((active + 1) / steps.length) * 100)}%
                    </span>
                  </div>
                  <div className="ivf-track h-1.5">
                    <div className="ivf-fill h-full" style={{ width:`${((active + 1) / steps.length) * 100}%` }} />
                  </div>
                  <div className="flex justify-between mt-2.5">
                    {steps.map((_, i) => (
                      <button key={i} onClick={() => setActive(i)}
                        style={{
                          width: i === active ? "20px" : "7px",
                          height: "7px",
                          borderRadius: "99px",
                          background: i <= active ? "#1e2f5f" : "rgba(30,47,95,0.15)",
                          border: "none", cursor: "pointer",
                          transition: "all 0.3s ease", padding: 0,
                        }} />
                    ))}
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    className="ivf-nav flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#1e2f5f]"
                    style={{ border:"1.5px solid rgba(30,47,95,0.25)", background:"transparent" }}
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <button
                    className="ivf-nav flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
                    style={{ background:"#1e2f5f", border:"1.5px solid #1e2f5f" }}
                    onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                    disabled={active === steps.length - 1}
                  >
                    Next Step
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {active === steps.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setIsBookingModalOpen(true)}
                      className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white"
                      style={{ background:"linear-gradient(135deg,#ec4899,#be185d)", textDecoration:"none" }}>
                      Book Your Planning Visit →
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
