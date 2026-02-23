
"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Play,
  X,
} from "lucide-react";
import SmileBabyFormed from "./ivf-contact-form";
// import SmileBabyForm from "../contact-froms";

interface imgse{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// Modal wrapper component
const BookingModal = ({ isOpen, onClose, children } : imgse) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 popup-overlay">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all"
        >
          <X size={20} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function FerlixHeros() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .popup-overlay {
          animation: fadeIn 0.3s ease-out;
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

      {/* Video Popup */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 popup-overlay">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoPopupOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
            >
              <X size={20} />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="/smile-babys.mp4"
                title="Smile Baby IVF Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e7f] via-[#354a8f] to-[#3d4e8f] opacity-[0.74]"></div>
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
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Appointment
              </button>

              {/* Mobile Menu Button - Visible only on Mobile */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => {
                  // Open mobile menu or scroll
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-8 lg:gap-12 items-start lg:items-center">
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
               Not Sure If You Need IVF? Star{" "}
                <span className="text-pink-400">
                 With a Fertility Evaluation 
                </span>{" "}
               at Smile Baby IVF
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-5 sm:mb-6 lg:mb-8">
                If you’re trying for months/years and feeling confused about the next step, our doctor-led evaluation helps you understand whether lifestyle changes, medicines, IUI, or IVF is right for your case.
              </p>

              {/* Trust Chips Grid - Responsive Grid */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
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
                    10,000+ babies born
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
                   80% patients via referrals
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
                   Interest-free EMI + Insurance support
                  </span>
                </div>
              </div> */}
              {/* Trust Chips Grid - Responsive Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
  {/* First 3 items - visible on all screens */}
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
      10,000+ babies born
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
      80% patients via referrals
    </span>
  </div>

  {/* Last 2 items - hidden on mobile, visible on sm and above */}
  <div className="hidden sm:flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
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

  <div className="hidden sm:flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 col-span-1 sm:col-span-2">
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
      Interest-free EMI + Insurance support
    </span>
  </div>
</div>
            </div>

            {/* Right Column - Video Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 mx-0 sm:mx-2 lg:mx-0 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                Watch Our Success Story
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6">
                See how we've helped thousands of families achieve their dream
              </p>

              {/* Video Thumbnail with Play Button */}
              <div 
                className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group mb-4"
                onClick={() => setIsVideoPopupOpen(true)}
              >
                <img 
                  src="/image-smile.png" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-600 shadow-xl">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    Real patient success stories and journeys
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    Expert doctors explain the IVF process
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    Latest technology and treatment options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal with Form */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
      >
        <SmileBabyFormed />
      </BookingModal>
    </div>
  );
}