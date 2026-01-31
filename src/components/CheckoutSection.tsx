import Image from 'next/image';

export default function CheckoutSection() {
  const checkoutFeatures = [
    {
      iconSrc: '/icons/icon-2.svg',
      title: 'Clarity without configuration',
      description: 'People should not need to set up systems to understand how things work. Rules, pricing, and expectations are presented clearly from the start so participation feels natural rather than technical.',
    },
    {
      iconSrc: '/icons/icon-8.svg',
      title: 'Freedom over interference',
      description: 'Decisions are left to the people involved, not enforced by rigid controls. The platform steps back, allowing individuals and businesses to agree on terms, accept or decline, and participate without being dictated to.',
    },
    {
      iconSrc: '/icons/icon-checkout-4.svg',
      title: 'Fairness is built into the process',
      description: 'Outcomes are not shaped by hidden rules or last-minute changes. What is agreed to upfront is what both sides move forward with, reducing disputes and uncertainty.',
    },
    {
      iconSrc: '/icons/icon-9.svg',
      title: 'Movement without friction',
      description: 'Whether someone is buying, booking, hiring, or accepting work, the process keeps moving without delays, handoffs, or unnecessary steps that slow people down.',
    },
  ];

  return (
    <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-16 rounded-b-[40px]">
      <div className="site-content">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-normal text-[#111827] mb-6">
            FINISH WITH CONFIDENCE
          </h2>
          <p className="text-lg text-[#374151]">
            The final step should never feel uncertain or unfair. Pricing is clear, expectations are set upfront, and what you agree to is exactly what happens. Whether paying or getting paid, completion feels straightforward, calm, and trustworthy for everyone involved.
          </p>
        </div>

        {/* Checkout Video */}
        <div className="mb-10 md:mb-12 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg">
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

        {/* Features Grid — icon in dark blue rounded square, title, description (as in reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {checkoutFeatures.map((feature, index) => (
            <div key={index} className="text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#10245A] flex items-center justify-center mb-5 shrink-0 overflow-hidden">
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={56}
                  height={56}
                  className="object-contain w-8 h-8 md:w-9 md:h-9"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-normal text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-base text-[#6b7280] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
