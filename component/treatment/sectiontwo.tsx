"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function CostBanner() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#1e2f5f] via-[#243a73] to-[#ec4899] text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ec4899]/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1e2f5f]/40 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative z-10">

        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            We Tell You the Full Cost Before You Start
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-3">
            ₹1.8L+ Starting cost per IVF cycle
          </p>

          <p className="text-sm sm:text-base text-white/80 mb-6">
            0% Interest EMI, No Hidden Costs, Case-specific estimate
          </p>

          {/* Highlight Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm">
              ✓ 0% Interest EMI
            </span>

            <span className="px-4 py-2 rounded-full bg-[#ec4899]/20 border border-[#ec4899]/40 text-sm">
              ✦ No Hidden Costs
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm">
              ✓ Case-specific estimate
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
            Most clinics reveal costs progressively. We do the opposite. At your Planning Visit, you&apos;ll receive a full written estimate. No surprises when the bill arrives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-[#ec4899] hover:bg-[#d63c84] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </button>

            <button className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              WhatsApp Us
            </button>

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
