import Image from 'next/image';

export default function IntegrationsSection() {
  const integrations = [
    {
      title: 'All your integrations, seamlessly connected',
      description:
        'Connect your preferred ERP, CRM, IMS, OMS, and other systems to Index 101 using our extensive APIs and pre-built integrations.',
    },
    {
      title: 'Developer tools that scale',
      description:
        'Use sandbox and development environments to test integrations out before shipping final changes.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-transparent py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">Integrations</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Powerful integrations for the systems behind your store
          </h2>
          <p className="text-lg text-gray-700 opacity-80">
            Integrate with your preferred systems and extend the power of the platform with the critical software you require, all backed by Index 101 reliable global infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side: 3D Visualization */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="relative h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
              <Image
                src="/images/integrations-cube.jpg"
                alt="A wall of logos showing various Index 101 integrations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side: Integration cards */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="rounded-2xl p-8 bg-white shadow-md border border-black/10">
                <h3 className="text-2xl font-bold text-black mb-4">{integration.title}</h3>
                <p className="text-base text-gray-700 opacity-80">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apps section */}
        <div className="mt-24">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Go further with thousands of apps
            </h2>
            <p className="text-lg text-gray-700 opacity-80">
              When you need extras, the{' '}
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 hover:underline"
              >
                Index 101 App Store
              </a>{' '}
              has you covered. With over 8,000 apps, you can extend the core platform with features like upsells, trust badges, gift options, and payment customizations&mdash;allowing you to create unique experiences customers can&apos;t find anywhere else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
