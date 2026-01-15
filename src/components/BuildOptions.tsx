'use client';

import Link from 'next/link';

export default function BuildOptions() {
  return (
    <div className="bg-[#071C52]">
      <section className="grid gap-y-8 grid-cols-full pb-0 bg-white text-black md:rounded-t-[40px] pt-[140px] md:pt-[198px]">
        <div className="container mx-auto max-w-[1440px] px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-10 lg:col-span-8">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Build complexity with ease
              </h2>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                From headless commerce to advanced customization, Index 101 gives you 
                the tools to build storefronts that scale with your business.
              </p>
              <Link
                href="#contact-sales"
                className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg border-2 bg-black text-white border-black hover:bg-transparent hover:text-black transition-all duration-150 font-bold"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto max-w-[1440px] px-4 mt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold mb-4">99.99%</div>
              <p className="text-lg opacity-80">Uptime SLA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold mb-4">36%</div>
              <p className="text-lg opacity-80">Better checkout conversion</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold mb-4">10k+</div>
              <p className="text-lg opacity-80">Merchants on Index 101</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
