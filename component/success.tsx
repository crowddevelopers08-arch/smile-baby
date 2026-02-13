'use client'
import React from "react";

const SuccessRatesSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl max-sm:pl-0 max-sm:pr-0 p-8 border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon Section */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#ec4899]/10 rounded-full p-4">
                <svg
                  className="w-12 h-12 text-[#ec4899]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl lg:text-4xl font-bold text-[#1e2f5f] mb-6">
              Responsible Success Rates —{" "}
              <span className="text-pink-400">No False Promises </span>
            </h2>

            {/* Body Copy */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-md lg:text-lg">
                Success depends on age, diagnosis, medical history, and embryo
                quality. We explain what "success rate" means for your case and
                recommend the safest approach — without overpromising.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-[#ec4899]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#1e2f5f] font-semibold text-lg mb-1">
                      Individual Assessment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Personalized evaluation based on your unique case
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-[#ec4899]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#1e2f5f] font-semibold text-lg mb-1">
                      Transparent Communication
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Clear explanations without unrealistic expectations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-[#ec4899]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#1e2f5f] font-semibold text-lg mb-1">
                      Ethical Practice
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Safest approach tailored to your medical needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#ec4899]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-[#ec4899]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#1e2f5f] font-semibold text-lg mb-1">
                      Evidence-Based
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Decisions guided by medical science and data
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-5">
              <p className="text-gray-500 text-sm italic">
                * Results vary by individual case. We do not guarantee outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessRatesSection;
