'use client';

export default function FeatureCards() {
  const features = [
    {
      title: "This is you…",
      description: "You are going through life with NOTHING before affordable; not food, not groceries, not transportation, not solutions to emergencies that leave you stressed."
    },
    {
      title: "This is you",
      description: "You are a business owner who started with big dreams. Then something changed and everything from employees to marketing, visibility, and other overhead cost far more than it should."
    },
    {
      title: "This is you.",
      description: "You have no way to earn, no way to pickup work, no solution for anything that comes your way. You are stuck."
    }
  ];

  return (
    <div className="bg-hero-gradient pb-8 md:pb-16">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6"
            >
              <div className="text-left text-text-off-white">
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
