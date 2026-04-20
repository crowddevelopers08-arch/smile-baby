"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
        const router = useRouter();
  return (
    <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span className="text-pink-400 uppercase text-sm font-semibold tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2f5f] mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: June 2025</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 divide-y divide-gray-100">

          {/* Section 1 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">1</span>
              Information We Collect
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We collect your name, email, phone number, and any details you voluntarily provide through our forms or consultations. We do not collect sensitive medical records without your explicit consent.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">2</span>
              How We Use Your Informations
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your information is used solely to contact you regarding your appointment, treatment enquiries, and follow-ups. We do not use your data for unsolicited marketing or share it with third parties for advertising purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">3</span>
              Data Sharing
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We do not sell, trade, or rent your personal information to anyone. Your data may only be shared with our internal medical team directly involved in your care.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">4</span>
              Data Security
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We take reasonable steps to protect your information from unauthorised access, misuse, or disclosure. All form submissions are handled over secure connections.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">5</span>
              Your Rights
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You may request to view, update, or delete your personal data at any time by contacting us directly. We will respond within a reasonable timeframe.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">6</span>
              Cookies
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our website may use basic cookies to improve your browsing experience. No personal data is stored through cookies without your knowledge.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#1e2f5f] mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-bold">7</span>
              Changes to This Policy
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update this policy occasionally. Any changes will be reflected on this page with the updated date. Continued use of our services implies acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-8 flex items-start gap-3 bg-pink-50 rounded-xl p-5 border border-pink-200">
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="#ec4899" strokeWidth="2" className="flex-shrink-0 mt-0.5"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-pink-500">Questions about your data?</span>{" "}
            Contact us at{" "}
             or call{" "}
            <a href="tel:+918884752134" className="text-[#1e2f5f] font-semibold underline underline-offset-2">
              +91 8884752134
            </a>.
          </p>
        </div>
            <div className="text-center mt-10 sm:mt-12">
          <button 
            onClick={() => router.push("/smilebabyevaluation")} 
            className="group bg-gradient-to-r from-[#1e2f5f] to-[#2d4a7f] text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 mx-auto text-sm sm:text-base" >
            <svg width="18" height="18"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}