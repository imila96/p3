export default function ThemesSection() {
  return (
    <section className="bg-white py-10 md:py-12">
      {/* Same container as SolutionsFeatures; compact like 2nd ss */}
      <div className="site-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text left */}
          <div className="text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#111827] mb-3">
              One action carries across everything
            </h2>
            <div className="text-lg text-[#374151] leading-relaxed">
              What you do in one part of Strug carries over to others, so your activity, reputation, and participation are not reset every time you use a different service.
            </div>
          </div>

          {/* Video right — shorter height so whole section is less tall, like 2nd ss */}
          <div className="relative h-[200px] md:h-[260px] rounded-2xl overflow-hidden order-1 md:order-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src="/videos/themes-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
