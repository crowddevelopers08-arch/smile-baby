"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

export default function ComparisonBanner() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const data = [
    {
      left: "Same specialist throughout your cycle",
      right: "Different doctor at every appointment",
    },
    {
      left: "Full diagnosis before treatment commitment",
      right: "Start treatment, understand later",
    },
    {
      left: "Complete cost estimate before you begin",
      right: "Costs revealed progressively",
    },
    {
      left: "Planning visit to understand your case first",
      right: "Immediate protocol without review",
    },
    {
      left: "Personal attention from in-house embryology team",
      right: "Centralised lab, remote reporting",
    },
    {
      left: "12 years of advanced care in East Bangalore",
      right: "Franchise clinic with rotational staff",
    },
  ];

  return (
    <section id="process" className="w-full py-4 sm:py-8 md:py-8 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-5 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1e2f5f] mb-2 md:mb-4">
            Why Couples Choose Smile Baby {" "}
            <span className="text-[#ec4899]">(IVF best hospital)</span>{" "}
             Over Larger Chains.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            When you walk into a 50-branch fertility chain, you become a case number.
            At Smile Baby, you remain a person.
          </p>
        </div>

        {/* Scroll Wrapper */}
        <div className="overflow-x-auto">
          
          {/* Table */}
          <div className="min-w-[600px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

            {/* Header */}
            <div className="grid grid-cols-2 text-center font-semibold text-sm sm:text-base">
              <div className="bg-[#f9fafb] py-4 border-r border-gray-200">
                At <span className="text-[#ec4899]">Smile Baby</span>
              </div>
              <div className="bg-[#f3f4f6] py-4">
                At Large Chains
              </div>
            </div>

            {/* Rows */}
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-t border-gray-200"
              >
                {/* LEFT */}
                <div className="flex items-start gap-3 p-4 sm:p-5 bg-[#fdfefe]">
                  <span className="text-green-500 text-lg">✔</span>
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.left}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-start gap-3 p-4 sm:p-5">
                  <span className="text-red-500 text-lg">✕</span>
                  <p className="text-sm sm:text-base text-gray-500">
                    {item.right}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-[#ec4899] text-white px-6 py-3 rounded-full font-medium cursor-pointer"
          >
            Book Appointment
          </button>

          <button className="flex justify-center items-center gap-1 border border-gray-300 text-[#1e2f5f] px-6 py-3 rounded-full font-medium cursor-pointer">
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
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
