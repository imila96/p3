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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-b from-navy-dark via-navy-primary to-navy-primary rounded-3xl relative overflow-hidden -mt-16">
        <div className="relative z-10 py-24">
          {/* Scrolling Videos */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee-slow">
              {[...apps, ...apps].map((app, index) => (
                <div
                  key={index}
                  className="app-item shrink-0 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300">
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

        {/* Gradient overlay on edges */}
        <div className="absolute top-0 z-20 w-full h-full rounded-3xl pointer-events-none bg-gradient-to-r from-navy-primary via-transparent to-navy-primary"></div>
      </div>
    </div>
  );
}
