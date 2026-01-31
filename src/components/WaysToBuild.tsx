'use client';

import Image from 'next/image';

const buildOptions = [
  {
    iconSrc: '/icons/icon-individual.svg',
    title: "Individual Solutions",
    description: "We have built ways to earn, ways to get jobs or pick up shifts, ways to get affordable services at your price, and even ways to access other services that others charge too much for."
  },
  {
    iconSrc: '/icons/icon-business.svg',
    title: "Business Solutions",
    description: "We have built ways for businesses to reach customers, operate efficiently, and grow without being limited by size, budget, or complexity."
  }
];

/** Intro + Individual/Business solutions — all on same blue background; use inside blue wrapper */
export function WaysToBuildIntro() {
  return (
    <section className="grid grid-cols-full pb-0 pt-0 gap-y-0">
      <div className="site-content grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="md:col-span-10 lg:col-span-8">
          <div className="text-left relative">
            <h2 className="text-sm tracking-tight font-normal uppercase leading-none pb-2 text-white/80">
              Changing that
            </h2>
            <p className="text-4xl md:text-5xl font-normal mb-4 text-white">
              We are building solutions that matter to you and only you.
            </p>
            <div className="text-lg md:text-xl text-white/85 pt-2 mb-8 md:mb-12">
              Whether you are a business or an individual, we understand what you are going through. That is why we are building solutions around you to make your struggle less painful.
            </div>
            {/* Individual Solutions + Business Solutions — centered, clean cards */}
            <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                {buildOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 md:p-10 text-center shadow-[0_1px_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 border border-gray-100/80"
                  >
                    <div className="inline-flex w-14 h-14 rounded-xl bg-[#10245A] items-center justify-center mb-5 overflow-hidden">
                      <Image
                        src={option.iconSrc}
                        alt=""
                        width={56}
                        height={56}
                        className="object-contain w-8 h-8"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-normal text-[#111827] mb-4 tracking-tight">
                      {option.title}
                    </h3>
                    <p className="text-[15px] md:text-base text-[#6b7280] leading-relaxed max-w-[32ch] mx-auto">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Two white cards — in normal flow; blue band (::before) ends at middle so they straddle */
export function WaysToBuildCards() {
  return (
    <div className="site-content pt-4 pb-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buildOptions.map((option, index) => (
          <div key={index} className="card bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#10245A] flex items-center justify-center shrink-0 overflow-hidden">
                <Image src={option.iconSrc} alt="" width={48} height={48} className="object-contain w-7 h-7" unoptimized />
              </div>
              <a href="#" className="group flex items-center gap-2 hover:underline flex-1">
                <span className="text-2xl md:text-3xl font-normal text-[#111827]">
                  {option.title}
                </span>
                <svg 
                  fill="none" 
                  viewBox="0 0 20 20" 
                  height="20" 
                  width="20" 
                  className="rotate-180 shrink-0 text-[#374151]"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m4 13 6-6 6 6"
                  />
                </svg>
              </a>
            </div>
            <p className="text-base md:text-lg text-[#374151] leading-relaxed">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WaysToBuild() {
  return (
    <>
      <WaysToBuildIntro />
      <WaysToBuildCards />
    </>
  );
}
