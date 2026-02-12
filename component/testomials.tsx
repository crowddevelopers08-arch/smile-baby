'use client'

import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: 'Shaista Amreen',
      initials: 'SA',
      role: 'Patient',
      testimonial: 'Nine months of my pregnancy could have been a nightmare without your medical supervision. Thanks for making my journey to become a mommy nothing less than a dream come true.'
    },
    {
      name: 'Nayana',
      initials: 'NY',
      role: 'Patient',
      testimonial: 'I am very satisfied, took treatment for fertility and under one cycle of iui now my pregnancy is confirmed, doctor communication is very good with the patients.'
    },
    {
      name: 'Joyful moment',
      initials: 'JM',
      role: 'Patient',
      testimonial: 'Doctor Mangala is a very good doctor who does not round up your head but says what is the problem you have and provide right treatment with good care. Now my girl is two years and I am happy.'
    },
    {
      name: 'New Parents',
      initials: 'NP',
      role: 'Patient',
      testimonial: "I don't know actually how to begin to thank you, as you have being the main and only source for bringing in and giving me the feeling of motherhood, which I once upon thought will never be possible."
    },
    {
      name: 'Happy mother',
      initials: 'HM',
      role: 'Patient',
      testimonial: 'You not only advised me in every step of my pregnancy but also guided me as to how I should go about everything, as most people say that a doctors comforting words are sometimes more powerful than medicines.'
    }
  ];

  // Generate unique colors for each testimonial
  const colors = [
    'bg-gradient-to-br from-pink-500 to-rose-500',
    'bg-gradient-to-br from-blue-500 to-indigo-500',
    'bg-gradient-to-br from-purple-500 to-violet-500',
    'bg-gradient-to-br from-emerald-500 to-teal-500',
    'bg-gradient-to-br from-orange-500 to-amber-500'
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-play carousel on mobile/tablet
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, testimonials.length]);

  // For mobile: single testimonial, for desktop: two testimonials
  const currentTestimonials = isMobile 
    ? [testimonials[activeSlide]]
    : [testimonials[activeSlide], testimonials[(activeSlide + 1) % testimonials.length]];

  // Navigation functions for mobile
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideLeft {
          animation: slideLeft 0.4s ease-out;
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideRight {
          animation: slideRight 0.4s ease-out;
        }

        @media (max-width: 1023px) {
          .bg-fixed {
            background-attachment: scroll;
          }
        }
      `}</style>
      
      <div className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center lg:bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url('/humans.jpg')`
          }}
        ></div>
        
        {/* Cyan Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e7f] via-[#354a8f] to-[#3d4e8f] opacity-[0.78]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header - Responsive */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
              Real Stories. <span className="text-pink-400">Real Journeys.</span> 
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              IVF is a trust decision. Explore patient experiences and testimonials before you decide.
            </p>
          </div>

          {/* DESKTOP LAYOUT - Two Columns (Unchanged - lg and above) */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {currentTestimonials.map((testimonial, index) => {
              const testimonialIndex = testimonials.findIndex(t => t.name === testimonial.name);
              return (
                <div 
                  key={`${activeSlide}-${index}`} 
                  className="text-center animate-fadeIn"
                >
                  {/* Avatar with Initials */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-full border-4 border-white shadow-xl transform transition-transform duration-300 hover:scale-110 flex items-center justify-center ${colors[testimonialIndex]}`}>
                        <span className="text-white text-4xl font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    {testimonial.role}
                  </p>

                  {/* Testimonial Text */}
                  <p className="text-white/90 italic leading-relaxed text-lg">
                    {testimonial.testimonial}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =========================================== */}
          {/* MOBILE/TABLET LAYOUT - Single Testimonial Carousel */}
          {/* =========================================== */}
          <div className="lg:hidden">
            {/* Single Testimonial Card */}
            <div className="max-w-2xl mx-auto px-2 sm:px-4">
              {currentTestimonials.map((testimonial, index) => {
                const testimonialIndex = testimonials.findIndex(t => t.name === testimonial.name);
                return (
                  <div 
                    key={`mobile-${activeSlide}`} 
                    className="text-center animate-fadeIn bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
                  >
                    {/* Avatar with Initials - Smaller on mobile */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="relative">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-3 sm:border-4 border-white shadow-xl flex items-center justify-center ${colors[testimonialIndex]}`}>
                          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                            {testimonial.initials}
                          </span>
                        </div>
                        
                        {/* Decorative Quote Icon */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-pink-300 text-xs sm:text-sm mb-4 sm:mb-6">
                      {testimonial.role}
                    </p>

                    {/* Testimonial Text */}
                    <p className="text-white/95 italic leading-relaxed text-sm sm:text-base md:text-lg">
                      "{testimonial.testimonial}"
                    </p>

                    {/* Rating Stars - Added for visual appeal */}
                    <div className="flex justify-center gap-1 mt-4 sm:mt-6">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows - For Mobile/Tablet */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-6">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-white/30"
                aria-label="Previous testimonial"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2.5"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button 
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 border border-white/30"
                aria-label="Next testimonial"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2.5"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Pagination Dots - Responsive */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className="group relative"
                aria-label={`Slide ${index + 1}`}
              >
                {activeSlide === index ? (
                  // Active dot - Diamond shape with pulse
                  <div className="relative">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white transform rotate-45 animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white/30 transform rotate-45 scale-150 animate-ping"></div>
                  </div>
                ) : (
                  // Inactive dot - Circle with hover effect
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/40 rounded-full transition-all duration-300 group-hover:bg-white/70 group-hover:scale-125"></div>
                )}
              </button>
            ))}
          </div>
        </div>    
      </div>
    </>
  );
};

export default TestimonialsSection;