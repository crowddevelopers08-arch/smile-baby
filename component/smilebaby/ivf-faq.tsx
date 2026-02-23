'use client'

import React, { useState } from 'react';

const FAQSections = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: 'How do we know if we actually need IVF or if IUI/medicines are enough?',
      answer: "That's exactly what the evaluation is for. Based on your age, reports, and how long you've been trying, the doctor explains whether lifestyle support, medicines, IUI, or IVF fits best."
    },
    {
      question: "We've been trying naturally for months/years—when should we meet a fertility specialist?",
      answer: "If it's taking longer than expected, it's better to get checked early. A fertility evaluation gives clarity and prevents losing valuable time."
    },
    {
      question: 'What basic tests are done in the first consultation for both husband and wife?',
      answer: "Usually, the wife may need an ultrasound and basic blood tests, and the husband may need a semen analysis. The doctor will advise what's necessary for your case."
    },
    {
      question: 'What is the difference between ovulation induction, IUI and IVF?',
      answer: 'Ovulation induction helps egg release, IUI places prepared sperm into the uterus, and IVF involves fertilising eggs in the lab and transferring the embryo. The right option depends on diagnosis.'
    },
    {
      question: 'How many IUIs should we try before IVF?',
      answer: 'It depends on age and diagnosis. Some couples try a few IUIs first, but IVF may be recommended earlier in certain cases.'
    },
    {
      question: 'Can delaying treatment by 1–2 years reduce chances?',
      answer: 'Yes—especially as age increases. A timely evaluation helps you make the right decision with clarity.'
    }
  ];

  const toggleFAQ = (index :any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-4 sm:py-14 md:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* =========================================== */}
          {/* DESKTOP LAYOUT - Left Side - Header and Grid (Unchanged) */}
          {/* =========================================== */}
          <div className="hidden lg:block">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#ec4899] font-semibold text-lg">Frequently Asked Questions</p>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-[#1e2f5f] mb-4">
               Got Questions?{" "}
          <span style={{ color: "#ec4899" }}> We've Got</span>{" "} Answers.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
              </p>
            </div>

            {/* Desktop Grid Layout Section - Unchanged */}
            <div className="grid grid-cols-7 grid-rows-6 gap-2 h-[350px]">
              {/* Div 1 - Larger left area */}
              <div className="col-span-4 row-span-6 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop" 
                  alt="Medical consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 2 - Top right */}
              <div className="col-span-3 row-span-3 col-start-5 bg-gradient-to-br from-[#1e2f5f] to-[#2d3e6f] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop" 
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 3 - Bottom right */}
              <div className="col-span-3 row-span-3 col-start-5 row-start-4 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop" 
                  alt="Medical equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =========================================== */}
          {/* MOBILE/TABLET LAYOUT - Left Side - Header and ORIGINAL GRID IMAGE */}
          {/* =========================================== */}
          <div className="lg:hidden">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#ec4899] font-semibold text-base sm:text-lg">Frequently Asked Questions</p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">
                Got Questions?{" "}
          <span style={{ color: "#ec4899" }}> We've Got</span>{" "} Answers.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
              </p>
            </div>

            {/* MOBILE/TABLET - ORIGINAL GRID LAYOUT (Adapted for smaller screens) */}
            <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[300px] sm:h-[350px] md:h-[400px] mb-8 sm:mb-10">
              {/* Div 1 - Larger left area - Takes 2 columns, full height */}
              <div className="col-span-2 row-span-4 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop" 
                  alt="Medical consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 2 - Top right - Takes 1 column, 2 rows */}
              <div className="col-span-1 row-span-2 col-start-3 bg-gradient-to-br from-[#1e2f5f] to-[#2d3e6f] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop" 
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 3 - Bottom right - Takes 1 column, 2 rows */}
              <div className="col-span-1 row-span-2 col-start-3 row-start-3 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop" 
                  alt="Medical equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =========================================== */}
          {/* Right Side - FAQ Accordion - Fully Responsive */}
          {/* =========================================== */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#1e2f5f] font-semibold text-sm sm:text-base md:text-lg pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#ec4899] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
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

export default FAQSections;