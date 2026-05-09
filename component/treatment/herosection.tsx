"use client";

import { useRef, useState, type ComponentType, type ReactNode } from "react";
import { X } from "lucide-react";
import SmileBabyForm from "../contact-froms";

const PINK = "#ec4899";
const BLUE = "#1e2f5f";

export const stats = [
  { value: "10,000+", label: "Babies Delivered" },
  { value: "12+ Yrs", label: "Fertility Care" },
  { value: "80–85%", label: "1st IVF Success" },
  { value: "₹1.8L", label: "Starting Cost" },
];

/* ── SVG Icons ── */
type IconProps = { c: string; s: number };
type IconName =
  | "heart"
  | "stethoscope"
  | "dna"
  | "pill"
  | "baby"
  | "cross"
  | "syringe"
  | "activity"
  | "microscope";
type BgElement = {
  icon: IconName | null;
  shape: "circle" | "square";
  size: number;
  top: string;
  left: string;
  col: string;
  op: number;
  dur: string;
  del: string;
};

const IconHeart = ({ c, s }: IconProps) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconStethoscope = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1" />
    <path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);
const IconDNA = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M2 9c6.667 6 13.333 0 20 6" />
    <path d="M2 12h.01M22 12h.01M5.5 6.5h.01M18.5 6.5h.01M5.5 17.5h.01M18.5 17.5h.01" />
  </svg>
);
const IconPill = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);
const IconBaby = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12h.01M15 12h.01" />
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  </svg>
);
const IconCross = ({ c, s }: { c: string; s: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 9h-4v4h-2v-4H7v-2h4V6h2v4h4v2z" />
  </svg>
);
const IconSyringe = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
    <path d="m9 11 4 4" />
    <path d="m5 19-3 3" />
    <path d="m14 4 6 6" />
  </svg>
);
const IconActivity = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconMicroscope = ({ c, s }: { c: string; s: number }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke={c}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 18h8" />
    <path d="M3 21h18" />
    <path d="M14 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
    <path d="M14 7v4" />
    <path d="M10 7V5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z" />
    <path d="M6 7h2" />
    <path d="M6 11h2" />
  </svg>
);

const getIcon = (name: IconName | null, c: string, s: number) => {
  if (!name) return null;
  const map: Record<IconName, ComponentType<IconProps>> = {
    heart: IconHeart,
    stethoscope: IconStethoscope,
    dna: IconDNA,
    pill: IconPill,
    baby: IconBaby,
    cross: IconCross,
    syringe: IconSyringe,
    activity: IconActivity,
    microscope: IconMicroscope,
  };
  const Comp = map[name];
  return Comp ? <Comp c={c} s={s} /> : null;
};

