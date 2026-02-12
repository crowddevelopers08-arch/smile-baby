'use client'

import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
    const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section - Responsive */}
      <div className="bg-gradient-to-r from-[#1e2f5f] to-[#2d4a7f] text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
            <span className="text-pink-300 uppercase text-xs sm:text-sm font-semibold tracking-wider">Legal</span>
          </div>

          {/* Heading - Responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Privacy <span className="text-pink-400 block sm:inline">Policy</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5 sm:mb-6 px-4 sm:px-6 md:px-0 max-w-3xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>

          {/* Last Updated */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <svg width="14" height="14"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="text-xs sm:text-sm">Last Updated: February 12, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content - Responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        {/* Quick Links Navigation - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 mb-8 sm:mb-10 md:mb-12 border border-pink-100">
          <h3 className="font-bold text-[#1e2f5f] mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
            <svg width="18" height="18"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            Quick Navigation
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href="#information-collection" className="text-pink-500 hover:text-pink-600 text-xs sm:text-sm font-medium hover:underline">Information We Collect</a>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <a href="#how-we-use" className="text-pink-500 hover:text-pink-600 text-xs sm:text-sm font-medium hover:underline">How We Use Data</a>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <a href="#data-sharing" className="text-pink-500 hover:text-pink-600 text-xs sm:text-sm font-medium hover:underline">Data Sharing</a>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <a href="#your-rights" className="text-pink-500 hover:text-pink-600 text-xs sm:text-sm font-medium hover:underline">Your Rights</a>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <a href="#contact" className="text-pink-500 hover:text-pink-600 text-xs sm:text-sm font-medium hover:underline">Contact Us</a>
          </div>
        </div>

        {/* Introduction - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">Introduction</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                At Smile Baby IVF, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access our website or use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect - Responsive */}
        <div id="information-collection" className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20"  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-4 sm:mb-5">Information We Collect</h2>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#1e2f5f] mb-3 mt-4 sm:mt-5">Personal Information</h3>
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {[
                  "Name, email address, phone number, and contact details",
                  "Medical history and health information (for treatment purposes)",
                  "Age, date of birth, and demographic information",
                  "Payment and billing information"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#1e2f5f] mb-3 mt-5 sm:mt-6">Automatically Collected Information</h3>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  "IP address, browser type, and device information",
                  "Usage data and analytics (pages visited, time spent, etc.)",
                  "Cookies and similar tracking technologies"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Your Information - Responsive */}
        <div id="how-we-use" className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-4 sm:mb-5">How We Use Your Information</h2>
              
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  "To provide and improve our fertility treatment services",
                  "To communicate with you about appointments, treatment plans, and cost estimates",
                  "To process payments and manage billing",
                  "To send educational content and updates about fertility care (with your consent)",
                  "To comply with legal obligations and protect our legal rights",
                  "To analyze and improve our website and services"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing - Responsive */}
        <div id="data-sharing" className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">Data Sharing and Disclosure</h2>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                {[
                  "Healthcare Providers: With your consent, we may share medical information with laboratories, specialists, or partner clinics necessary for your treatment",
                  "Service Providers: Trusted third-party vendors who assist us (payment processors, email services, analytics providers) under strict confidentiality agreements",
                  "Legal Compliance: When required by law, court order, or to protect our rights and safety"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700"><span className="font-semibold">{text.split(':')[0]}:</span>{text.split(':')[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights - Responsive */}
        <div id="your-rights" className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-4 sm:mb-5">Your Privacy Rights</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Access & Correction", desc: "You have the right to access and update your personal information at any time", color: "pink" },
                  { title: "Data Deletion", desc: "You can request deletion of your personal data (subject to legal retention requirements)", color: "blue" },
                  { title: "Marketing Opt-Out", desc: "Unsubscribe from marketing communications at any time via the link in our emails", color: "pink" },
                  { title: "Data Portability", desc: "Request a copy of your personal data in a portable format", color: "blue" }
                ].map((item, index) => (
                  <div key={index} className={`bg-${item.color}-50 rounded-lg p-3 sm:p-4 border border-${item.color}-100`}>
                    <h4 className="font-bold text-[#1e2f5f] mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-700 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Security - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#1e2f5f] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">Data Security</h2>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information, including:
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "SSL/TLS encryption",
                  "Secure data storage",
                  "Access controls",
                  "Regular security audits"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home - Responsive */}
        <div className="text-center mt-10 sm:mt-12">
          <button 
            onClick={() => router.push("/")} 
            className="group bg-gradient-to-r from-[#1e2f5f] to-[#2d4a7f] text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 mx-auto text-sm sm:text-base" >
            <svg width="18" height="18"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}