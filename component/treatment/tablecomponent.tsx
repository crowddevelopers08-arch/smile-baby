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
            Why Couples Choose{" "}
            <span className="text-[#ec4899]">Smile Baby</span>{" "}
            Over Larger Chains
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
            className="bg-[#ec4899] text-white px-6 py-3 rounded-full font-medium"
          >
            Book Appointment
          </button>

          <button className="border border-gray-300 text-[#1e2f5f] px-6 py-3 rounded-full font-medium">
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
