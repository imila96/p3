export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-navy-primary via-navy-dark to-navy-dark text-text-off-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Gradient background */}
        <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(155.65%_371.82%_at_6.46%_132%,_rgba(60,103,166,0.3)_0%,_rgba(22,33,46,0)_100%)] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 text-text-off-white leading-tight tracking-tight text-center">
            Everything here points to one simple idea.
          </h2>
          <div className="space-y-8 md:space-y-10">
            <p className="text-xl md:text-2xl text-text-off-white opacity-90 leading-relaxed font-normal max-w-3xl mx-auto">
              Life is already hard. People are trying to work, earn, pay bills, and get through the day using systems that do not work well together. That makes simple things feel stressful and confusing.
            </p>
            <p className="text-xl md:text-2xl text-text-off-white opacity-90 leading-relaxed font-normal max-w-3xl mx-auto">
              When everything works together, life feels lighter. What you do matters. What you earn carries forward. Things make sense again.
            </p>
            <p className="text-xl md:text-2xl text-text-off-white opacity-90 leading-relaxed font-normal max-w-3xl mx-auto">
              This is what it looks like when the system finally works for people, not against them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