/* ── Floating BG elements — only on far edges so they don't cover content ── */
const bgEls: BgElement[] = [
  {
    icon: "heart",
    shape: "circle",
    size: 62,
    top: "6%",
    left: "2%",
    col: PINK,
    op: 0.17,
    dur: "6s",
    del: "0s",
  },
  {
    icon: "stethoscope",
    shape: "circle",
    size: 70,
    top: "70%",
    left: "1%",
    col: PINK,
    op: 0.15,
    dur: "7s",
    del: "2s",
  },
  {
    icon: "pill",
    shape: "circle",
    size: 50,
    top: "42%",
    left: "0%",
    col: PINK,
    op: 0.14,
    dur: "10s",
    del: "3s",
  },
  {
    icon: "dna",
    shape: "circle",
    size: 54,
    top: "20%",
    left: "90%",
    col: BLUE,
    op: 0.17,
    dur: "8s",
    del: "1s",
  },
  {
    icon: "activity",
    shape: "circle",
    size: 54,
    top: "55%",
    left: "92%",
    col: PINK,
    op: 0.16,
    dur: "7.5s",
    del: "1.5s",
  },
  {
    icon: "cross",
    shape: "square",
    size: 50,
    top: "4%",
    left: "74%",
    col: BLUE,
    op: 0.15,
    dur: "12s",
    del: "1s",
  },
  {
    icon: "baby",
    shape: "circle",
    size: 58,
    top: "82%",
    left: "84%",
    col: BLUE,
    op: 0.16,
    dur: "9s",
    del: "0.5s",
  },
  {
    icon: "syringe",
    shape: "square",
    size: 48,
    top: "88%",
    left: "42%",
    col: BLUE,
    op: 0.13,
    dur: "8.5s",
    del: "4s",
  },
  {
    icon: "microscope",
    shape: "square",
    size: 52,
    top: "85%",
    left: "12%",
    col: PINK,
    op: 0.14,
    dur: "9.5s",
    del: "0.5s",
  },
  // tiny dots
  {
    icon: null,
    shape: "circle",
    size: 14,
    top: "16%",
    left: "40%",
    col: PINK,
    op: 0.22,
    dur: "5s",
    del: "0s",
  },
  {
    icon: null,
    shape: "circle",
    size: 10,
    top: "75%",
    left: "63%",
    col: BLUE,
    op: 0.2,
    dur: "6s",
    del: "1s",
  },
  {
    icon: null,
    shape: "square",
    size: 12,
    top: "32%",
    left: "76%",
    col: PINK,
    op: 0.18,
    dur: "7s",
    del: "2s",
  },
  {
    icon: null,
    shape: "circle",
    size: 16,
    top: "92%",
    left: "28%",
    col: PINK,
    op: 0.19,
    dur: "9s",
    del: "1s",
  },
];

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BookingModal = ({ isOpen, onClose, children }: BookingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all"
          aria-label="Close booking form"
        >
          <X size={20} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default function FertilityBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingForm = () => setIsBookingModalOpen(true);

  /*
   * RIGHT SIDE IMAGE — replace this URL with your actual clinic/doctor image.
   * Using a public placeholder that looks like a medical professional.
   * Swap → your own image path e.g. "/images/doctor-banner.jpg"
   */
  const IMAGE_URL = "/happy-doctor.avif";
  // 👆 A smiling Indian female doctor — replace with your own photo

  return (
    <div
      ref={ref}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="relative w-full overflow-hidden flex items-center bg-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');
        .pfs { font-family:'Playfair Display',Georgia,serif; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes lineGrow { from{width:0} to{width:60px} }
        @keyframes badgePop { 0%{opacity:0;transform:scale(0.9) translateY(-8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes dotBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes pulseRing{ 0%{transform:scale(1);opacity:0.5} 100%{transform:scale(1.75);opacity:0} }
        @keyframes scrollBnc{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes shimmerB { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes imgReveal{ from{clip-path:inset(0 100% 0 0);opacity:0} to{clip-path:inset(0 0% 0 0);opacity:1} }

        /* individual float anims */
        @keyframes fl0 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(7px,-13px) rotate(6deg)}}
        @keyframes fl1 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(11px,-9px) rotate(-5deg)}}
        @keyframes fl2 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-9px,13px) rotate(7deg)}}
        @keyframes fl3 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-11px,10px) rotate(-6deg)}}
        @keyframes fl4 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(13px,-7px) rotate(5deg)}}
        @keyframes fl5 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(9px,-15px) rotate(-8deg)}}
        @keyframes fl6 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-8px,15px) rotate(6deg)}}
        @keyframes fl7 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-13px,7px) rotate(-5deg)}}
        @keyframes fl8 {0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(11px,-11px) rotate(9deg)}}
        @keyframes fl9 {0%,100%{transform:translate(0,0) scale(1)}     50%{transform:translate(5px,-5px) scale(1.2)}}
        @keyframes fl10{0%,100%{transform:translate(0,0) scale(1)}     50%{transform:translate(-4px,7px) scale(1.15)}}
        @keyframes fl11{0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(4px,-4px) rotate(45deg)}}
        @keyframes fl12{0%,100%{transform:translate(0,0) scale(1)}     50%{transform:translate(6px,-8px) scale(1.1)}}

        .fade-up    { animation: fadeUp  0.85s cubic-bezier(.22,1,.36,1) both; }
        .fade-in    { animation: fadeIn  0.9s ease both; }
        .line-grow  { animation: lineGrow 0.7s cubic-bezier(.22,1,.36,1) both; }
        .badge-pop  { animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) both; }
        .dot-blink  { animation: dotBlink 2s ease-in-out infinite; }
        .scroll-bnc { animation: scrollBnc 2.2s ease-in-out infinite; }

        .shimmer-blue {
          background: linear-gradient(90deg,#1e2f5f 0%,#3b5bdb 40%,#1e2f5f 60%,#0f1e40 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation: shimmerB 5s linear infinite;
        }

        .stat-chip { transition: all 0.28s cubic-bezier(.22,1,.36,1); }
        .stat-chip:hover { transform:translateY(-3px) scale(1.04); box-shadow:0 8px 24px rgba(236,72,153,0.18) !important; }

        .btn-primary {
          background:#ec4899; color:#fff;
          transition:all 0.25s ease; position:relative; overflow:hidden;
        }
        .btn-primary::after {
          content:''; position:absolute; inset:0; border-radius:inherit;
          border:2px solid #ec4899; animation:pulseRing 2s ease-out infinite;
        }
        .btn-primary:hover { background:#db2777 !important; transform:translateY(-2px); box-shadow:0 8px 24px rgba(236,72,153,0.35); }

        .btn-secondary { background:transparent; color:#1e2f5f; border:2px solid #1e2f5f; transition:all 0.25s ease; }
        .btn-secondary:hover { background:#1e2f5f !important; color:#fff !important; transform:translateY(-2px); }

        .trust-chip { transition:all 0.2s ease; }
        .trust-chip:hover { background:rgba(236,72,153,0.08) !important; border-color:rgba(236,72,153,0.4) !important; }

        .mobile-image-cta { display:none !important; }

        /* image frame */
        .img-reveal { animation: imgReveal 1s cubic-bezier(.22,1,.36,1) 0.4s both; }

        /* decorative blob behind image */
        @keyframes blobPulse { 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%} 50%{border-radius:45% 55% 40% 60%/60% 45% 55% 40%} }
        .blob { animation: blobPulse 8s ease-in-out infinite; }

        @media(max-width:767px) {
          .desktop-cta { display:none !important; }
          .hero-image-col {
            flex-direction:column !important;
            align-items:center !important;
          }
          .image-stage {
            width:100% !important;
          }
          .mobile-image-cta {
            display:flex !important;
            width:100% !important;
            margin-top:32px !important;
          }
          .mobile-image-cta button,
          .mobile-image-cta a {
            width:100% !important;
          }
        }
      `}</style>

      {/* ══ BG floating medical icons ══ */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {bgEls.map((el, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              width: el.size,
              height: el.size,
              top: el.top,
              left: el.left,
              borderRadius: el.shape === "circle" ? "50%" : "12px",
              background: el.icon
                ? el.col === PINK
                  ? "rgba(236,72,153,0.06)"
                  : "rgba(30,47,95,0.05)"
                : el.col === PINK
                  ? "rgba(236,72,153,0.18)"
                  : "rgba(30,47,95,0.16)",
              border: el.icon
                ? `1.5px solid ${el.col === PINK ? "rgba(236,72,153,0.18)" : "rgba(30,47,95,0.13)"}`
                : "none",
              opacity: el.op,
              animationName: `fl${i}`,
              animationDuration: el.dur,
              animationDelay: el.del,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
            }}
          >
            {el.icon && getIcon(el.icon, el.col, el.size * 0.46)}
          </div>
        ))}

        {/* dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle,rgba(30,47,95,0.055) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%,black 40%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%,black 40%,transparent 100%)",
          }}
        />

        {/* ambient orbs */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            top: "-14%",
            right: "-6%",
            background:
              "radial-gradient(circle,rgba(236,72,153,0.09) 0%,transparent 68%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            bottom: "-12%",
            left: "-5%",
            background:
              "radial-gradient(circle,rgba(30,47,95,0.09) 0%,transparent 68%)",
            filter: "blur(45px)",
          }}
        />
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div
        className="relative w-full max-w-6xl mx-auto px-6 lg:px-10 py-4 lg:py-8"
        style={{ zIndex: 10 }}
      >

        {/* ── Two column ── */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center mt-15">
          {/* ════ LEFT: COPY ════ */}
          <div>
            <div
              className="fade-up flex items-center gap-2 mb-4"
              style={{ animationDelay: "0.1s" }}
            >
              <span
                className="dot-blink"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: PINK,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  animationDelay: "0.05s",
                  background: "rgba(236,72,153,0.07)",
                  border: "1.5px solid rgba(236,72,153,0.25)",
                  padding: "10px 10px",
                  color: PINK,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                }}
              >
                Tired of Trying to Get Pregnant?
              </span>
            </div>
            <h1
              className="pf fade-up"
              style={{
                animationDelay: "0.15s",
                fontSize: "clamp(2.4rem,4.8vw,3.8rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                color: BLUE,
                marginBottom: "0.3rem",
              }}
            >
              You should visit Best IVF &nbsp;
              <em style={{ fontStyle: "italic", color: PINK }}>
                clinic in Bangalore
              </em>
            </h1>

            <h2
              className="pf fade-up shimmer-blue"
              style={{
                animationDelay: "0.28s",
                fontSize: "clamp(1.8rem,3.6vw,2.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: "1.3rem",
              }}
            >
              Now It&apos;s Time for
              <br />
              the Right Plan.
            </h2>

            <div
              className="line-grow"
              style={{
                animationDelay: "0.36s",
                height: 3,
                background: `linear-gradient(90deg,${PINK},rgba(236,72,153,0))`,
                borderRadius: 4,
                marginBottom: "1.3rem",
              }}
            />

            <p
              className="fade-up"
              style={{
                animationDelay: "0.38s",
                color: "rgba(30,47,95,0.62)",
                fontSize: "clamp(0.92rem,1.4vw,1.02rem)",
                lineHeight: 1.8,
                fontWeight: 400,
                maxWidth: 420,
                marginBottom: "1.8rem",
              }}
            >
              Best fertility Clinic in Lingarajapuram, Bangalore — transparent,
              personal, and built around your case.
            </p>

            {/* Trust chips */}
            <div
              className="fade-up flex flex-wrap gap-2 mb-8"
              style={{ animationDelay: "0.44s" }}
            >
              {[
                "ICMR Certified",
                "12+ Years Experience",
                "Personalised Care",
              ].map((t) => (
                <span
                  key={t}
                  className="trust-chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: BLUE,
                    background: "rgba(30,47,95,0.06)",
                    border: "1px solid rgba(30,47,95,0.14)",
                    borderRadius: 999,
                    padding: "4px 12px",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={PINK}
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="desktop-cta fade-up flex flex-col sm:flex-row gap-3"
              style={{ animationDelay: "0.52s" }}
            >
              <button
                type="button"
                onClick={openBookingForm}
                className="btn-primary flex items-center justify-center gap-2.5 rounded-full font-semibold"
                style={{
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.02em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.986l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 01-5.031-1.377l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.105 12C2.105 6.533 6.533 2.105 12 2.105S21.895 6.533 21.895 12 17.467 21.894 12 21.894z" />
                </svg>
                Book Your Planning Visit
              </button>
              <a
                href="tel:+918884752134"
                className="btn-secondary flex items-center justify-center gap-2.5 rounded-full font-semibold"
                style={{
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.16 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Us Now
              </a>
            </div>

            <p
              className="fade-in"
              style={{
                animationDelay: "0.65s",
                marginTop: "0.85rem",
                fontSize: "0.74rem",
                color: "rgba(30,47,95,0.42)",
                fontWeight: 400,
              }}
            >
              📍 Walk in with your reports · Walk out with a clear plan
            </p>
          </div>

          {/* ════ RIGHT: IMAGE FRAME ════ */}
          <div
            className="hero-image-col fade-up relative flex justify-center"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="image-stage relative flex justify-center">
              {/* Decorative blob behind image */}
              <div
                className="blob absolute"
                style={{
                  width: "88%",
                  height: "88%",
                  top: "6%",
                  left: "6%",
                  background: `linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(30,47,95,0.12) 100%)`,
                  filter: "blur(2px)",
                  zIndex: 0,
                }}
              />

              {/* Outer decorative ring */}
              <div
                style={{
                  position: "absolute",
                  width: "92%",
                  height: "92%",
                  top: "4%",
                  left: "4%",
                  borderRadius: "38% 62% 46% 54% / 52% 44% 56% 48%",
                  border: `2px dashed rgba(236,72,153,0.22)`,
                  zIndex: 1,
                  animation: "blobPulse 10s ease-in-out infinite reverse",
                }}
              />

              {/* Image container */}
              <div
                className="img-reveal relative"
                style={{
                  width: "100%",
                  maxWidth: 440,
                  aspectRatio: "4/5",
                  borderRadius: "40% 60% 50% 50% / 50% 45% 55% 50%",
                  overflow: "hidden",
                  zIndex: 2,
                  boxShadow: `0 24px 64px rgba(30,47,95,0.18), 0 8px 24px rgba(236,72,153,0.14)`,
                  border: `3px solid rgba(255,255,255,0.9)`,
                }}
              >
                {/*
                ✅ REPLACE THIS IMAGE with your own doctor/couple photo:
                   <img src="/images/your-doctor.jpg" ... />
                   or  <img src={yourImportedImage} ... />
              */}
                <img
                  src={IMAGE_URL}
                  alt="Fertility specialist doctor"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />

                {/* Soft gradient overlay at bottom for readability */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(30,47,95,0.55) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* ── Floating stat chips around image ── */}
              {/* Top-left chip */}
              <div
                className="stat-chip absolute"
                style={{
                  top: "8%",
                  left: "-5%",
                  zIndex: 5,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "10px 14px",
                  boxShadow: `0 8px 32px rgba(30,47,95,0.13)`,
                  border: `1.5px solid rgba(236,72,153,0.18)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: "fl0 6s ease-in-out infinite alternate",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(236,72,153,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconHeart c={PINK} s={18} />
                </div>
                <div>
                  <div
                    className="pf"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: PINK,
                      lineHeight: 1,
                    }}
                  >
                    10,000+
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(30,47,95,0.55)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    Babies Delivered
                  </div>
                </div>
              </div>

              {/* Top-right chip */}
              <div
                className="stat-chip absolute"
                style={{
                  top: "40%",
                  right: "0%",
                  zIndex: 5,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "10px 14px",
                  boxShadow: `0 8px 32px rgba(30,47,95,0.13)`,
                  border: `1.5px solid rgba(30,47,95,0.14)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: "fl3 8s ease-in-out infinite alternate",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(30,47,95,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconActivity c={BLUE} s={18} />
                </div>
                <div>
                  <div
                    className="pf"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: BLUE,
                      lineHeight: 1,
                    }}
                  >
                    80–85%
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(30,47,95,0.55)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    1st IVF Success
                  </div>
                </div>
              </div>

              {/* Bottom-left chip */}
              <div
                className="stat-chip absolute"
                style={{
                  bottom: "18%",
                  left: "-6%",
                  zIndex: 5,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "10px 14px",
                  boxShadow: `0 8px 32px rgba(30,47,95,0.13)`,
                  border: `1.5px solid rgba(30,47,95,0.14)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: "fl1 7s ease-in-out infinite alternate",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(30,47,95,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconStethoscope c={BLUE} s={18} />
                </div>
                <div>
                  <div
                    className="pf"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: BLUE,
                      lineHeight: 1,
                    }}
                  >
                    12+ Yrs
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(30,47,95,0.55)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    Expert Care
                  </div>
                </div>
              </div>

              {/* Bottom-right chip */}
              <div
                className="stat-chip absolute"
                style={{
                  bottom: "10%",
                  right: "-7%",
                  zIndex: 5,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "10px 14px",
                  boxShadow: `0 8px 32px rgba(30,47,95,0.13)`,
                  border: `1.5px solid rgba(236,72,153,0.18)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  animation: "fl5 9s ease-in-out infinite alternate",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(236,72,153,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={PINK}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <div
                    className="pf"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: PINK,
                      lineHeight: 1,
                    }}
                  >
                    ₹1.8L
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(30,47,95,0.55)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    Starting Cost
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mobile-image-cta fade-up flex flex-col gap-3"
              style={{ animationDelay: "0.52s" }}
            >
              <button
                type="button"
                onClick={openBookingForm}
                className="btn-primary flex items-center justify-center gap-2.5 rounded-full font-semibold"
                style={{
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.02em",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.986l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 01-5.031-1.377l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.105 12C2.105 6.533 6.533 2.105 12 2.105S21.895 6.533 21.895 12 17.467 21.894 12 21.894z" />
                </svg>
                Book Your Planning Visit
              </button>
              <a
                href="tel:+918884752134"
                className="btn-secondary flex items-center justify-center gap-2.5 rounded-full font-semibold"
                style={{
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.16 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <SmileBabyForm />
      </BookingModal>
    </div>
  );
}
