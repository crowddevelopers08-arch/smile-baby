'use client'

import React from 'react';

export default function OurCommitment() {
  return (
    <section id='Planning-Visit' className="py-12 sm:py-14 md:py-16 px-4 sm:px-5 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Content (Desktop Layout) */}
          <div className="lg:block hidden lg:order-1">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-xs sm:text-sm font-semibold tracking-wider">
                Planning Visit
              </span>
            </div>

            {/* Main Heading - Desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2f5f] mb-4 sm:mb-5 md:mb-6 leading-tight">
              A Clear IVF <span className="text-pink-400">Roadmap</span> — Before You Start
            </h2>

            {/* Description - Desktop */}
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              This planning visit is for couples who want clarity before committing. You'll get:
            </p>

            {/* Deliverables List - Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
              {/* Column 1 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <svg 
                      width="12" 
                      height="12"  
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    Review of reports + medical history
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <svg 
                      width="12" 
                      height="12"  
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    Diagnosis confirmation and treatment recommendation
                  </span>
                </div>  
              </div>

              {/* Column 2 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <svg 
                      width="12" 
                      height="12"  
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    Expected visits and procedure flow explained
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <svg 
                      width="12" 
                      height="12"  
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    Transparent estimate: what's included + what may add on
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <button className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:gap-3 text-sm sm:text-base"onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
              Get Plan + Estimate on WhatsApp
              <svg 
                width="16" 
                height="16"  
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>

          {/* MOBILE/TABLET LAYOUT - Visible only below lg screens */}
          <div className="lg:hidden w-full">
            {/* Badge - Mobile */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-xs font-semibold tracking-wider">
                Planning Visit
              </span>
            </div>

            {/* Main Heading - Mobile */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2f5f] mb-4 leading-tight">
              A Clear IVF <span className="text-pink-400">Roadmap</span> — Before You Start
            </h2>

            {/* IMAGE - Mobile (Positioned BEFORE description and deliverables) */}
            <div className="relative flex items-center justify-center my-6">
              <div className="relative w-full max-w-md">
                <img 
                  src="/commitment-image.png" 
                  alt="Happy couple expecting a baby"
                  className="h-auto max-sm:max-h-[475px] sm:max-h-[800px] rounded-2xl object-cover shadow-lg"
                />
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-70"></div>
                <div className="absolute -z-10 -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>

            {/* Description - Mobile (NOW AFTER the image) */}
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              This planning visit is for couples who want clarity before committing. You'll get:
            </p>

            {/* Deliverables List - Mobile (NOW AFTER description) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {/* Column 1 */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    Review of reports + medical history
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    Diagnosis confirmation and treatment recommendation
                  </span>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    Expected visits and procedure flow explained
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    Transparent estimate: what's included + what may add on
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button - Mobile */}
            <button className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:gap-3 text-sm w-full sm:w-auto justify-center"onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
              Get Plan + Estimate on WhatsApp
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>

            {/* Mobile Stats Card */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-xs text-pink-600 font-semibold">1000+</p>
                <p className="text-xs text-gray-600">Planning Visits Done</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-xs text-pink-600 font-semibold">98%</p>
                <p className="text-xs text-gray-600">Found It Helpful</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image (DESKTOP ONLY) - Hidden on mobile/tablet */}
          <div className="hidden lg:flex relative items-center justify-center lg:order-2">
            <div className="relative w-full">
              <img 
                src="/commitment-image.png" 
                alt="Happy couple expecting a baby"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:hidden {
            display: block !important;
          }
          .hidden.lg\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}