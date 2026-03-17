'use client'

import { X } from "lucide-react";
import { useState } from "react";
import SmileBabyFormed from "./ivf-contact-form";

interface imgse{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// Modal wrapper component
const BookingModal = ({ isOpen, onClose, children } : imgse) => {
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
        <div className="max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
const bullets = [
  {
    num: "1",
    text: "Review your history and how long you’ve been trying",
  },
  {
    num: "2",
    text: "Explain whether lifestyle changes/medicines/IUI are enough or IVF should be considered",
  },
  {
    num: "3",
    text: "We Guide you on the essential lab checks for both husband and wife in the first consultation.",
  },
  {
    num: "4",
    text: "Share a clear next-step plan and timeline so you don't lose valuable time",
  },
];

/* ─────────────────────────────────────
   Spinning Navy Badge
───────────────────────────────────── */
function SpinningBadge() {
  return (
    <div style={{ position: "relative", flexShrink: 0, width: 90, height: 90 }}>
      <svg
        viewBox="0 0 96 96"
        fill="none"
        style={{ width: 90, height: 90, animation: "spinBadge 10s linear infinite" }}
      >
        <circle cx="48" cy="48" r="44" fill="#1e2a6e" />
        <path
          id="consultPath"
          d="M48 48 m-34 0 a34 34 0 1 1 68 0 a34 34 0 1 1 -68 0"
          fill="none"
        />
        <text fontSize="8.5" fontWeight="600" fill="white" letterSpacing="2.8">
          <textPath href="#consultPath" startOffset="0%">
            Book a Consultation • Book a Consultation •
          </textPath>
        </text>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 36,
          height: 36,
          background: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 12px rgba(30,42,110,0.18)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12 8H4M4 8L8 4M4 8l4 4"
            stroke="#1e2a6e"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   Main Component
───────────────────────────────────── */
export default function FertilitySection() {
          const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  return (
    <>
      <style>{`
        @keyframes spinBadge {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatA {
          0%, 100% { transform: rotate(-8deg) translateY(0px); }
          50%       { transform: rotate(-8deg) translateY(-10px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        .fu  { animation: fadeUp 0.65s ease both; }
        .d1  { animation-delay: 0.08s; }
        .d2  { animation-delay: 0.18s; }
        .d3  { animation-delay: 0.28s; }
        .d4  { animation-delay: 0.38s; }
        .d5  { animation-delay: 0.48s; }
        .d6  { animation-delay: 0.58s; }
        .d7  { animation-delay: 0.70s; }

        .img-a { animation: floatA 6s ease-in-out infinite; }
        .img-b { animation: floatB 6s ease-in-out 3s infinite; }

        .cta-pill { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .cta-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 50px rgba(244,114,182,0.58) !important;
        }

        /* ── Responsive grid ── */
        .fertility-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        /* Tablet: 768px – 1023px */
        @media (max-width: 1023px) {
          .fertility-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .image-cluster {
            height: 460px !important;
            order: -1;
          }
          .img1 {
            width: 240px !important;
            height: 320px !important;
          }
          .img2 {
            width: 280px !important;
            height: 260px !important;
            right: 0 !important;
          }
          .badge-pos {
            top: 240px !important;
            left: 168px !important;
          }
          .connector-svg {
            top: 170px !important;
            left: 160px !important;
          }
          .navy-dot {
            bottom: 240px !important;
            right: 255px !important;
          }
        }

        /* Mobile: < 640px */
        @media (max-width: 639px) {
          .fertility-section {
            padding: 48px 16px !important;
          }
          .fertility-grid {
            gap: 40px;
          }
          .image-cluster {
            height: 360px !important;
          }
          .img1 {
            width: 190px !important;
            height: 260px !important;
            top: 10px !important;
          }
          .img2 {
            width: 210px !important;
            height: 200px !important;
          }
          .badge-pos {
            top: 190px !important;
            left: 130px !important;
          }
          .badge-pos svg {
            width: 74px !important;
            height: 74px !important;
          }
          .connector-svg {
            display: none !important;
          }
          .pink-dot-top { display: none !important; }
          .navy-dot     { display: none !important; }
          .glow-blob    { display: none !important; }
        }
      `}</style>

      <section
        className="fertility-section max-sm:pb-6"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: 1160, width: "100%" }} className="fertility-grid">

          {/* ══════════════════════════
              LEFT  ── TEXT CONTENT
          ══════════════════════════ */}
          <div style={{ position: "relative" }}>

            {/* Soft glow blob */}
            <div
              className="glow-blob"
              style={{
                position: "absolute",
                top: -60,
                left: -70,
                width: 280,
                height: 280,
                background: "radial-gradient(circle, rgba(244,114,182,0.07) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>

              {/* • ABOUT US */}
              <div className="fu d1" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, background: "#f472b6", borderRadius: "50%" }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#f472b6", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                  About Us
                </span>
              </div>

              {/* Headline */}
              <h2
                className="fu d2 font-extrabold leading-tight mb-3 md:text-4xl text-2xl"
                style={{ color: "#1e2a6e" }}
              >
                Clarity First. Treatment
                <br />
                <span style={{ color: "#ec4899" }}>Next.</span>
              </h2>

              {/* Subheading */}
              <p className="fu d3" style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.78, marginBottom: 24, maxWidth: 420 }}>
                Your first visit is focused on understanding your situation and
                mapping the right next step — no confusion, no wasted time.
              </p>

              {/* Body intro */}
              <p className="fu d3" style={{ fontSize: 14, fontWeight: 600, color: "#1e2a6e", marginBottom: 16 }}>
                During your assessment, our doctor will:
              </p>

              {/* 4 Bullets */}
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13, marginBottom: 36 }}>
                {bullets.map((b, i) => (
                  <li key={b.num} className={`fu d${i + 3}`} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        minWidth: 28, height: 28,
                        background: "#f472b6",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: 700, color: "white",
                        flexShrink: 0, marginTop: 2,
                        boxShadow: "0 4px 14px rgba(244,114,182,0.38)",
                      }}
                    >
                      {b.num}
                    </div>
                    <span style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.68 }}>
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="fu d7">
                <button  onClick={() => setIsBookingModalOpen(true)} 
                  className="cta-pill rounded-xl"
                  style={{
                    background: "#f472b6",
                    color: "white",
                    border: "none",
                    
                    padding: "14px 28px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    letterSpacing: "0.3px",
                  }}
                >
                  Book Your Evaluation Visit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: "rotate(-45deg)" }}>
                    <path d="M1 13L13 1M13 1H4M13 1v9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* ══════════════════════════
              RIGHT  ── TWO IMAGES
          ══════════════════════════ */}
          <div className="image-cluster" style={{ position: "relative", height: 590 }}>

            <div
              style={{
                position: "absolute",
                top: "40%", left: "40%",
                transform: "translate(-50%,-50%)",
                width: 380, height: 380,
                background: "radial-gradient(circle, rgba(244,114,182,0.09) 0%, transparent 65%)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* ── IMAGE 1 — tall portrait, rotated -8deg ── */}
            <div
              className="img-a img1"
              style={{
                position: "absolute",
                top: 20, left: 0,
                width: 300, height: 390,
                borderRadius: "60px 20px 60px 20px",
                overflow: "hidden",
                border: "5px solid white",
                boxShadow: "0 28px 72px rgba(30,42,110,0.15), 0 8px 24px rgba(244,114,182,0.1)",
                zIndex: 2,
                transform: "rotate(-8deg)",
              }}
            >
              {/*
                ✅ SWAP: <img src="/your-doctor.jpg" alt="Doctor"
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              */}
              <img
                src="https://ik.imagekit.io/tnvhh8yfa/public/ivf-smile/free-photo.jpg?updatedAt=1773300923093"
                alt="Doctor"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              
              />
            </div>

            {/* ── SPINNING BADGE overlapping Image 1 ── */}
            <div
              className="badge-pos max-sm:hidden"
              style={{
                position: "absolute",
                top: 300, left: 210,
                zIndex: 5,
                filter: "drop-shadow(0 6px 18px rgba(30,42,110,0.22))",
              }}
            >
              <SpinningBadge />
            </div>

            {/* Pink accent dot */}
            <div
              className="pink-dot-top"
              style={{
                position: "absolute",
                top: 28, left: 272,
                width: 16, height: 16,
                background: "#f472b6",
                borderRadius: "50%",
                zIndex: 4,
                boxShadow: "0 0 0 5px rgba(244,114,182,0.2)",
              }}
            />

            {/* Dashed curved connector */}
            <svg
              className="connector-svg"
              style={{
                position: "absolute",
                top: 210, left: 200,
                zIndex: 1,
                pointerEvents: "none",
                opacity: 0.28,
              }}
              width="130" height="160" viewBox="0 0 130 160"
            >
              <path
                d="M10 10 C 50 10, 80 150, 120 150"
                stroke="#f472b6" strokeWidth="1.8" strokeDasharray="5 5" fill="none"
              />
            </svg>

            {/* ── IMAGE 2 — landscape, bottom-right ── */}
            <div
              className="img-b img2"
              style={{
                position: "absolute",
                bottom: 0, right: 0,
                width: 360, height: 330,
                borderRadius: "20px 60px 20px 60px",
                overflow: "hidden",
                border: "5px solid white",
                boxShadow: "0 28px 72px rgba(30,42,110,0.16), 0 8px 24px rgba(244,114,182,0.12)",
                zIndex: 2,
              }}
            >
              {/*
                ✅ SWAP: <img src="/your-clinic.jpg" alt="Clinic"
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              */}
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                alt="Clinic"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                
              />
            </div>

            {/* Navy accent dot */}
            <div
              className="navy-dot"
              style={{
                position: "absolute",
                bottom: 310, right: 330,
                width: 13, height: 13,
                background: "#1e2a6e",
                borderRadius: "50%",
                zIndex: 4,
                boxShadow: "0 0 0 4px rgba(30,42,110,0.15)",
              }}
            />

          </div>
          {/* END RIGHT */}

        </div>
              
                                    <BookingModal 
                                      isOpen={isBookingModalOpen} 
                                      onClose={() => setIsBookingModalOpen(false)}
                                    >
                                      <SmileBabyFormed />
                                    </BookingModal>
      </section>
    </>
  );
}