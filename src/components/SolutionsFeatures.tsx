export default function SolutionsFeatures() {
  const features = [
    {
      title: "Pay less for everyday needs",
      description: "Access services and products without inflated pricing, middlemen, or unnecessary fees that make simple things expensive."
    },
    {
      title: "Set your own value",
      description: "You decide what your time, skills, or services are worth. Strug lets you participate without platforms dictating your price or cutting deeply into what you earn."
    },
    {
      title: "Turn everyday actions into value",
      description: "Earn, save, or benefit from things you already do, whether that is sharing opportunities, accepting local work, or participating across the platform without needing to start from scratch."
    }
  ];

  return (
    <section className="bg-[#F0F3F7] py-16 md:py-24">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-left bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3A60] mb-4">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
