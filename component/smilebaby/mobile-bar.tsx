"use client";

import { Phone, Calendar, X } from "lucide-react";
// import SmileBabyForm from "./contact-froms";
import { useState } from "react";
import SmileBabyFormed from "./ivf-contact-form";
interface imgse{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// Modal wrapper component
const BookingModal = ({ isOpen, onClose, children } : imgse) => {
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
        <div className="max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
export default function MobileActionBar() {
        const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
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
      <a
      onClick={() => setIsBookingModalOpen(true)}
        href="#forms"
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
      </a>
      <BookingModal 
                              isOpen={isBookingModalOpen} 
                              onClose={() => setIsBookingModalOpen(false)}
                            >
                              <SmileBabyFormed />
                            </BookingModal>
    </div>
  );
}