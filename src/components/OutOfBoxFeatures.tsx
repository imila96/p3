export default function OutOfBoxFeatures() {
  const features = [
    {
      icon: '🌍',
      title: 'Markets',
      description: 'Reach international customers with country-specific domains, currencies, and payment methods.',
    },
    {
      icon: '🔍',
      title: 'SEO and discoverability',
      description: 'Get discovered with built-in SEO features and integrations with major search engines and marketplaces.',
    },
    {
      icon: '⚡',
      title: 'Store performance',
      description: 'Deliver lightning-fast experiences with Index 101 global CDN and optimized infrastructure.',
    },
    {
      icon: '🔐',
      title: 'Security and compliance',
      description: 'Stay compliant with automatic security updates, PCI compliance, and data protection.',
    },
    {
      icon: '📊',
      title: 'Analytics and reporting',
      description: 'Get a real-time view of your store activity so you make informed optimizations.',
    },
    {
      icon: '👥',
      title: 'Custom user groups',
      description: 'Group similar roles to assign permissions in bulk, streamlining onboarding and role transitions within your organization.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Out-of-the-box features, for however you build
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-transparent">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-base text-gray-700 opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
