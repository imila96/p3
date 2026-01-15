'use client';

export default function FeatureCards() {
  const features = [
    {
      title: "Flexible ways to build",
      description: "Quickly build an advanced custom store with Index 101's fully managed solution, or go headless for total control."
    },
    {
      title: "Lightning-fast performance",
      description: "With a 99.99% uptime rate and multiple points of presence worldwide, Index 101's infrastructure ensures you have the fastest, most resilient storefronts."
    },
    {
      title: "The world's best-converting checkout",
      description: "Index 101's checkout converts up to 36% better than the competition. And it's built into every storefront on Index 101."
    }
  ];

  return (
    <div className="bg-hero-gradient pb-8 md:pb-16">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl ring-0 ring-white/20 border-white p-0"
            >
              <div className="text-left text-white">
                <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">
                  {feature.title}
                </h2>
                <div className="text-base md:text-lg opacity-80 leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
