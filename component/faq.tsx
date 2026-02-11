'use client'

// import React, { useState } from 'react';

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(0); // First item open by default

//   const faqs = [
//     {
//       question: 'What should I bring to my first appointment?',
//       answer: 'Please bring a valid ID, your insurance card, a list of current medications, and any relevant medical records or test results from previous fertility treatments. We also recommend bringing a list of questions you\'d like to discuss with your doctor.'
//     },
//     {
//       question: 'How do I schedule an appointment?',
//       answer: 'You can schedule an appointment by calling our office directly, using our online booking system, or by clicking the "Book Planning Visit" button on our website. Our scheduling team will help you find a convenient time that works for you.'
//     },
//     {
//       question: 'What insurance plan do you accept?',
//       answer: 'We accept most major insurance plans and will work with you to maximize your coverage. Our billing team can verify your benefits and explain your out-of-pocket costs before you begin treatment. We also offer flexible payment plans for services not covered by insurance.'
//     },
//     {
//       question: 'Can I get a prescription refill without an appointment?',
//       answer: 'For ongoing fertility medications, we can arrange refills through your patient portal or by calling our pharmacy line. However, new prescriptions or changes to your treatment protocol will require a consultation with your doctor to ensure the best care.'
//     },
//     {
//       question: 'What should I expect during my first visit?',
//       answer: 'Your first visit will include a comprehensive consultation with one of our fertility specialists, a review of your medical history, and a discussion of your fertility goals. We may also perform initial diagnostic tests and create a personalized treatment plan tailored to your needs.'
//     },
//     {
//       question: 'How are treatment plans customized for individual needs?',
//       answer: 'Every patient is unique, and so is every treatment plan. We consider your medical history, age, fertility test results, and personal preferences to create a customized approach. Your plan may be adjusted throughout your journey based on your progress and response to treatment.'
//     }
//   ];

//   const toggleFAQ = (index:any ) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/30 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Left Side - Header and Emergency Contact */}
//           <div>
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-4">
//                 <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <p className="text-[#ec4899] font-semibold text-lg">Frequently Asked Questions</p>
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-[#1e2f5f] mb-4">
//                 Helping you understand healthcare
//               </h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
//               </p>
//             </div>

//             {/* Grid Layout Section */}
//             <div className="grid grid-cols-5 grid-rows-5 gap-2 h-96">
//               {/* Div 1 */}
//               <div className="col-span-2 row-span-6 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop" 
//                   alt="Medical consultation"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Div 3 */}
//               <div className="col-span-2 row-span-3 col-start-3 bg-gradient-to-br from-[#1e2f5f] to-[#2d3e6f] rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop" 
//                   alt="Healthcare professional"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Div 4 */}
//               <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop" 
//                   alt="Medical equipment"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - FAQ Accordion */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-[#1e2f5f] font-semibold text-lg pr-4">
//                     {faq.question}
//                   </span>
//                   <svg
//                     className={`w-6 h-6 text-[#1e2f5f] flex-shrink-0 transition-transform duration-300 ${
//                       openIndex === index ? 'rotate-180' : ''
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="px-6 pb-6 pt-0">
//                     <p className="text-gray-600 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;


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

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header and Emergency Contact */}
          <div>
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

            {/* Grid Layout Section */}
            <div className="grid grid-cols-7 grid-rows-6 gap-2 h-[350px]">
              {/* Div 1 - Larger left area */}
              <div className="col-span-4 row-span-6 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop" 
                  alt="Medical consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 3 - Top right */}
              <div className="col-span-3 row-span-3 col-start-5 bg-gradient-to-br from-[#1e2f5f] to-[#2d3e6f] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop" 
                  alt="Healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Div 4 - Bottom right */}
              <div className="col-span-3 row-span-3 col-start-5 row-start-4 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop" 
                  alt="Medical equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#1e2f5f] font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#1e2f5f] flex-shrink-0 transition-transform duration-300 ${
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
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

