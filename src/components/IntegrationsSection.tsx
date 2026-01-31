export default function IntegrationsSection() {
  const integrations = [
    {
      title: 'Everything works together, without effort',
      description:
        'Strug is built so all parts of life and business connect naturally. You do not have to stitch systems together or manage complexity. Work, services, earning, spending, and growth move as one, without friction or technical burden.',
    },
    {
      title: 'Built so it can grow with you',
      description:
        'Strug is not rigid or finished by design. As people, businesses, and communities evolve, the platform is meant to expand with them, allowing new ideas, new ways of working, and new forms of participation without starting over.',
    },
    {
      title: 'Room to try, adjust, and move forward',
      description:
        'Progress rarely happens perfectly the first time. Strug allows people and businesses to explore opportunities, test what works, and adapt without risk, pressure, or irreversible decisions.',
    },
  ];

  return (
    <section className="bg-[#ffffff] pt-12 md:pt-16 pb-6 md:pb-10 overflow-hidden">
      <div className="site-content">
        {/* Header — pure white, no background strips; headings on white */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-normal text-[#111827] mb-6 leading-tight">
            CONNECTED BY DESIGN
          </h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Strug works alongside how people and businesses already live and operate. Instead of forcing change or replacement, it brings everyday activity, work, services, and commerce into one shared flow, supported quietly in the background so participation feels natural, stable, and uninterrupted wherever you are.
          </p>
        </div>

        {/* Two columns: top-aligned, balanced; left = video, right = composed card layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Left: video — fixed height for alignment */}
          <div className="md:col-span-5">
            <div
              className="relative h-[400px] bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/videos/integrations-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right: composed structure — 1 primary card full-width, 2 secondary cards side-by-side; even rhythm */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
            {/* Primary: first block full width */}
            <div
              className="md:col-span-2 bg-[#ffffff] p-6 md:p-8 rounded-2xl flex flex-col"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl md:text-2xl font-normal text-[#111827] mb-3">{integrations[0].title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed max-w-prose">{integrations[0].description}</p>
            </div>
            {/* Secondary: two equal-height cards */}
            <div
              className="bg-[#ffffff] p-6 md:p-8 rounded-2xl flex flex-col"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl md:text-2xl font-normal text-[#111827] mb-3">{integrations[1].title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed">{integrations[1].description}</p>
            </div>
            <div
              className="bg-[#ffffff] p-6 md:p-8 rounded-2xl flex flex-col"
              style={{ boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl md:text-2xl font-normal text-[#111827] mb-3">{integrations[2].title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed">{integrations[2].description}</p>
            </div>
          </div>
        </div>

        {/* Bottom block — headings on white; tighter spacing above slideshow */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-4xl mb-4 md:mb-6">
            <h2 className="text-3xl md:text-5xl font-normal text-[#111827] mb-6 leading-tight">
              More paths open as you need them
            </h2>
            <p className="text-lg text-[#6b7280] leading-relaxed">
              Strug is not limited to a single way of doing things. As needs change, new opportunities already exist within the platform, from work and services to commerce, learning, care, and community. Instead of adding tools or searching elsewhere, people and businesses can move into what they need next, all within the same system, without losing momentum or starting over.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
