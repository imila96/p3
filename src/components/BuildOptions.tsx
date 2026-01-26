'use client';

export default function BuildOptions() {
  return (
    <div className="bg-navy-primary">
      <section className="grid gap-y-8 grid-cols-full pb-0 bg-gradient-to-b from-navy-primary via-navy-primary to-[#F0F3F7] text-text-off-white md:rounded-t-[40px] pt-[140px] md:pt-[198px] pb-24">
        <div className="container mx-auto max-w-[1440px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Individual solutions that matter
              </h2>
              <p className="text-lg md:text-xl opacity-80 mb-8">
                Whether you are struggling with affordability, looking to pick up shifts, wanting to earn something on the side, or simply trying to access work and services more easily, Strug is built to help you move forward.
              </p>
            </div>

            {/* Right Column - Video */}
            <div className="relative min-h-[400px] md:min-h-[600px] rounded-2xl overflow-hidden glass-card">
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
        </div>
      </section>
    </div>
  );
}
