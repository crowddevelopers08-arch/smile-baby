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
              className="bg-[#ec4899] cursor-pointer hover:bg-[#d63c84] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </button>

            <button className="flex cursor-pointer items-center gap-1 bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              <svg
  className="w-4 h-4 flex-shrink-0"
  viewBox="0 0 32 32"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.537.74 4.999 2.137 7.116L3 29l6.08-2.09A12.94 12.94 0 0016.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3zm0 23.667a10.6 10.6 0 01-5.403-1.48l-.387-.229-3.607 1.24 1.179-3.51-.252-.404A10.59 10.59 0 015.333 16c0-5.882 4.785-10.667 10.668-10.667 5.881 0 10.666 4.785 10.666 10.667S21.882 26.667 16 26.667zm5.848-7.98c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.588-.95-.847-1.592-1.893-1.779-2.213-.187-.32-.02-.493.14-.653.145-.144.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.526-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.306c.16.214 2.258 3.447 5.474 4.833.765.33 1.362.527 1.828.674.768.244 1.467.21 2.02.127.616-.092 1.892-.773 2.158-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z"/>
</svg>
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
