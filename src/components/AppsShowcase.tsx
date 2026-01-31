'use client';

export default function AppsShowcase() {
  const apps = [
    { video: '/videos/app-showcase-1.mp4' },
    { video: '/videos/app-showcase-2.mp4' },
    { video: '/videos/app-showcase-3.mp4' },
    { video: '/videos/app-showcase-4.mp4' },
    { video: '/videos/app-showcase-5.mp4' },
    { video: '/videos/app-showcase-6.mp4' },
    { video: '/videos/app-showcase-7.mp4' },
    { video: '/videos/app-showcase-8.mp4' },
    { video: '/videos/app-showcase-9.mp4' },
    { video: '/videos/app-showcase-10.mp4' },
    { video: '/videos/app-showcase-11.mp4' },
    { video: '/videos/app-showcase-12.mp4' },
  ];

  return (
    <section className="bg-white">
      <div className="site-content pt-2 pb-8 md:pb-12">
        {/* Slideshow embedded in page — no border, blends with background */}
        <div className="relative overflow-hidden">
          <div className="relative z-10 py-8 md:py-10">
            <div className="overflow-hidden">
              <div className="flex gap-4 md:gap-6 animate-marquee-slow">
                {[...apps, ...apps].map((app, index) => (
                  <div key={index} className="app-item shrink-0 group">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-100">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={app.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Edge fade into page background */}
          <div className="absolute top-0 z-20 w-full h-full pointer-events-none bg-gradient-to-r from-white via-transparent to-white"></div>
        </div>
      </div>
    </section>
  );
}
