"use client";

import React from "react";

const cards = [
  {
    icon: "/ivf-smile/communication.png", // replace with your icon path
    title: "Counselling Support",
    description:
      "Dedicated emotional support for couples at every stage of their fertility journey.",
  },
  {
    icon: "/ivf-smile/guidance.png", // replace with your icon path
    title: "Nutrition Guidance",
    description:
      "Personalised nutrition advice to support your body through treatment and beyond.",
  },
  {
    icon: "/ivf-smile/idea.png", // replace with your icon path
    title: "Step-by-Step Clarity",
    description:
      "We walk you through every step so you always know what's happening and what comes next.",
  },
  {
    icon: "/ivf-smile/privacy.png", // replace with your icon path
    title: "Privacy Maintained",
    description:
      "Your details are kept strictly confidential. We maintain full privacy for every patient.",
  },
];

export default function PersonalInfo() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#1e2f5f] mb-3 sm:mb-4 leading-tight">
          Fertility Decisions Are{" "}
          <span className="text-pink-400">Emotional</span> — We Support You
          Through It
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-full lg:max-w-4xl">
          We offer counselling and guidance so couples feel supported and
          informed at every stage. We also maintain strict privacy and
          confidentiality for all patients.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f0f3fa] rounded-2xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-3">
                {/* Icon image */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    style={{
                      filter:
                        "invert(47%) sepia(80%) saturate(600%) hue-rotate(300deg) brightness(100%) contrast(95%)",
                    }}
                    // ↑ Applies pink (#ec4899) tint to dark/black icons.
                    // Remove style if your icon is already colored.
                  />
                </div>
                <h3 className="text-[#1e2f5f] font-bold text-sm sm:text-base md:text-lg leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}