"use client";

import { useState } from "react";
import SmileBabyFormed from "./ivf-contact-form";
import { X } from "lucide-react";

interface imgse {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// Modal wrapper component
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
export default function AboutSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const highlights = [
    { stat: "10,000+", label: "Babies Born" },
    { stat: "12 Years", label: "Advanced Fertility Care" },
    { stat: "80%", label: "Word-of-Mouth Referrals" },
    { stat: "No Hidden", label: "Transparent Pricing" },
    { stat: "Same Doctor", label: "Guidance + Support Team" },
    { stat: "Est. 2012", label: "Serving Bangalore Families" },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-0 md:gap-10 lg:gap-16 xl:gap-20">
        {/* ══════════════════════════════════════
            HEADLINE — Mobile order 1
        ══════════════════════════════════════ */}
        <div className="w-full lg:hidden block order-1">
          <h2
            className="font-extrabold leading-[1.15] mb-2 md:mb-3 text-2xl sm:text-3xl md:text-4xl text-center"
            style={{
              color: "#1e2a6e",
            }}
          >
            Trusted By Families
            <br />
            <span style={{ color: "#ec4899" }}>Across Bangalore</span>
          </h2>
        </div>

        {/* ══════════════════════════════════════
            PARAGRAPH — Mobile order 2 (moved outside right container)
        ══════════════════════════════════════ */}
        <div className="w-full lg:hidden block order-2">
          <p
            className="text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 text-center"
            style={{ color: "#6b7280" }}
          >
            A fertility centre built on trust, transparency, and the joy of new
            beginnings.
          </p>
        </div>

        {/* ══════════════════════════════════════
            LEFT — Stacked image collage — Mobile order 3
        ══════════════════════════════════════ */}
        <div className="relative flex-shrink-0 w-full max-w-[380px] xs:max-w-[420px] sm:max-w-[460px] md:max-w-[480px] lg:w-[460px] xl:w-[500px] mx-auto lg:mx-0 h-[400px] xs:h-[340px] sm:h-[380px] md:h-[440px] lg:h-[520px] xl:h-[560px] order-3 lg:order-1">
          {/* Main large image */}
          <div
            className="absolute rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{
              width: "82%",
              top: "10px",
              right: 0,
              bottom: "55px",
              zIndex: 1,
            }}
          >
            <img
              src="/ivf-smile/happy-doctor.avif"
              alt="Happy family with newborn"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pink animated badge — overlapping left */}
          <div
            className="absolute flex flex-col items-start justify-end rounded-xl sm:rounded-2xl p-2 sm:p-3 z-10"
            style={{
              width: "100px",
              height: "100px",
              top: "15%",
              left: 0,
              background: "linear-gradient(135deg, #f9a8d4 0%, #ec4899 100%)",
              animation: "slideRightToLeft 2.5s ease-in-out infinite",
            }}
          >
            <style>{`
              @keyframes slideRightToLeft {
                0%   { transform: translateX(60px); opacity: 0; }
                30%  { transform: translateX(0);    opacity: 1; }
                70%  { transform: translateX(0);    opacity: 1; }
                100% { transform: translateX(-60px); opacity: 0; }
              }
              
              @media (min-width: 640px) {
                .badge-responsive {
                  width: 110px !important;
                  height: 110px !important;
                }
              }
              
              @media (min-width: 768px) {
                .badge-responsive {
                  width: 120px !important;
                  height: 120px !important;
                  top: 18% !important;
                }
              }

              @media (max-width: 640px) {
                @keyframes slideRightToLeft {
                  0%   { transform: translateX(40px); opacity: 0; }
                  30%  { transform: translateX(0);    opacity: 1; }
                  70%  { transform: translateX(0);    opacity: 1; }
                  100% { transform: translateX(-40px); opacity: 0; }
                }
              }
            `}</style>
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              width="24"
              height="24"
              className="sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-1.5"
            >
              <circle
                cx="24"
                cy="24"
                r="14"
                strokeDasharray="4 3"
                opacity="0.7"
              />
              <circle cx="24" cy="24" r="8" />
              <path
                d="M24 14v-4M24 38v-4M14 24h-4M38 24h-4"
                strokeLinecap="round"
              />
              <path
                d="M17 17l-3-3M34 34l-3-3M17 31l-3 3M34 14l-3 3"
                strokeLinecap="round"
              />
              <polygon
                points="24,18 25.8,22.6 30.8,22.6 26.9,25.4 28.5,30 24,27.2 19.5,30 21.1,25.4 17.2,22.6 22.2,22.6"
                fill="white"
                stroke="none"
              />
            </svg>
            <p className="text-white font-bold text-[10px] xs:text-xs leading-snug">
              35+ years of
              <br />
              experience
            </p>
          </div>

          {/* Small second image — bottom-right overlap */}
          <div
            className="absolute rounded-xl sm:rounded-2xl overflow-hidden z-20"
            style={{
              width: "35%",
              aspectRatio: "9 / 10",
              bottom: "5px",
              right: "0",
              border: "8px solid white",
            }}
          >
            <img
              src="/ivf-smile/indian-baby.avif"
              alt="Newborn baby"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT — Highlights + CTA — Mobile order 4
        ══════════════════════════════════════ */}
        <div className="flex-1 flex flex-col w-full order-4 lg:order-2">
          {/* Headline - Hidden on mobile (shown above), visible on lg+ */}
          <h2
            className="font-extrabold leading-[1.15] mb-2 md:mb-3 text-2xl sm:text-3xl md:text-4xl text-center lg:text-left hidden lg:block"
            style={{
              color: "#1e2a6e",
            }}
          >
            Trusted By Families
            <br />
            <span style={{ color: "#ec4899" }}>Across Bangalore</span>
          </h2>

          {/* Paragraph - Hidden on mobile (shown above), visible on lg+ */}
          <p
            className="text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 text-center lg:text-left hidden lg:block"
            style={{ color: "#6b7280" }}
          >
            A fertility centre built on trust, transparency, and the joy of new
            beginnings.
          </p>

          {/* Highlights grid + spinning badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 md:mb-8">
            {/* 6-item 2-column grid */}
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-2 sm:gap-y-3 md:gap-y-4 flex-1 w-full">
              {highlights.map(({ stat, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0"
                >
                  {/* Pink checkmark */}
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{ width: 18, height: 18, background: "#ec4899" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.8"
                      width="10"
                      height="10"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  {/* Text */}
                  <div className="flex flex-col min-w-0">
                    <span
                      className="font-extrabold text-[11px] xs:text-xs sm:text-sm leading-tight truncate"
                      style={{ color: "#1e2a6e" }}
                    >
                      {stat}
                    </span>
                    <span
                      className="text-[9px] xs:text-[10px] sm:text-xs leading-tight truncate"
                      style={{ color: "#707e96" }}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Spinning circular badge - hidden on small mobile, visible on sm and up */}
            <div
              className="relative flex-shrink-0 hidden sm:block"
              style={{ width: 85, height: 85 }}
            >
              <svg
                viewBox="0 0 110 110"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ animation: "aboutSpin 10s linear infinite" }}
              >
                <defs>
                  <path
                    id="about-circle-path"
                    d="M55,55 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                  />
                </defs>
                <circle cx="55" cy="55" r="50" fill="#1e2a6e" />
                <text
                  fontSize="8"
                  fontWeight="600"
                  fill="white"
                  letterSpacing="2.8"
                >
                  <textPath href="#about-circle-path">
                    Book a Consultation • Book a Consultation •{" "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 30, height: 30, background: "white" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e2a6e"
                    strokeWidth="2.5"
                    width="14"
                    height="14"
                  >
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center gap-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 px-5 py-2.5 sm:px-6 sm:py-3"
              style={{
                background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Get a Call-Back Today
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                width="14"
                height="14"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Responsive styles for badge */
        @media (min-width: 640px) {
          .about-badge {
            width: 110px !important;
            height: 110px !important;
          }
          .second-image {
            width: 38% !important;
            bottom: 0 !important;
            left: 320px !important;
            right: auto !important;
            border-width: 10px !important;
          }
          .spinning-badge {
            width: 90px !important;
            height: 90px !important;
          }
          .spinning-badge svg text {
            font-size: 9px !important;
          }
          .spinning-badge .inner-circle {
            width: 32px !important;
            height: 32px !important;
          }
          .spinning-badge .inner-circle svg {
            width: 15px !important;
            height: 15px !important;
          }
        }

        @media (min-width: 768px) {
          .about-badge {
            width: 120px !important;
            height: 120px !important;
            top: 18% !important;
          }
          .main-image {
            bottom: 55px !important;
          }
          .second-image {
            width: 40% !important;
            border-width: 12px !important;
          }
          .spinning-badge {
            width: 95px !important;
            height: 95px !important;
          }
          .spinning-badge svg text {
            font-size: 10px !important;
          }
          .spinning-badge .inner-circle {
            width: 34px !important;
            height: 34px !important;
          }
          .spinning-badge .inner-circle svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        @media (min-width: 1024px) {
          .second-image {
            left: 320px !important;
          }
        }

        /* Mobile order adjustments */
        @media (max-width: 1023px) {
          .order-1 { order: 1; } /* Heading */
          .order-2 { order: 2; } /* Paragraph */
          .order-3 { order: 3; } /* Image */
          .order-4 { order: 4; } /* Highlights + CTA */
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
