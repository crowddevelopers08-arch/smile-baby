"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function FerlixHero() {
  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes imageSlideshow {
          0% {
            opacity: 1;
          }
          22% {
            opacity: 1;
          }
          27% {
            opacity: 0;
          }
          97% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .bg-image-1 {
          background-image: url('/medium-shot.jpg');
          animation: imageSlideshow 10s ease-in-out infinite;
          animation-delay: 0s;
        }

        .bg-image-2 {
          background-image: url('/mother-with.jpg');
          animation: imageSlideshow 20s ease-in-out infinite;
          animation-delay: 5s;
        }

        .bg-image-3 {
          background-image: url('/concept-protection.avif');
          animation: imageSlideshow 20s ease-in-out infinite;
          animation-delay: 10s;
        }

        .bg-image-4 {
          background-image: url('/baby-feet.jpg');
          animation: imageSlideshow 20s ease-in-out infinite;
          animation-delay: 15s;
        }

        @keyframes slideBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes floatCircle1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes floatCircle2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.15);
          }
        }

        @keyframes floatCircle3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 30px) scale(1.08);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 40px rgba(236, 72, 153, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 60px rgba(236, 72, 153, 0.5);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(5px);
          }
        }

        @keyframes playBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7),
                        0 0 0 0 rgba(236, 72, 153, 0.5),
                        0 0 0 0 rgba(236, 72, 153, 0.3);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(236, 72, 153, 0),
                        0 0 0 20px rgba(236, 72, 153, 0),
                        0 0 0 30px rgba(236, 72, 153, 0);
          }
        }

        .animate-slide-bg {
          background-size: 200% 200%;
          animation: slideBackground 20s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: floatCircle1 15s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: floatCircle2 18s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: floatCircle3 12s ease-in-out infinite;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover {
          animation: pulse 1.5s ease-in-out infinite;
          transform: translateY(-2px);
        }

        .btn-primary:hover::before {
          animation: shine 0.8s ease;
        }

        .btn-primary:hover .arrow-icon {
          animation: slideRight 0.6s ease-in-out infinite alternate;
        }

        .btn-video {
          transition: all 0.3s ease;
        }

        .btn-video:hover .play-circle {
          animation: ripple 1.5s ease-out infinite;
          background: linear-gradient(135deg, #ec4899, #f472b6);
        }

        .btn-video:hover .play-icon {
          animation: playBounce 0.6s ease-in-out infinite;
        }

        .btn-video:hover {
          transform: translateX(10px);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-3px) rotate(360deg);
          background: linear-gradient(135deg, #ec4899, #f472b6);
          color: white;
          border-color: transparent;
        }

        /* Mobile and Tablet Responsive Styles */
        @media (max-width: 1024px) {
          .bg-image-1, .bg-image-2, .bg-image-3, .bg-image-4 {
            background-position: center;
          }
        }

        @media (max-width: 768px) {
          .animate-float-1, .animate-float-2, .animate-float-3 {
            opacity: 0.4;
          }
        }

        @media (max-width: 640px) {
          .animate-float-1 {
            top: 10px;
            left: 10px;
            width: 200px;
            height: 200px;
          }
          
          .animate-float-2 {
            bottom: 10px;
            right: 10px;
            width: 250px;
            height: 250px;
          }
          
          .animate-float-3 {
            top: 30px;
            right: 20px;
            width: 150px;
            height: 150px;
          }
        }
      `}</style>

      {/* Top Contact Bar - Responsive */}
      <div className="bg-white px-4 sm:px-6 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View - Hidden on Mobile/Tablet */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-pink-400" />
                <span>+91 8884752134</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-pink-400" />
                <span>info@smilebabyivfs.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-pink-400" />
                <span>Hennur Main Road, Below Fly over Lingarajapuram,</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://x.com/Mangala_Devi"
                target="_blank"
                className="social-icon w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://www.instagram.com/smile_baby_ivf/"
                target="_blank"
                className="social-icon w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://in.pinterest.com/smilebabyivfbangalore/"
                target="_blank"
                className="social-icon w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49-.094-.806-.178-2.043.037-2.924.194-.832 1.249-5.295 1.249-5.295s-.319-.638-.319-1.58c0-1.479.858-2.583 1.927-2.583.908 0 1.347.681 1.347 1.498 0 .912-.581 2.275-.881 3.539-.251 1.061.532 1.926 1.578 1.926 1.893 0 3.349-1.996 3.349-4.876 0-2.548-1.831-4.333-4.444-4.333-3.028 0-4.807 2.271-4.807 4.617 0 .915.352 1.896.793 2.429a.32.32 0 01.074.306c-.081.336-.262 1.061-.298 1.209-.047.194-.153.236-.355.142-1.323-.616-2.149-2.548-2.149-4.103 0-3.341 2.427-6.409 7.004-6.409 3.676 0 6.532 2.619 6.532 6.118 0 3.652-2.303 6.593-5.5 6.593-1.074 0-2.083-.559-2.427-1.218l-.661 2.516c-.239.919-.888 2.071-1.322 2.773A9.996 9.996 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/SmileBabyIVF"
                target="_blank"
                className="social-icon w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.youtube.com/@SmilebabyIVF"
                target="_blank"
                className="social-icon w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Mobile/Tablet View - Hidden on Desktop */}
          <div className="flex lg:hidden flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={14} className="text-pink-400" />
                <span>+91 8884752134</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail size={14} className="text-pink-400" />
                <span className="hidden xs:inline">info@smilebabyivfs.in</span>
                <span className="xs:hidden">Email</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={14} className="text-pink-400" />
                <span className="hidden sm:inline">
                  123 High Street, London, W1, UK
                </span>
                <span className="sm:hidden">Hennur Main Road,</span>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <a
                href="https://x.com/Mangala_Devi"
                target="_blank"
                className="social-icon w-7 h-7 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Twitter size={12} />
              </a>
              <a
                href="https://www.instagram.com/smile_baby_ivf/"
                target="_blank"
                className="social-icon w-7 h-7 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Instagram size={12} />
              </a>
              <a
                href="https://in.pinterest.com/smilebabyivfbangalore/"
                target="_blank"
                className="social-icon w-7 h-7 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49-.094-.806-.178-2.043.037-2.924.194-.832 1.249-5.295 1.249-5.295s-.319-.638-.319-1.58c0-1.479.858-2.583 1.927-2.583.908 0 1.347.681 1.347 1.498 0 .912-.581 2.275-.881 3.539-.251 1.061.532 1.926 1.578 1.926 1.893 0 3.349-1.996 3.349-4.876 0-2.548-1.831-4.333-4.444-4.333-3.028 0-4.807 2.271-4.807 4.617 0 .915.352 1.896.793 2.429a.32.32 0 01.074.306c-.081.336-.262 1.061-.298 1.209-.047.194-.153.236-.355.142-1.323-.616-2.149-2.548-2.149-4.103 0-3.341 2.427-6.409 7.004-6.409 3.676 0 6.532 2.619 6.532 6.118 0 3.652-2.303 6.593-5.5 6.593-1.074 0-2.083-.559-2.427-1.218l-.661 2.516c-.239.919-.888 2.071-1.322 2.773A9.996 9.996 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/SmileBabyIVF"
                target="_blank"
                className="social-icon w-7 h-7 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Facebook size={12} />
              </a>
              <a
                href="https://www.youtube.com/@SmilebabyIVF"
                target="_blank"
                className="social-icon w-7 h-7 rounded-full border border-pink-300 flex items-center justify-center text-pink-400"
              >
                <Youtube size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Responsive */}
      <div className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl mx-2 sm:mx-3 lg:mx-4">
        {/* Background Images Slideshow - 4 Images */}
        <div className="absolute inset-0">
          <div
            className="bg-image-1 absolute inset-0 bg-cover bg-center will-change-opacity"
            style={{ transform: "translateZ(0)" }}
          ></div>
          <div
            className="bg-image-2 absolute inset-0 bg-cover bg-center will-change-opacity"
            style={{ transform: "translateZ(0)" }}
          ></div>
          <div
            className="bg-image-3 absolute inset-0 bg-cover bg-center will-change-opacity"
            style={{ transform: "translateZ(0)" }}
          ></div>
          <div
            className="bg-image-4 absolute inset-0 bg-cover bg-center will-change-opacity"
            style={{ transform: "translateZ(0)" }}
          ></div>
        </div>

        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e7f] via-[#354a8f] to-[#3d4e8f] opacity-[0.78]"></div>

        {/* Decorative Circles Pattern - Responsive */}
        <div className="absolute inset-0 opacity-[0.08] overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-40 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-80 lg:w-[500px] h-64 sm:h-80 lg:h-[500px] bg-white rounded-full blur-3xl animate-float-2"></div>
          <div className="absolute top-20 sm:top-40 right-20 sm:right-60 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-pink-300 rounded-full blur-2xl animate-float-3"></div>
        </div>

        {/* Navigation - Responsive */}
        <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="/smile-baby-logo.webp"
                  alt="Smile Baby IVF Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Desktop Menu - Hidden on Mobile/Tablet */}
              <div className="hidden lg:flex items-center gap-8">
                <a
                  href="#"
                  className="text-white hover:text-pink-300 transition flex items-center gap-1"
                >
                  Home
                </a>
                <a
                  href="#Planning-Visit"
                  className="text-white hover:text-pink-300 transition"
                >
                  About Us
                </a>
                <a
                  href="#our-team"
                  className="text-white hover:text-pink-300 transition"
                >
                  Our Team
                </a>
                <a
                  href="#process"
                  className="text-white hover:text-pink-300 transition"
                >
                  Process
                </a>
                <a
                  href="#transparent"
                  className="text-white hover:text-pink-300 transition flex items-center gap-1"
                >
                  Transparent
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-pink-300 transition"
                >
                  Contact Us
                </a>
              </div>

              {/* CTA Button - Hidden on Mobile */}
              <button
                className="hidden sm:flex btn-primary bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium shadow-lg text-sm sm:text-base"
                onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </button>

              {/* Mobile Menu Button - Visible only on Mobile */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => {
                  const section = document.getElementById("forms");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content - Responsive */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              {/* Welcome Badge */}
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
                <span className="text-pink-300 uppercase text-xs sm:text-sm font-semibold tracking-wider">
                  Welcome to Smile Baby IVF
                </span>
              </div>

              {/* Main Heading - Responsive Font Sizes */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Ready to Start IVF? Get a Clear Plan +{" "}
                <span className="text-pink-400">
                  Transparent Cost Breakdown
                </span>{" "}
                at Smile Baby IVF
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-5 sm:mb-6 lg:mb-8">
                If you've already tried medicines or IUI — or you've been told
                IVF may be needed — we'll help you understand the right
                protocol, realistic expectations, and the exact next steps for
                your case.
              </p>

              {/* Trust Chips Grid - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Affordable IVF planning (starting around ₹1.8L as per case)
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    10,000+ babies delivered / families supported
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    12 years of advanced fertility care
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    60–70% patients via referrals
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Transparent pricing — no hidden costs
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    EMI available • Insurance guidance
                  </span>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 col-span-1 sm:col-span-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Ethical donor programs available (if required)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form - Responsive */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 mx-0 sm:mx-2 lg:mx-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                Get IVF Plan & Case-Wise Estimate
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                Fill in your details and we'll get back to you
              </p>

              <form id="forms" className="space-y-3 sm:space-y-4">
                {/* Row 1: Full Name and Mobile Number - Stack on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp and Woman's Age - Stack on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Is this number on WhatsApp? *
                    </label>
                    <div className="flex gap-4 mt-1 sm:mt-3">
                      <label className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="whatsapp"
                          value="yes"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 focus:ring-pink-400"
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          Yes
                        </span>
                      </label>
                      <label className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="whatsapp"
                          value="no"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 focus:ring-pink-400"
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          No
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Woman's Age */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Woman's age bracket *
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition">
                      <option value="">Select age bracket</option>
                      <option value="<30">&lt;30</option>
                      <option value="30-34">30–34</option>
                      <option value="35-39">35–39</option>
                      <option value="40+">40+</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Trying Duration (Full Width) */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Trying for how long? *
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition">
                    <option value="">Select duration</option>
                    <option value="0-6">0–6 months</option>
                    <option value="6-12">6–12 months</option>
                    <option value="1-2">1–2 years</option>
                    <option value="2+">2+ years</option>
                  </select>
                </div>

                {/* Row 4: Callback Time (Full Width) */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred callback time *
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition">
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>

                {/* Primary CTA */}
                <button
                  type="submit"
                  className="btn-primary w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold shadow-xl text-sm sm:text-base lg:text-lg mt-3 sm:mt-4"
                >
                  Get Cost Breakdown on WhatsApp
                  <svg
                    className="arrow-icon inline-block ml-1 sm:ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>

                {/* Secondary CTA */}
                <div className="text-center">
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-600 font-medium text-xs sm:text-sm underline"
                  >
                    Book Treatment Planning Visit
                  </a>
                </div>

                {/* Microcopy */}
                <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
                  Privacy maintained. We follow ethical care and do not promise
                  guaranteed outcomes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
