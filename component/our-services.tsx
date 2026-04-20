'use client'

import React from 'react';

const WorkProcessSection = () => {
  const processes = [
    {
      number: '1',
      title: 'Stimulation (Super Ovulation)',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/icons1.png?updatedAt=1773300922980',
      isImage: true
    },
    {
      number: '2',
      title: 'Egg Retrieval',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/icons2.png?updatedAt=1773300923181',
      isImage: true
    },
    {
      number: '3',
      title: 'Insemination',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/icons3.png?updatedAt=1773300923076',
      isImage: true
    },
    {
      number: '4',
      title: 'Embryo Culture',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/icons4.png?updatedAt=1773300922985',
      isImage: true
    },
    {
      number: '5',
      title: 'Embryo Transfer',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/icons5.png?updatedAt=1773300923100',
      isImage: true
    },
    {
      number: '6',
      title: 'Pregnancy Test',
      icon: 'https://ik.imagekit.io/tnvhh8yfa/public/pregnancy-test.png?updatedAt=1773300923084',
      isImage: true,
      mobileOnly: true // This will only show on mobile
    }
  ];

  // Single color filter for pink (#ec4899)
  const pinkFilter = "brightness(0) saturate(100%) invert(48%) sepia(86%) saturate(1854%) hue-rotate(300deg) brightness(97%) contrast(93%)";

  // Filter processes - show all on mobile, hide mobileOnly items on larger screens
  const visibleProcesses = processes.filter(item => {
    // On larger screens, hide items with mobileOnly flag
    if (typeof window !== 'undefined') {
      // This will be handled by CSS, but we'll keep the filter for initial render
      return true;
    }
    return true;
  });

  return (
    <div id='process' className="bg-gradient-to-b from-white to-blue-50/30 px-4 sm:px-6 lg:px-8 max-sm:pb-7 pb-13 md:mt-5">
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
            What the treatment journey looks like at Smile Baby
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 max-sm:gap-0 gap-8 lg:gap-6 max-sm:mb-4 mb-12">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className={`text-center ${process.mobileOnly ? 'sm:hidden' : ''}`}
            >
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
            You'll be guided step by step, with planned visits and clear instructions throughout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessSection;