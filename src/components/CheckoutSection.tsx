export default function CheckoutSection() {
  const checkoutFeatures = [
    {
      title: 'Clarity without configuration',
      description: 'People should not need to set up systems to understand how things work. Rules, pricing, and expectations are presented clearly from the start so participation feels natural rather than technical.',
    },
    {
      title: 'Freedom over interference',
      description: 'Decisions are left to the people involved, not enforced by rigid controls. The platform steps back, allowing individuals and businesses to agree on terms, accept or decline, and participate without being dictated to.',
    },
    {
      title: 'Fairness is built into the process',
      description: 'Outcomes are not shaped by hidden rules or last-minute changes. What is agreed to upfront is what both sides move forward with, reducing disputes and uncertainty.',
    },
    {
      title: 'Movement without friction',
      description: 'Whether someone is buying, booking, hiring, or accepting work, the process keeps moving without delays, handoffs, or unnecessary steps that slow people down.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F0F3F7] via-[#F0F3F7] to-[#0b1d42] py-16 md:py-24 rounded-b-[40px] pb-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A3A60] mb-6">
            FINISH WITH CONFIDENCE
          </h2>
          <p className="text-lg text-[#4A5568]">
            The final step should never feel uncertain or unfair. Pricing is clear, expectations are set upfront, and what you agree to is exactly what happens. Whether paying or getting paid, completion feels straightforward, calm, and trustworthy for everyone involved.
          </p>
        </div>

        {/* Checkout Video */}
        <div className="mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/checkout-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {checkoutFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#1A3A60] mb-3">{feature.title}</h3>
              <p className="text-base text-[#4A5568]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
