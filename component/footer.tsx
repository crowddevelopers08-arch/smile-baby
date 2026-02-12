"use client";

import { ChevronUp } from "lucide-react";

const ICON_SIZE = 20;

export default function Footer() {

  return (
    <footer className="relative bg-[#ec4899] text-white text-sm py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Smile Baby. All rights reserved | Powered By Crowd
          Developers
        </p>

        <a
          href="/privacy-policy"
          className="text-white hover:text-black  transition-colors text-sm"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
