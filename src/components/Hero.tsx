'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-hero-gradient overflow-hidden">
      <div className="container relative mx-auto max-w-[1440px] px-4">
        <div className="absolute w-[1235px] h-[570px] z-0 top-0 right-[-655px] sm:bg-[url('/hero-bg.svg')] bg-no-repeat bg-right-top"></div>
      </div>
      
      <section className="grid gap-y-2xl grid-cols-full relative pb-12 md:pb-0 text-text-off-white pt-24 z-10">
        <div className="container mx-auto max-w-[1440px] px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Content */}
          <div className="md:col-span-6 flex flex-col pt-12 sm:pt-16 my-auto md:py-12 gap-y-4">
            <div className="text-left">
              <h1 className="text-sm tracking-tight font-bold uppercase leading-none pb-2 opacity-80">
                Strug is change
              </h1>
              <p className="text-5xl md:text-6xl font-bold mb-4">
                Struggling is not a catch phrase
              </p>
              <div className="text-lg md:text-xl opacity-80 pt-2">
                Something is wrong. You know it; you feel it; you experience it every single day. We recognize it and are working towards changing it all.
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="max-w-md">
                <Link
                  href="#contact-sales"
                  className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg border-2 bg-button-blue text-text-off-white border-button-blue hover:bg-transparent hover:border-muted-blue/50 transition-all duration-150 font-bold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-y-4 my-auto md:py-12">
            <div className="w-full aspect-square glass-card rounded-2xl overflow-hidden relative">
              {/* Video Player */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
