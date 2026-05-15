"use client";

import Image from 'next/image'
import React from 'react'

const LOGO_URL = 'https://ik.imagekit.io/tnvhh8yfa/public/smile-baby-logo.webp?updatedAt=1773300923285';

const Review = () => {
  return (
    <div className="min-h-screen bg-[#fff7fb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl items-center justify-center">
        <div className="w-full rounded-2xl border border-[#ec4899]/15 bg-white/95 p-5 shadow-[0_24px_70px_rgba(30,47,95,0.12)] backdrop-blur sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center justify-center rounded-2xl border border-[#ec4899]/15 bg-white px-5 py-4 shadow-[0_12px_34px_rgba(236,72,153,0.10)]">
              <div className="relative h-16 w-44 sm:h-20 sm:w-56">
                <Image
                  src={LOGO_URL}
                  alt="Smile Baby IVF logo"
                  fill
                  sizes="(min-width: 640px) 224px, 176px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-9 text-center sm:mb-5">
            <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-[#ec4899]" />
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ec4899]">
              Smile Baby IVF
            </p>
            <h4 className="mb-4 text-3xl font-black text-[#1e2f5f] sm:text-5xl">
              Click & Review
            </h4>
            <div className="mx-auto mb-4 max-w-lg text-base leading-8 text-gray-600 sm:text-xl">
              We'd love to hear your feedback!<br />
              Please click any one of the buttons below to share your review.<br />
              A short review of 4 to 5 lines would be greatly appreciated.
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://g.page/r/CQ84stpL3-1DEBM/review"
              className="w-full rounded-lg border-2 border-[#ec4899] bg-[#ec4899] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(236,72,153,0.22)] transition hover:bg-[#db2777]"
            >
              Client Review
            </a>
            <a
              href="/client-feedback"
              className="w-full rounded-lg border-2 border-[#1e2f5f] bg-transparent px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2f5f] transition hover:bg-[#1e2f5f] hover:text-white"
            >
              Client Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
