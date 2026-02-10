import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function FerlixHero() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Contact Bar */}
      <div className="bg-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-pink-400" />
              <span>+91-258-8520</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-pink-400" />
              <span>info@domainname.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-pink-400" />
              <span>123 High Street, London, W1, UK</span>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.188 8.188h-1.5c-.188 0-.375.188-.375.375v1.125h1.875l-.188 1.875h-1.688v5.438h-2.25v-5.438h-1.5v-1.875h1.5v-1.313c0-1.5.938-2.438 2.438-2.438h1.688v1.875z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition">
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[700px] overflow-hidden rounded-3xl mx-4 mt-4">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect fill="%232d3e7f" width="1600" height="900"/><g opacity="0.15"><circle cx="400" cy="300" r="200" fill="%23fff"/><circle cx="1000" cy="500" r="300" fill="%23fff"/><circle cx="1400" cy="200" r="150" fill="%23fff"/></g></svg>')`,
          }}
        >
          {/* Navy Blue Overlay with Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d3e7f] via-[#3d4e8f] to-[#2d3e7f] opacity-95"></div>
          
          {/* Decorative Circles Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-60 w-64 h-64 bg-pink-300 rounded-full blur-2xl"></div>
          </div>

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Ferlix.</span>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-white hover:text-pink-300 transition flex items-center gap-1">
                Home <span className="text-xs">▼</span>
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition">About Us</a>
              <a href="#" className="text-white hover:text-pink-300 transition">Services</a>
              <a href="#" className="text-white hover:text-pink-300 transition">Blog</a>
              <a href="#" className="text-white hover:text-pink-300 transition flex items-center gap-1">
                Pages <span className="text-xs">▼</span>
              </a>
              <a href="#" className="text-white hover:text-pink-300 transition">Contact Us</a>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition flex items-center gap-2 shadow-lg">
              Book An Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-20 text-center">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <span className="text-pink-300 uppercase text-sm font-semibold tracking-wider">Welcome to Ferlix</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Helping you build of the<br />
            family of your <span className="text-pink-400">dreams!</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
            We provide expert fertility care, advanced treatments, and compassionate support<br />
            to help you achieve your dream of parenthood.
          </p>

          {/* Features */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-pink-300 font-medium">High success rates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-pink-300 font-medium">Expert specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="text-pink-300 font-medium">Financial support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl transition flex items-center gap-2 shadow-xl text-lg">
              Book A Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            
            <button className="flex items-center gap-3 text-white hover:text-pink-300 transition group">
              <div className="w-14 h-14 rounded-full border-2 border-pink-400 flex items-center justify-center group-hover:bg-pink-500 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="font-medium text-lg">Watch Video</span>
            </button>
          </div>

          {/* Dot Indicator */}
          <div className="flex items-center justify-center gap-2 mt-16">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}