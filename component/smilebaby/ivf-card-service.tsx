'use client'

import { useState } from "react";

// Define the service type
interface Service {
  id: number;
  featured?: boolean;
  title: string;
  desc: string;
  image: string;
  icon?: JSX.Element;
  hoverColor?: string;
}

const services: Service[] = [
  {
    id: 0,
    featured: true,
    title: "Doctor-led and ethical treatment approach",
    desc: "Book Your Fertility Evaluation",
    image: "/ivf-smile/service-1.jpg",
  },
  {
    id: 1,
    title: "Personalised protocols (not one-size-fits-all)",
    desc: "Doctor-led and ethical treatment approach for every patient.",
    icon: <GearIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 2,
    title: "Continuity of care (same doctor throughout)",
    desc: "Personalised protocols — not one-size-fits-all treatment.",
    icon: <CirclesIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 3,
    title: "Transparent pricing & clear communication",
    desc: "Same doctor throughout — consistent care from start to finish.",
    icon: <LayersIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 4,
    title: "Counselling + nutrition + fertility support",
    desc: "Transparent pricing & clear communication — no hidden costs.",
    icon: <BoxIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 6,
    title: "Interest-Free EMI",
    desc: "Interest-free EMI available — affordable care for every couple.",
    icon: <LifeRingIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 7,
    title: "Insurance support available",
    desc: "Insurance support available to ease your financial journey.",
    icon: <DatabaseIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
  {
    id: 8,
    title: "Ethical donor programs available (if required)",
    desc: "Ethical donor programs available if required for your journey.",
    icon: <GearIcon />,
    image: "/ivf-smile/service-1.jpg",
    hoverColor: "rgba(30,42,110,0.82)",
  },
];

// Define props types for card components
interface FeaturedCardProps {
  svc: Service;
  hov: boolean;
  onEnter: () => void;
}

interface NormalCardProps {
  svc: Service;
  hovered: boolean;
  onEnter: () => void;
}

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <section className="w-full bg-white px-6 sm:px-10 md:px-16 pb-4">
      <div className="max-w-6xl mx-auto">

        {/* ── TITLE above the grid ── */}
        <h2
          className="font-extrabold leading-tight mb-10"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#1e2a6e", maxWidth: 700 }}
        >
          Why Couples Choose{" "}
          <span style={{ color: "#ec4899" }}>Smile Baby IVF</span>{" "}
          for Evaluation &amp; Guidance
        </h2>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => {
            if (svc.featured) {
              return (
                <FeaturedCard
                  key={svc.id}
                  svc={svc}
                  hov={activeId === svc.id}
                  onEnter={() => setActiveId(svc.id)}
                />
              );
            }
            return (
              <NormalCard
                key={svc.id}
                svc={svc}
                hovered={activeId === svc.id}
                onEnter={() => setActiveId(svc.id)}
              />
            );
          })}
        </div>

        {/* ── CTA Button — below entire grid ── */}
        <div className="flex justify-center mt-10">
          <button
            className="group flex items-center gap-2 font-bold text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              padding: "15px 40px",
              borderRadius: 50,
              background: "linear-gradient(135deg,#f9a8d4,#ec4899)",
              color: "#fff",
              boxShadow: "0 12px 32px rgba(236,72,153,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            Book Your Fertility Evaluation
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

