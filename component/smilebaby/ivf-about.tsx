// "use client";

// import { useState } from "react";

// const highlights = [
//   {
//     stat: "10,000+",
//     desc: "Babies Born",
//     detail: "Trusted by thousands of families across Bangalore",
//     color: "#ec4899",
//     bg: "#fff0f7",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         width="26"
//         height="26"
//       >
//         <path d="M12 21.7C5.4 16.9 2 12.4 2 8.5a5.5 5.5 0 0 1 10-3.1A5.5 5.5 0 0 1 22 8.5c0 3.9-3.4 8.4-10 13.2z" />
//       </svg>
//     ),
//   },
//   {
//     stat: "12 Years",
//     desc: "Advanced Fertility Care",
//     detail: "Over a decade of specialised expertise & innovation",
//     color: "#ec4899",
//     bg: "#fff0f7",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         width="26"
//         height="26"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//   },
//   {
//     stat: "80%",
//     desc: "Word-of-Mouth Referrals",
//     detail: "Our biggest testament is families recommending us",
//     color: "#ec4899",
//     bg: "#fff0f7",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         width="26"
//         height="26"
//       >
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//   },
//   {
//     stat: "₹0 Hidden Costs",
//     desc: "Transparent Pricing",
//     detail: "No surprise costs — full clarity from day one",
//     color: "#ec4899",
//     bg: "#fff0f7",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         width="26"
//         height="26"
//       >
//         <rect x="2" y="5" width="20" height="14" rx="2" />
//         <line x1="2" y1="10" x2="22" y2="10" />
//       </svg>
//     ),
//   },
//   {
//     stat: "Same Doctor Guidance",
//     desc: "Fertility Support Team",
//     detail: "Continuity of care with your dedicated fertility team",
//     color: "#ec4899",
//     bg: "#fff0f7",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.6"
//         width="26"
//         height="26"
//       >
//         <path d="M20 21v-2a4 4 0 0 0-4-4h-4" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M3 21v-2a4 4 0 0 1 4-4h2" />
//         <path d="M16 11l2 2 4-4" />
//       </svg>
//     ),
//   },
// ];

// export default function TrustedFamiliesSection() {
//   const [active, setActive] = useState(null);

//   return (
//     <section className="w-full relative overflow-hidden bg-white">


//       {/* ── Blob accents ── */}
//       <div
//         className="absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle,rgba(249,168,212,0.25) 0%,transparent 70%)",
//         }}
//       />
//       <div
//         className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle,rgba(45,62,127,0.1) 0%,transparent 70%)",
//         }}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-28">
//         {/* ── HEADER ── */}
//         <div className="flex flex-col items-center text-center mb-16">
//           <span
//             className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-5"
//             style={{
//               background: "#fff0f7",
//               color: "#ec4899",
//               border: "1px solid rgba(236,72,153,0.2)",
//             }}
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block animate-pulse" />
//             Bangalore's Most Referred Fertility Centre
//           </span>

//           <h2
//             className="font-extrabold leading-[1.1] tracking-tight mb-4"
//             style={{
//               fontSize: "clamp(2rem, 5vw, 3.5rem)",
//               color: "#111827",
//             }}
//           >
//             Trusted By{" "}
//             <span
//               className="relative inline-block"
//               style={{ color: "#2d3e7f" }}
//             >
//               Families
//               <svg
//                 className="absolute -bottom-1 left-0 w-full"
//                 viewBox="0 0 200 8"
//                 preserveAspectRatio="none"
//                 height="6"
//               >
//                 <path
//                   d="M0 6 Q50 0 100 5 Q150 10 200 4"
//                   stroke="#f9a8d4"
//                   strokeWidth="2.5"
//                   fill="none"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>{" "}
//             <br className="sm:hidden" />
//             Across <span style={{ color: "#ec4899" }}>Bangalore</span>
//           </h2>

//           <p
//             className="text-base max-w-md leading-relaxed"
//             style={{ color: "#6b7280" }}
//           >
//             A fertility centre built on trust, transparency, and the joy of new
//             beginnings.
//           </p>
//         </div>

//         {/* ── CARDS GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
//           {highlights.map(({ stat, desc, detail, color, bg, icon }, i) => {
//             const isActive = active === i;
//             const isLast = i === highlights.length - 1;
//             return (
//               <div
//                 key={i}
//                 onMouseEnter={() => setActive(i)}
//                 onMouseLeave={() => setActive(null)}
//                 className={`relative group cursor-default rounded-3xl p-6 transition-all duration-300 overflow-hidden${isLast ? " sm:col-span-2 lg:col-span-1" : ""}`}
//                 style={{
//                   background: isActive
//                     ? `linear-gradient(135deg, ${color}15, ${color}08)`
//                     : "#fafafa",
//                   border: `1.5px solid ${isActive ? color + "40" : "#f0f0f0"}`,
//                   boxShadow: isActive
//                     ? `0 20px 48px ${color}22, 0 4px 16px ${color}14`
//                     : "0 2px 12px rgba(0,0,0,0.04)",
//                   transform: isActive ? "translateY(-4px)" : "translateY(0)",
//                 }}
//               >
//                 {/* Top accent line */}
//                 <div
//                   className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300"
//                   style={{ background: isActive ? color : "transparent" }}
//                 />

//                 {/* Icon */}
//                 <div
//                   className="flex items-center justify-center rounded-2xl mb-4 transition-all duration-300"
//                   style={{
//                     width: 52,
//                     height: 52,
//                     background: isActive ? color : bg,
//                     color: isActive ? "#fff" : color,
//                     boxShadow: isActive ? `0 8px 20px ${color}40` : "none",
//                   }}
//                 >
//                   {icon}
//                 </div>

//                 {/* Stat */}
//                 <div
//                   className="text-3xl font-extrabold leading-none mb-1 tracking-tight transition-colors duration-300"
//                   style={{ color: isActive ? color : "#111827" }}
//                 >
//                   {stat}
//                 </div>

//                 {/* Desc */}
//                 <div
//                   className="font-semibold text-sm mb-2"
//                   style={{ color: "#374151" }}
//                 >
//                   {desc}
//                 </div>

//                 {/* Detail */}
//                 <p
//                   className="text-xs leading-relaxed"
//                   style={{ color: "#9ca3af" }}
//                 >
//                   {detail}
//                 </p>

//                 {/* Hover corner glow */}
//                 <div
//                   className="absolute bottom-0 right-0 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-300"
//                   style={{
//                     background: `radial-gradient(circle, ${color}18, transparent 70%)`,
//                     opacity: isActive ? 1 : 0,
//                     transform: "translate(30%, 30%)",
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex justify-center">
//           <button
//             className="hidden sm:flex btn-primary bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium shadow-lg text-sm sm:text-base"
//             // onClick={() => setIsBookingModalOpen(true)}
//           >
//             Book Appointment
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
