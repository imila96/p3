import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-16 md:py-24 relative">
      {/* Gradient background */}
      <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(40%_160%_at_49%_139%,_rgba(37,93,238,0.5)_0%,_rgba(0,0,0,0)_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Build better. Sell faster.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Talk to our sales team on how to migrate to Index 101 and boost your bottom line.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-sales"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
