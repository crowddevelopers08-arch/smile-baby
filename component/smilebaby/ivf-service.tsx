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

const points = [
  {
    text: "Unsure if you actually need IVF",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "Researching options and comparing clinics in Bangalore",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        width="22"
        height="22"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    text: "Trying naturally for months/years and unsure when to consult a specialist",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        width="22"
        height="22"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    text: "Wondering whether IUI is enough or IVF is needed",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        width="22"
        height="22"
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
];

export default function WhoIsThisFor() {
  const [hovered, setHovered] = useState<number | null>(null);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 w-full relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 py-8 sm:py-10 md:py-12 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 lg:gap-20 items-center">
          {/* ── LEFT: Headline + CTA ── */}
          <div className="flex flex-col">
            {/* Section label */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 sm:mb-6 self-start"
              style={{
                background: "#eef1fb",
                color: "#2d3e7f",
                border: "1px solid rgba(45,62,127,0.15)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="13"
                height="13"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Who This Is For
            </span>

            {/* Heading */}
            <h2
              className="font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl"
              style={{ color: "#111827" }}
            >
              This Is For Couples
              <br />
              Who Want{" "}
              <span
                className="relative inline-block"
                style={{ color: "#2d3e7f" }}
              >
                Clarity
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 120 8"
                  preserveAspectRatio="none"
                  height="6"
                >
                  <path
                    d="M0 6 Q30 1 60 5 Q90 9 120 3"
                    stroke="#f9a8d4"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />— Not <span style={{ color: "#ec4899" }}>Confusion</span>
            </h2>

            {/* Body intro */}
            <p
              className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
              style={{ color: "#6b7280", maxWidth: 420 }}
            >
              You're in the right place if any of these sound familiar. Take the
              first step toward answers — not more waiting.
            </p>

            {/* CTA — visible on sm+ (hidden on mobile, shown on tablet+) */}
            {/* <div className="hidden sm:flex flex-row items-center gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium shadow-lg text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Check If IVF Is Needed
              </button>
            </div> */}
                       <div className="flex justify-center lg:justify-start hidden sm:flex flex-row items-center gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex items-center gap-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 px-5 py-2.5 sm:px-6 sm:py-3"
                style={{
                  background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                Check If IVF Is Needed
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

          {/* ── RIGHT: Check-list cards ── */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {points.map(({ text, icon }, i) => {
              const active = hovered === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl cursor-default transition-all duration-300 overflow-hidden"
                  style={{
                    padding: "16px 18px",
                    background: active
                      ? "linear-gradient(135deg,#2d3e7f,#354a8f)"
                      : "#fafafa",
                    border: `1.5px solid ${active ? "transparent" : "#f0f0f0"}`,
                    boxShadow: active
                      ? "0 16px 40px rgba(45,62,127,0.22)"
                      : "0 2px 10px rgba(0,0,0,0.04)",
                    transform: active ? "translateX(6px)" : "translateX(0)",
                  }}
                >
                  {/* Number badge */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-xl font-bold text-xs transition-all duration-300"
                    style={{
                      width: 32,
                      height: 32,
                      background: active ? "rgba(255,255,255,0.15)" : "#eef1fb",
                      color: active ? "#f9a8d4" : "#2d3e7f",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300"
                    style={{
                      width: 38,
                      height: 38,
                      background: active ? "rgba(249,168,212,0.15)" : "#fff0f7",
                      color: active ? "#f9a8d4" : "#ec4899",
                      border: `1px solid ${active ? "rgba(249,168,212,0.3)" : "rgba(236,72,153,0.1)"}`,
                    }}
                  >
                    {icon}
                  </div>

                  {/* Text */}
                  <p
                    className="text-xs sm:text-sm font-medium leading-snug transition-colors duration-300 flex-1 pr-6 sm:pr-8"
                    style={{ color: active ? "#fff" : "#374151" }}
                  >
                    {text}
                  </p>

                  {/* Checkmark on active */}
                  <div
                    className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 transition-all duration-300"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active
                        ? "translateY(-50%) scale(1)"
                        : "translateY(-50%) scale(0.7)",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 26,
                        height: 26,
                        background: "rgba(249,168,212,0.2)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f9a8d4"
                        strokeWidth="2.5"
                        width="13"
                        height="13"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>

                  {/* Left accent line */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300"
                    style={{ background: active ? "#f9a8d4" : "transparent" }}
                  />
                </div>
              );
            })}

            {/* CTA — mobile only, shown below the cards */}
            {/* <div className="flex sm:hidden mt-2">
              <button
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg text-sm hover:shadow-xl transition-all duration-300"
              >
                Check If IVF Is Needed
              </button>
            </div> */}
            <div className="flex justify-center lg:justify-start sm:hidden mt-2">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex items-center gap-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 px-5 py-2.5 sm:px-6 sm:py-3"
                style={{
                  background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                Check If IVF Is Needed
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
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <SmileBabyFormed />
      </BookingModal>
    </section>
  );
}
