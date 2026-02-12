'use client'

import React from 'react';

const IVFProcessSection = () => {
  const processes = [
    {
      number: '1',
      title: 'Stimulation (Super Ovulation)',
      icon: '/icons1.png',
      isImage: true
    },
    {
      number: '2',
      title: 'Egg Retrieval',
      icon: '/icons2.png',
      isImage: true
    },
    {
      number: '3',
      title: 'Fertilization',
      icon: '/icons3.png',
      isImage: true
    },
    {
      number: '4',
      title: 'Embryo Culture',
      icon: '/icons4.png',
      isImage: true
    },
    {
      number: '5',
      title: 'Embryo Transfer',
      icon: '/icons5.png',
      isImage: true
    }
  ];

  // Single color filter for pink (#ec4899)
  const pinkFilter = "brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(1854%) hue-rotate(300deg) brightness(97%) contrast(93%)";

  return (
    <div id='process' className="bg-gradient-to-b from-white to-blue-50/30 px-4 sm:px-6 lg:px-8 max-sm:pb-7 pb-13">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-sm:mb-10 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <p className="text-pink-500 font-semibold text-lg">Our Work Process</p>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1e2f5f]">
            What IVF Looks Like at Smile Baby IVF
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 max-sm:gap-0 gap-8 lg:gap-6 max-sm:mb-4 mb-12">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              {/* Icon and Number Container */}
              <div className="relative inline-block mb-6">
                {/* Background Circle */}
                <div className="w-22 h-22 bg-white rounded-full shadow-lg flex items-center justify-center p-3">
                  {process.isImage ? (
                    <img 
                      src={process.icon} 
                      alt={process.title}
                      className="w-12 h-12 object-contain"
                      style={{ filter: pinkFilter }}
                    />
                  ) : (
                    process.icon
                  )}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-1 -left-2 w-8 h-8 bg-[#1e2f5f] text-white rounded-full flex items-center justify-center text-md font-bold shadow-lg">
                  {process.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[#1e2f5f] font-bold text-md mb-3">
                {process.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Reassurance Section */}
        <div className="items-center flex flex-wrap justify-around">
          <p className="text-gray-600 text-lg max-w-3xl items-left max-sm:mb-4">
            You'll be guided step-by-step, with planned visits and clear instructions throughout.
          </p>
          <button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl" onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
            Book Planning Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default IVFProcessSection;