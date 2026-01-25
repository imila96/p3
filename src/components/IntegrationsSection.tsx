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
    <section className="bg-gradient-to-b from-navy-primary via-navy-primary to-navy-dark py-16 md:py-24 overflow-hidden pb-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-off-white mb-6">
            CONNECTED BY DESIGN
          </h2>
          <p className="text-lg text-text-off-white opacity-80">
            Strug works alongside how people and businesses already live and operate. Instead of forcing change or replacement, it brings everyday activity, work, services, and commerce into one shared flow, supported quietly in the background so participation feels natural, stable, and uninterrupted wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side: Video */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="relative h-[400px] glass-card rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/integrations-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right side: Integration cards */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="glass-card p-8">
                <h3 className="text-2xl font-bold text-text-off-white mb-4">{integration.title}</h3>
                <p className="text-base text-text-off-white opacity-80">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apps section */}
        <div className="mt-24">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text-off-white mb-6">
              More paths open as you need them
            </h2>
            <p className="text-lg text-text-off-white opacity-80">
              Strug is not limited to a single way of doing things. As needs change, new opportunities already exist within the platform, from work and services to commerce, learning, care, and community. Instead of adding tools or searching elsewhere, people and businesses can move into what they need next, all within the same system, without losing momentum or starting over.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
