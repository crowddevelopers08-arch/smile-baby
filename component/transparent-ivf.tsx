"use client";

// import React from 'react';

// export default function FunFacts() {
//   return (
//     <section className="py-16 px-6 bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Column - Content */}
//           <div className="relative">
//             {/* Decorative Pink Circle */}
//             <div className="absolute -top-8 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-40"></div>

//             {/* Badge */}
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
//               <span className="text-pink-400 uppercase text-sm font-semibold tracking-wider">Our Fun Facts</span>
//             </div>

//             {/* Main Heading */}
//             <h2 className="text-5xl font-bold text-[#1e2f5f] mb-6 leading-tight">
//               Numbers that reflect care <span className="text-pink-400">compassion!</span>
//             </h2>

//             {/* Description */}
//             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//               We don't just focus on numbers—we focus on people. Every milestone represents a family we've helped, a challenge we've overcome, and a journey we've shared with our patients.
//             </p>

//             {/* Image */}
//             <div className="rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
//                 alt="Happy family with baby"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Column - Image & Features */}
//           <div className="relative">
//             {/* Main Image */}
//             <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
//               <img
//                 src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80"
//                 alt="Parents looking at newborn babies"
//                 className="w-full h-auto object-cover"
//               />
//             </div>

//             {/* Feature Checkmarks */}
//             <div className='flex justify-between'>
//             <div className="space-y-4 mb-8">
//               <div className="flex items-center gap-3">
//                 <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
//                     <polyline points="20 6 9 17 4 12"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-700 font-medium text-lg">A legacy of trust & care</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
//                     <polyline points="20 6 9 17 4 12"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-700 font-medium text-lg">Cutting-edge fertility solutions</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
//                     <polyline points="20 6 9 17 4 12"/>
//                   </svg>
//                 </div>
//                 <span className="text-gray-700 font-medium text-lg">Transforming dreams into reality</span>
//               </div>
//             </div>
//             {/* Floating Circular Button */}
//             <div className="flex justify-end ">
//               <button className="group relative w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   {/* Circular Text */}
//                   <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
//                     <path
//                       id="circlePath"
//                       d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                       fill="none"
//                     />
//                     <text className="text-[10px] fill-white font-semibold tracking-wider">
//                       <textPath href="#circlePath" startOffset="0%">
//                         Book a Consultation • Book a Consultation •
//                       </textPath>
//                     </text>
//                   </svg>

//                   {/* Arrow Icon */}
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="relative z-10 group-hover:translate-y-1 transition-transform">
//                     <path d="M12 5v14M5 12l7 7 7-7"/>
//                   </svg>
//                 </div>
//               </button>
//             </div>
//             </div>

//             {/* Stats - 3 Columns */}
//             <div className="grid grid-cols-3 gap-8 mb-8">
//               <div>
//                 <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">15+</h3>
//                 <p className="text-gray-600 font-medium">Years Of Experience</p>
//               </div>
//               <div>
//                 <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">98%</h3>
//                 <p className="text-gray-600 font-medium">Patient Satisfaction</p>
//               </div>
//               <div>
//                 <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">1K+</h3>
//                 <p className="text-gray-600 font-medium">Happy Families</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

import React from "react";

export default function FunFacts() {
  return (
    <section id='transparent' className="py-16 max-sm:py-10 px-6 bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-sm:gap-6 gap-12">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Decorative Pink Circle */}
            <div className="absolute -top-8 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-40"></div>

            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-pink-400 uppercase text-sm font-semibold tracking-wider">
                IVF Pricing
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-4xl font-bold text-[#1e2f5f] mb-6 leading-tight">
              Transparent IVF Pricing —{" "}
              <span className="text-pink-400">What's Included vs Add-Ons</span>
            </h2>

            {/* Included Section */}
            <div className="mb-4">
              <h3 className="text-md md:text-lg font-bold text-[#1e2f5f] mb-3">
                Included (typical inclusions shown clearly):
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                Consultations • scans • injections • egg pickup • embryo
                transfer • basic lab charges (as applicable)
              </p>
            </div>

            {/* Add-ons Section */}
            <div className="mb-4">
              <h3 className="text-md md:text-lg font-bold text-[#1e2f5f] mb-3">
                Add-ons (only if medically required):
              </h3>
              <p className="text-gray-700 text-md leading-relaxed">
                ICSI • donor eggs/sperm • embryo freezing/storage • genetic
                testing (PGT) • additional procedures if needed
              </p>
            </div>

            {/* Finance Support */}
            <div className="mb-4">
              <h3 className="text-md md:text-lg font-bold text-[#1e2f5f] mb-4">
                Finance Support:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-5 md:h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-md md:text-lg">
                    Interest-free EMI options available
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-5 md:h-5 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">
                    Insurance guidance available (based on your policy)
                  </span>
                </div>
              </div>
            </div>

            {/* Micro-note */}
            <p className="text-sm text-gray-500 italic mb-3 ">
              We explain everything upfront so there are no surprises later.
            </p>

            {/* Image
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" 
                alt="Happy family with baby"
                className="w-full h-auto object-cover"
              />
            </div> */}
            {/* Stats - 3 Columns */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">
                  ₹1.8L+
                </h3>
                <p className="text-gray-600 font-medium">Starting Cost</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">0%</h3>
                <p className="text-gray-600 font-medium">Interest EMI</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#1e2f5f] mb-2">100%</h3>
                <p className="text-gray-600 font-medium">Transparent</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Features */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
              <img
                src="/fact-img-1.jpg"
                alt="Parents looking at newborn babies"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Feature Checkmarks */}
                          <div className="flex justify-between max-sm:mt-3 mt-15">
            <div className="space-y-4 ">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  No hidden costs or surprise charges
                </span>
              </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">
                    Clear breakdown of all costs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">
                    Flexible payment options available
                  </span>
                </div>
              </div>
                          {/* Floating Circular Button */}
            <div className="flex justify-end">
              <button className="group relative w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Circular Text */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9px] fill-white font-semibold tracking-wider">
                      <textPath href="#circlePath" startOffset="0%">
                        Request Estimate • Request Estimate • IVF Pricing • Adds
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Arrow Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="relative z-10 group-hover:translate-y-1 transition-transform">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </div>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
