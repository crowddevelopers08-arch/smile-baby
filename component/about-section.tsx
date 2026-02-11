import React from 'react';

export default function OurCommitment() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-sm font-semibold tracking-wider">Planning Visit</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl font-bold text-[#1e2f5f] mb-6 leading-tight">
              A Clear IVF <span className="text-pink-400">Roadmap</span> — Before You Start
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              This planning visit is for couples who want clarity before committing. You'll get:
            </p>

            {/* Deliverables List - 2 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Review of reports + medical history</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Diagnosis confirmation and treatment recommendation</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Personalised IVF protocol and timeline</span>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expected visits and procedure flow explained</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Transparent estimate: what's included + what may add on</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Safety planning based on your body and medical history</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:gap-3">
              Get Plan + Estimate on WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src="/commitment-image.png" 
              alt="Happy couple expecting a baby"
              className="h-190 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}