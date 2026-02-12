"use client";

import React from "react";

export default function VisitClinic() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-5 md:px-6 bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* =========================================== */}
          {/* DESKTOP LAYOUT - Left Column - Content (Unchanged) */}
          {/* =========================================== */}
          <div className="hidden lg:block">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-sm font-semibold tracking-wider">
                Visit Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-[#1e2f5f] mb-6 leading-tight">
              Visit <span className="text-pink-400">Smile Baby IVF</span> —
              Lingarajapuram, Bangalore
            </h2>

            {/* Body Copy */}
            <p className="text-gray-700 text-md md:text-lg mb-8 leading-relaxed">
              Comparing clinics is normal. If you want clarity on plan, pricing,
              and next steps—book a treatment planning visit or request a
              WhatsApp estimate.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+919380902110"
                className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>

              <button
                className="group bg-[#1e2f5f] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
                onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Planning Visit
              </button>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6 border border-pink-100">
              <h3 className="text-sm md:text-md font-bold text-[#1e2f5f] mb-3 flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Nearby Areas (within ~10 km):
              </h3>
              <p className="text-gray-700 text-sm">
                Kalyan Nagar • Kammanahalli • HBR • HRBR • KR Puram
              </p>
            </div>

            {/* Privacy Note */}
            <div className="flex items-start gap-3 bg-pink-50 rounded-lg p-4 border border-pink-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                className="flex-shrink-0 mt-0.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-pink-600">
                  Privacy Protected:
                </span>{" "}
                Your details are kept confidential.
              </p>
            </div>
          </div>

          {/* =========================================== */}
          {/* MOBILE/TABLET LAYOUT - Complete Restructured */}
          {/* =========================================== */}
          <div className="lg:hidden w-full">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-xs sm:text-sm font-semibold tracking-wider">
                Visit Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2f5f] mb-4 leading-tight">
              Visit <span className="text-pink-400">Smile Baby IVF</span> —
              Lingarajapuram, Bangalore
            </h2>

            {/* MAP - Positioned after heading on mobile/tablet */}
            <div className="relative mb-6 sm:mb-8">
              {/* Decorative elements - Scaled down */}
              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>

              {/* Map Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15545.982464776807!2d80.15652359999999!3d13.067745350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae16e3ec67956d%3A0x6046a92e86e52565!2sSmile%20Baby%20IVF%20-%20Best%20IVF%20Centre%20In%20Bangalore%2C%20A%20Unit%20of%20K%20C%20Raju%20Multispeciality%20Hospital%2C%20Hennur%20Main%20Rd%2C%20below%20Fly%20Over%2C%20CMR%20Layout%2C%20Lingarajapuram%2C%20Bengaluru%2C%20Karnataka%20560084!3m2!1d13.0093271!2d77.6236431!5e0!3m2!1sen!2sin!4v1770877443204!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl sm:rounded-2xl"
                ></iframe>
              </div>

              {/* Map Caption - Mobile only */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-[#1e2f5f] shadow-md">
                📍 Lingarajapuram, Bangalore
              </div>
            </div>

            {/* Body Copy */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              Comparing clinics is normal. If you want clarity on plan, pricing,
              and next steps—book a treatment planning visit or request a
              WhatsApp estimate.
            </p>

            {/* Action Buttons - Stack on mobile, side by side on tablet */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <button className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </button>

              <button
                className="group bg-[#1e2f5f] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Planning Visit
              </button>
            </div>

            {/* Nearby Areas - Simplified for mobile */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 mb-4 border border-pink-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Nearby Areas (within ~10 km):
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm">
                Kalyan Nagar • Kammanahalli • HBR • HRBR • KR Puram
              </p>
            </div>

            {/* Privacy Note - With better mobile styling */}
            <div className="flex items-start gap-3 bg-pink-50/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-pink-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                className="flex-shrink-0 mt-0.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold text-pink-600">
                  Privacy Protected:
                </span>{" "}
                Your details are kept confidential.
              </p>
            </div>

            {/* Quick Contact Strip - Mobile Only */}
            <div className="mt-6 flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border border-pink-100 sm:hidden">
              <span className="text-xs font-semibold text-[#1e2f5f]">
                Quick Contact:
              </span>
              <div className="flex gap-3">
                <span className="text-xs text-pink-500">📞 +91 8884752134</span>
                <span className="text-xs text-pink-500">
                  ✉️ info@smilebabyivfs.in
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Right Column - Google Map (Unchanged) */}
          <div className="hidden lg:block relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>

            {/* Map Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15545.982464776807!2d80.15652359999999!3d13.067745350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae16e3ec67956d%3A0x6046a92e86e52565!2sSmile%20Baby%20IVF%20-%20Best%20IVF%20Centre%20In%20Bangalore%2C%20A%20Unit%20of%20K%20C%20Raju%20Multispeciality%20Hospital%2C%20Hennur%20Main%20Rd%2C%20below%20Fly%20Over%2C%20CMR%20Layout%2C%20Lingarajapuram%2C%20Bengaluru%2C%20Karnataka%20560084!3m2!1d13.0093271!2d77.6236431!5e0!3m2!1sen!2sin!4v1770877443204!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:block {
            display: none !important;
          }
        }

        @media (min-width: 1024px) {
          .lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
