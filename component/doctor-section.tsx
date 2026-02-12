'use client'
import React, { useState, useEffect } from "react";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Fertility specialists",
      role: "(MBBS, MS OBG)",
      icon: "/insemination.png",
    },
    {
      name: "Fellowship-trained",
      role: "laparoscopic surgery expertise",
      icon: "/team-leadership.png",
    },
    {
      name: "Embryology lab team",
      role: "(MSc Embryology)",
      icon: "/woman-chemist.png",
    },
    {
      name: "Urology support",
      role: "(MCh Urology)",
      icon: "/nephrology.png",
    },
  ];

  const pinkFilter = "brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(1854%) hue-rotate(300deg) brightness(97%) contrast(93%)";

  // Carousel navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <div id="our-team" className="bg-white max-sm:pt-0 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 max-sm:mb-2 lg:mb-4 gap-6">
          <div className="max-w-xl">
            <p className="text-[#ec4899] text-sm font-semibold mb-3 uppercase tracking-wider flex items-center">
              <span className="inline-block w-2 h-2 bg-[#ec4899] rounded-full mr-2"></span>
              OUR TEAM
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2f5f] max-sm:mb-0 mb-4">
              A Complete Fertility Team —{" "}
              <span className="text-[#ec4899]">Not Just One Doctor</span>
            </h2>
          </div>

          {/* DESKTOP ONLY - Paragraph and Button */}
          <div className="hidden lg:block lg:ml-8 w-full lg:w-auto">
            <p className="text-gray-600mb-6 max-w-md text-sm sm:text-base mb-3">
              IVF success depends on the right diagnosis, the right lab work,
              and the right protocol — guided by experienced specialists.
            </p>
            <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center" onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
              Talk to Our IVF Team
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7l9.586 0 0 9.586"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 7L7 17"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-8 text-center">
              <h3 className="text-[#1e2f5f] font-bold text-xl mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{member.role}</p>
              <div className="flex justify-center items-center py-5">
                <img
                  src={member.icon}
                  alt={member.name}
                  className="w-20 h-20 object-contain"
                  style={{ filter: pinkFilter }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================== */}
        {/* MOBILE/TABLET LAYOUT - EXACT FLOW PRESERVED */}
        {/* =========================================== */}
        <div className="lg:hidden">
          
          {/* 1. HEADER - Badge + Heading (already above) */}
          
          {/* 2. PARAGRAPH - No button here */}
          <div className=" max-sm:mb-2 mb-6 w-full">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              IVF success depends on the right diagnosis, the right lab work,
              and the right protocol — guided by experienced specialists.
            </p>
          </div>

          {/* 3. CAROUSEL CARD */}
          <div className="relative px-2">
            <div className="py-6 px-4 text-center">
              <h3 className="text-[#1e2f5f] font-bold text-xl sm:text-2xl mb-2">
                {teamMembers[currentIndex].name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {teamMembers[currentIndex].role}
              </p>
              <div className="flex justify-center items-center py-6">
                <img
                  src={teamMembers[currentIndex].icon}
                  alt={teamMembers[currentIndex].name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                  style={{ filter: pinkFilter }}
                />
              </div>
            </div>
          </div>

          {/* 4. NAVIGATION ARROWS - Below carousel */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label="Previous team member" 
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#ec4899" 
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label="Next team member"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#ec4899" 
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* 5. DOTS INDICATOR - Below arrows */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentIndex === index ? (
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#ec4899] rounded-full shadow-lg shadow-pink-200"></div>
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#ec4899] rounded-full animate-ping opacity-30"></div>
                  </div>
                ) : (
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-pink-300 bg-white hover:bg-pink-100 transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* 6. SLIDE COUNTER - Below dots */}
          <div className="text-center text-sm text-gray-500 mt-3 mb-5">
            <span className="font-semibold text-[#ec4899]">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span className="text-gray-400">{teamMembers.length}</span>
          </div>

          {/* 7. BUTTON - At the bottom after counter */}
          <div className="w-full mt-2 mb-4">
            <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base w-full justify-center shadow-md" onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
              Talk to Our IVF Team
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7l9.586 0 0 9.586"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 7L7 17"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:grid {
            display: none;
          }
          .hidden.lg\\:block {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:hidden {
            display: none;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;