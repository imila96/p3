import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-navy-dark via-navy-dark to-navy-dark text-text-off-white py-16 md:py-24 relative">
      {/* Gradient background */}
      <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(40%_160%_at_49%_139%,_rgba(60,103,166,0.4)_0%,_rgba(22,33,46,0)_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Move forward without rebuilding.
          </h2>
          <p className="text-lg text-text-off-white/80 mb-8">
            Learn how one system can replace the chaos, reduce costs, and help you earn, sell, and operate more easily, without changing who you are or how you work.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-sales"
              className="inline-block px-8 py-4 bg-button-blue text-text-off-white font-bold rounded-lg hover:bg-button-blue/80 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
