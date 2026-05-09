"use client";

import { Phone, Calendar } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function MobileActionBar() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          bg-white border-t border-[#ec4899] shadow-lg
          flex md:hidden
        "
      >
        {/* Call Now */}
        <a
          href="tel:+91 8884752134"
          className="
            flex-1 flex items-center justify-center gap-2
            py-4 font-semibold text-white
            text-sm
            bg-[#ec4899]
            active:scale-95 transition
          "
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Book Now */}
        <button
          type="button"
          onClick={() => setIsBookingModalOpen(true)}
          className="
            flex-1 flex items-center justify-center gap-2
            py-4 font-semibold
            text-[#ec4899]
            bg-white
            text-sm
            border-l border-gray-200
            active:scale-95 transition
          "
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </button>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
