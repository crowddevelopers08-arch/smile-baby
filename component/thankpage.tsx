'use client'

import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-8 min-h-screen">
      <div className="max-w-7xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Elements - Adjusted for mobile */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-pink-400 rounded-full opacity-10 blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-400 rounded-full opacity-10 blur-2xl md:blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Success Icon - Smaller on mobile */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-18 md:h-18 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                {/* Pulse rings - Adjusted size */}
                <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-18 md:h-18 bg-pink-400 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-xs sm:text-sm font-semibold tracking-wider">Thank You</span>
            </div>

            {/* Main Heading - Responsive text sizes */}
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#1e2f5f] mb-4 sm:mb-5 md:mb-6 leading-tight">
              We've Received Your <span className="text-pink-400 block sm:inline">Request!</span>
            </h1>

            {/* Message - Adjusted padding */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2 sm:px-4 md:px-0 max-w-2xl mx-auto">
              Thank you for reaching out to Smile Baby IVF. Our team will review your details and get back to you shortly with your personalized IVF plan and cost estimate.
            </p>

            {/* Info Cards - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-9 md:mb-10">
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-pink-100">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <svg width="20" height="20"  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#1e2f5f] text-sm sm:text-base mb-1 sm:mb-2">Within 24 Hours</h3>
                <p className="text-xs sm:text-sm text-gray-600">We'll contact you for consultation</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-100">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#1e2f5f] text-sm sm:text-base mb-1 sm:mb-2">WhatsApp Update</h3>
                <p className="text-xs sm:text-sm text-gray-600">Get your estimate directly</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-pink-100 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#1e2f5f] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <svg width="20" height="20"  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#1e2f5f] text-sm sm:text-base mb-1 sm:mb-2">Confidential</h3>
                <p className="text-xs sm:text-sm text-gray-600">Your privacy is protected</p>
              </div>
            </div>

            {/* Next Steps - Responsive padding */}
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-7 md:mb-8 border border-pink-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">What Happens Next?</h3>
              <div className="space-y-2.5 sm:space-y-3 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">1</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">Our fertility specialist will review your case details</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">2</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">You'll receive a personalized IVF protocol and timeline</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">3</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">Get a transparent cost breakdown with EMI options</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Stack on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-5 sm:mb-6">
              <a href='/' className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Back to Home
              </a>

              <button className="group bg-[#25D366] text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            {/* Support Text */}
            <p className="text-xs sm:text-sm text-gray-500">
              Need immediate assistance? Call us at <a href="tel:+918884752134" className="text-pink-500 font-semibold whitespace-nowrap">+91 8884752134</a>
            </p>
          </div>
        </div>

        {/* Trust Indicators - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1e2f5f] mb-0.5 sm:mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1e2f5f] mb-0.5 sm:mb-1">10K+</div>
            <div className="text-xs sm:text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1e2f5f] mb-0.5 sm:mb-1">98%</div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#1e2f5f] mb-0.5 sm:mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Transparent</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}