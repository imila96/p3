import Image from 'next/image';

export default function CheckoutSection() {
  const checkoutFeatures = [
    {
      title: 'Best-in-class performance',
      description: 'Index 101 checkout is optimized for speed, loading 3x faster than the competition on average.',
    },
    {
      title: 'Customization at scale',
      description: 'Customize your checkout with branding, upsells, and payment options without sacrificing conversion.',
    },
    {
      title: 'Trust and security',
      description: 'Build customer confidence with trusted payment methods, fraud protection, and secure checkout.',
    },
    {
      title: 'Out-of-the-box compliance',
      description: 'Index 101 checkout makes compliance easier, including the new PCI Security Standard for 2025 and regional privacy regulations.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 rounded-b-[40px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">Checkout</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            The world&apos;s best-converting checkout
          </h2>
          <p className="text-lg text-gray-700 opacity-80">
            With a{' '}
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 hover:underline"
            >
              15% higher conversion rate on average
            </a>
            , Index 101&apos;s checkout is customizable, lightning-fast, secure, compliant, and trusted by the biggest brands.
          </p>
        </div>

        {/* Checkout Image */}
        <div className="mb-16 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/images/checkout-image.jpg"
            alt="An overlay of code over an image of the Index 101 checkout"
            fill
            className="object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {checkoutFeatures.map((feature, index) => (
            <div key={index} className="rounded-2xl p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-base text-gray-700 opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