/* ── FEATURED CARD (Card 1 — IVF) ── */
function FeaturedCard({ svc, hov, onEnter }: FeaturedCardProps) {
  return (
    <div
      className="relative overflow-hidden flex flex-col cursor-pointer"
      style={{
        borderRadius: 20,
        minHeight: 280,
        padding: "28px 24px 24px 24px",
        background: "white",
        border: `1.5px solid ${hov ? "#1e2a6e" : "#e5e7eb"}`,
        transition: "all 0.4s cubic-bezier(0.34,1.1,0.64,1)",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? "0 20px 48px rgba(30,42,110,0.18), 0 4px 12px rgba(30,42,110,0.1)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={onEnter}
    >
      {/* Background image — fades in on hover */}
      <img
        src={svc.image}
        alt={svc.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
          opacity: hov ? 1 : 0,
          transition: "opacity 0.5s ease",
          borderRadius: 20,
        }}
      />

      {/* Diagonal sweep — bottom-left to top-right */}
      <div
        className="absolute"
        style={{
          zIndex: 1,
          bottom: "-10%",
          left: "-10%",
          width: hov ? "160%" : "0%",
          height: hov ? "160%" : "0%",
          background: "rgba(30,42,110,0.82)",
          borderRadius: "0 100% 0 0",
          transition: "width 0.55s cubic-bezier(0.65,0,0.35,1), height 0.55s cubic-bezier(0.65,0,0.35,1)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col justify-between h-full" style={{ zIndex: 2 }}>
        {/* 4 circles (2x2) — top left */}
        <div className="grid grid-cols-2 gap-1.5 w-fit mb-auto">
          {[0,1,2,3].map(i => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 18,
                height: 18,
                border: `2.2px solid ${hov ? "white" : "#1e2a6e"}`,
                opacity: 0.9,
                transition: "border-color 0.3s",
              }}
            />
          ))}
        </div>

        {/* Text at bottom */}
        <div className="mt-10">
          <h3
            className="font-extrabold leading-snug"
            style={{
              fontSize: 18,
              color: hov ? "white" : "#1e2a6e",
              transition: "color 0.3s",
            }}
          >
            {svc.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ── NORMAL CARD ── */
function NormalCard({ svc, hovered, onEnter }: NormalCardProps) {
  return (
    <div
      className="relative flex flex-col cursor-pointer overflow-hidden"
      style={{
        borderRadius: 20,
        border: `1.5px solid ${hovered ? "#ec4899" : "#e5e7eb"}`,
        padding: "28px 24px 24px 24px",
        minHeight: 280,
        background: "white",
        transition: "all 0.4s cubic-bezier(0.34,1.1,0.64,1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(236,72,153,0.18), 0 4px 12px rgba(236,72,153,0.1)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={onEnter}
    >
      {/* ── FULL CARD: image always present, colour sweeps bottom-left → top-right ── */}
      {/* Background image — always loaded, fades in with overlay */}
      <img
        src={svc.image}
        alt={svc.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          zIndex: 0,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
          borderRadius: 20,
        }}
      />

      {/* Diagonal sweep overlay — grows from bottom-left to top-right */}
      <div
        className="absolute"
        style={{
          zIndex: 1,
          bottom: hovered ? "-10%" : "-10%",
          left: hovered ? "-10%" : "-10%",
          width: hovered ? "160%" : "0%",
          height: hovered ? "160%" : "0%",
          background: svc.hoverColor || "rgba(30,42,110,0.82)",
          borderRadius: "0 100% 0 0",
          transformOrigin: "bottom left",
          transition: "width 0.55s cubic-bezier(0.65,0,0.35,1), height 0.55s cubic-bezier(0.65,0,0.35,1)",
        }}
      />

      {/* Pink icon — top left (above the reveal) */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
          zIndex: 2,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          color: hovered ? "white" : "#ec4899",
        }}
      >
        {svc.icon}
      </div>

      {/* Bottom: title + desc */}
      <div className="mt-auto relative" style={{ zIndex: 2 }}>
        <h3
          className="font-extrabold leading-snug mb-2"
          style={{
            fontSize: 17,
            color: hovered ? "white" : "#1e2a6e",
            transition: "color 0.25s",
          }}
        >
          {svc.title}
        </h3>
        <p className="leading-relaxed" style={{ fontSize: 13.5, color: hovered ? "rgba(255,255,255,0.8)" : "#6b7280", transition: "color 0.25s" }}>
          {svc.desc}
        </p>
      </div>
    </div>
  );
}

/* ══ SVG ICONS — all use currentColor to inherit white on hover ══ */

function GearIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v4M24 40v4M4 24h4M40 24h4" strokeLinecap="round" />
      <path d="M9.4 9.4l2.8 2.8M35.8 35.8l2.8 2.8M9.4 38.6l2.8-2.8M35.8 12.2l2.8-2.8" strokeLinecap="round" />
      <circle cx="24" cy="24" r="14" strokeDasharray="4 3" opacity="0.55" />
    </svg>
  );
}

function CirclesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <circle cx="18" cy="18" r="10" />
      <circle cx="30" cy="18" r="10" />
      <circle cx="24" cy="28" r="10" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <path d="M6 24l18 9 18-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 32l18 9 18-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16l18-9 18 9-18 9L6 16z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <path d="M24 44L6 34V14L24 4l18 10v20L24 44z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 44V24M6 14l18 10 18-10" strokeLinecap="round" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <path d="M24 42L4 18l6-10h28l6 10L24 42z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18h40M14 8l4 10M34 8l-4 10M24 42L14 18M24 42L34 18" strokeLinecap="round" />
    </svg>
  );
}

function LifeRingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="8" />
      <path d="M9.4 9.4l5.2 5.2M33.4 33.4l5.2 5.2M38.6 9.4l-5.2 5.2M14.6 33.4l-5.2 5.2" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="44" height="44">
      <ellipse cx="24" cy="12" rx="16" ry="6" />
      <path d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
      <path d="M8 24v12c0 3.3 7.2 6 16 6s16-2.7 16-6V24" />
    </svg>
  );
}