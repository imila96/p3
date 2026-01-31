'use client';

export default function FeatureCards() {
  const features = [
    {
      title: "This is you",
      description: "You are going through life with NOTHING before affordable; not food, not groceries, not transportation, not solutions to emergencies that leave you stressed."
    },
    {
      title: "This is you",
      description: "You are a business owner who started with big dreams. Then something changed and everything from employees to marketing, visibility, and other overhead cost far more than it should."
    },
    {
      title: "This is you",
      description: "You have no way to earn, no way to pickup work, no solution for anything that comes your way. You are stuck."
    }
  ];

  return (
    <div className="pb-12 md:pb-16 pt-0 border-0 shadow-none">
      <div className="site-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 z-10">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <h2 className="text-2xl md:text-3xl font-normal text-white text-balance mb-4">
                {feature.title}
              </h2>
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
