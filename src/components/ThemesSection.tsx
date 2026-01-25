export default function ThemesSection() {
  return (
    <section className="bg-navy-primary">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Video side */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/themes-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text side */}
        <div className="grid sm:place-content-center gap-y-4 p-8 md:p-10 lg:p-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-off-white mb-4">
              One action carries across everything
            </h2>
            <div className="text-lg text-text-off-white opacity-80">
              What you do in one part of Strug carries over to others, so your activity, reputation, and participation are not reset every time you use a different service.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
