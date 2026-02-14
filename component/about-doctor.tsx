'use client'
import React from 'react';

const MeetDoctorSection = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden max-sm:mb-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* DESKTOP LAYOUT - Left Side - Doctor Image (Unchanged) */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/doctors.avif" 
                alt="Dr. Mangala Devi K R"
                className="w-full h-[650px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2f5f]/80 via-transparent to-transparent"></div>
              
              {/* Doctor Name Badge at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1e2f5f] mb-2">
                    Dr. Mangala Devi K R
                  </h3>
                  <p className="text-[#ec4899] font-semibold text-lg">
                    MBBS, MS (OBG)
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Certified Fertility Specialist (NUHS, Singapore)
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Reg No. 65809
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ec4899] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1e2f5f] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* =========================================== */}
          {/* MOBILE/TABLET LAYOUT - Complete Restructured */}
          {/* =========================================== */}
          <div className="lg:hidden w-full">
            {/* Heading - At the top for mobile */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2f5f]">
                Meet Dr. Mangala Devi K R
              </h2>
            </div>

            {/* Doctor Image - Full width with integrated badge */}
            <div className="relative mb-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img 
                  src="/doctors.avif" 
                  alt="Dr. Mangala Devi K R"
                  className="w-full h-[450px] sm:h-[450px] md:h-[600px] object-cover object-center"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2f5f]/90 via-transparent to-transparent"></div>
                
                {/* Doctor Name Badge - Simplified for mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e2f5f] mb-1">
                      Dr. Mangala Devi K R
                    </h3>
                    <p className="text-[#ec4899] font-semibold text-sm sm:text-base md:text-lg">
                      MBBS, MS (OBG)
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                      Certified Fertility Specialist (NUHS, Singapore)
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      Reg No. 65809
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Scaled down for mobile */}
              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#ec4899] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 bg-[#1e2f5f] rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Qualifications - Grid layout for mobile */}
            <div className="flex-wrap flex gap-1 mb-6">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-sm sm:text-base">MBBS, MS (OBG)</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-sm sm:text-base">Fertility Specialist</p>
                  <p className="text-gray-600 text-xs sm:text-sm">(NUHS, Singapore)</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-sm sm:text-base">Registration No.</p>
                  <p className="text-gray-600 text-xs sm:text-sm">65809</p>
                </div>
              </div> */}
            </div>

            {/* Doctor Bio - Simplified card for mobile */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Dr. Mangala Devi K R is a consultant obstetrician, gynaecologist, and fertility specialist focused on ethical, personalised IVF planning. Known for clear communication and patient-first care, she guides couples through the process with continuity and transparency.
              </p>
            </div>

            {/* CTA Button - Full width on mobile, centered on tablet */}
            <div className="flex justify-center">
              <button className="w-full sm:w-auto bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3 justify-center text-sm sm:text-base"
              onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Consult Dr. Mangala Devi
              </button>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Right Side - Content (Unchanged) */}
          <div className="hidden lg:block">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#1e2f5f] mb-6">
                Meet Dr. Mangala Devi K R
              </h2>
            </div>

            {/* Qualifications */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-lg">MBBS, MS (OBG)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-lg">Certified Fertility Specialist</p>
                  <p className="text-gray-600">(NUHS, Singapore)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1e2f5f] font-semibold text-lg">Registration No. 65809</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-lg">
                Dr. Mangala Devi K R is a consultant obstetrician, gynaecologist, and fertility specialist focused on ethical, personalised IVF planning. Known for clear communication and patient-first care, she guides couples through the process with continuity and transparency.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consult Dr. Mangala Devi
            </button>
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
    </div>
  );
};

export default MeetDoctorSection;