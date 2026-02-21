"use client";

import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#ec4899] flex items-center justify-center shadow-lg shadow-[#ec4899]/30">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="36" height="36">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e2f5f] mb-3 leading-tight">
          Thank You for <span className="text-[#ec4899]">Reaching Out!</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
          We've received your fertility evaluation request. Our team will review your details and contact you shortly to confirm your consultation.
        </p>

        {/* Info cards */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="flex-1 bg-white rounded-2xl border border-pink-100 p-4 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-[#fff0f7] flex items-center justify-center mx-auto mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-[#1e2f5f] font-semibold text-sm">We'll call you</p>
            <p className="text-gray-400 text-xs mt-0.5">Within 24 hours</p>
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-pink-100 p-4 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-[#fff0f7] flex items-center justify-center mx-auto mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" width="18" height="18">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="text-[#1e2f5f] font-semibold text-sm">Fully confidential</p>
            <p className="text-gray-400 text-xs mt-0.5">Your details are private</p>
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-pink-100 p-4 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-[#fff0f7] flex items-center justify-center mx-auto mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" width="18" height="18">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <p className="text-[#1e2f5f] font-semibold text-sm">No pressure</p>
            <p className="text-gray-400 text-xs mt-0.5">Just honest guidance</p>
          </div>
        </div>

        {/* Back to home button */}
        <Link
          href="/smilebabyivf"
          className="inline-flex items-center gap-2 bg-[#1e2f5f] hover:bg-[#2d3e7f] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>

        {/* Privacy note */}
        <p className="text-gray-400 text-xs mt-6">
          Questions? Call us at{" "}
          <a href="tel:+91 8884752134" className="text-[#ec4899] font-semibold">
            +91 8884752134
          </a>
        </p>

      </div>
    </section>
  );
}