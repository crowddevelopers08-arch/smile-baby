"use client";

import { useState, useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import SmileBabyForm from "../contact-froms";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#our-team" },
    { name: "Process", href: "#process" },
    { name: "RoadMap", href: "#roadmap" },
    // { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  const openBookingForm = () => {
    setOpen(false);
    setIsBookingModalOpen(true);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="https://ik.imagekit.io/tnvhh8yfa/public/smile-baby-logo.webp"
              alt="Smile Baby Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu - Hidden on Mobile/Tablet, Visible on Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1e2f5f] hover:text-[#ec4899] transition-all duration-300 text-sm xl:text-base font-medium relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#ec4899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button - Hidden on Mobile, Visible on Tablet and Desktop */}
          <button
            type="button"
            onClick={openBookingForm}
            className="hidden sm:block bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Button - Visible only on Mobile/Tablet */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#ec4899]/10 hover:bg-[#ec4899]/15 border border-[#ec4899]/20 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1e2f5f"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE & TABLET MENU - Full width dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white/98 backdrop-blur-md border-t border-[#ec4899]/10 shadow-lg`}
      >
        <div className="mx-4 my-4 rounded-2xl border border-[#ec4899]/12 bg-white shadow-sm p-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-[#1e2f5f] font-semibold text-sm hover:bg-[#ec4899]/7 hover:text-[#ec4899] transition-colors duration-200"
              onClick={handleLinkClick}
            >
              {link.name}
              <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]/40" />
            </a>
          ))}

          <button
            type="button"
            className="mt-3 bg-gradient-to-r from-[#ec4899] to-[#be185d] text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 w-full"
            onClick={openBookingForm}
          >
            Book Appointment
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <SmileBabyForm />
      </BookingModal>
    </header>
  );
}
