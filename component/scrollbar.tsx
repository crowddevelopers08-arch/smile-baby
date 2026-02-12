"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed 
        bottom-15 right-4 
        sm:bottom-6 sm:right-6 
        md:bottom-8 md:right-8
        z-[9999]
        flex items-center justify-center
        rounded-full
        bg-pink-400
        hover:bg-gradient-to-br hover:from-[#2d3e7f] hover:via-[#354a8f] hover:to-[#3d4e8f]
        text-white
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
        w-10 h-10
        sm:w-12 sm:h-12
        md:w-14 md:h-14
      `}
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
