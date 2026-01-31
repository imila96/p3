'use client';

export default function BuildOptions() {
  return (
    <div className="bg-white">
      <section className="grid gap-y-6 grid-cols-full pb-0 text-[#111827] pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="site-content">
          {/* Text block first — full width */}
          <div className="text-left mb-6 md:mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8">
              Individual solutions that matter
            </h2>
            <p className="text-lg md:text-xl text-[#374151] max-w-3xl">
              Whether you are struggling with affordability, looking to pick up shifts, wanting to earn something on the side, or simply trying to access work and services more easily, Strug is built to help you move forward.
            </p>
          </div>

          {/* Video/visual block below — reduced height */}
          <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden glass-card w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src="/videos/build-options-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
