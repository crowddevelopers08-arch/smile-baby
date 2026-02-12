'use client'

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: 'What is included in the IVF package at Smile Baby IVF?',
      answer: 'We explain inclusions clearly—consultations, scans, procedures, and basic lab charges (as applicable). Your estimate is case-wise and transparent.'
    },
    {
      question: 'What extra costs can come in IVF?',
      answer: 'Add-ons like ICSI, embryo freezing, donor programs, or PGT may be required in some cases. We inform you upfront—no hidden surprises.'
    },
    {
      question: 'Are EMI options available?',
      answer: 'Yes. EMI / instalment support is available based on your plan.'
    },
    {
      question: 'Is insurance applicable for IVF?',
      answer: 'It depends on your insurance policy. Our team will guide you on what can be checked or claimed.'
    },
    {
      question: 'Will the same doctor handle my case throughout?',
      answer: 'Yes. Continuity of care is part of our approach—your case is guided consistently.'
    },
    {
      question: 'Is embryo freezing safe? Can it help for second baby planning?',
      answer: 'Yes. Freezing is a standard option and can help in planning future pregnancies, depending on your case.'
    },
    {
      question: 'What happens if a cycle doesn\'t work?',
      answer: 'We re-evaluate the case, review the response, and adjust the plan ethically before moving to the next step.'
    }
  ];

  const toggleFAQ = (index :any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-12 sm:py-14 md:py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1e2f5f] mb-4">
                Got Questions Before You Decide? We've Got Answers.
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e2f5f] mb-3 sm:mb-4">
                Got Questions Before You Decide? We've Got Answers.
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
            
            {/* Additional Contact CTA - Mobile Only */}
            <div className="lg:hidden bg-gradient-to-r from-[#ec4899]/10 to-[#1e2f5f]/10 rounded-xl p-4 sm:p-5 mt-4 sm:mt-6">
              <p className="text-[#1e2f5f] font-semibold text-sm sm:text-base mb-2">
                Still have questions?
              </p>
              <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto" onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
                Talk to Our Team
              </button>
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
    </div>
  );
};

export default FAQSection;