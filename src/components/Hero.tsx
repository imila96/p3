'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero flex flex-col">
      {/* Content — left-aligned; text and CTAs (grid is in .hero::after via CSS) */}
      <section className="relative z-10 flex flex-1 items-center">
        <div className="site-content">
          <div className="max-w-xl">
            <p className="text-left text-sm font-normal uppercase tracking-tight text-white/80 pb-2">
              Strug is change
            </p>
            <h1 className="text-left text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl mb-4">
              Struggling is not a catch phrase
            </h1>
            <p className="text-left text-lg text-white/85 md:text-xl pt-2 max-w-lg">
              Something is wrong. You know it; you feel it; you experience it every single day. We recognize it and are working towards changing it all.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="#contact-sales"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-normal border-2 border-transparent bg-[#b5f73b] text-[#0b1d42] hover:bg-[#c4f85a] transition-colors duration-200"
              >
                Start for free
              </Link>
              <Link
                href="#contact-sales"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-normal border-2 border-white text-white bg-transparent hover:bg-white/10 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
