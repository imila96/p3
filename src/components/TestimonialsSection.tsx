'use client';

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-12 md:py-16"
      style={{
        background: 'linear-gradient(180deg, #0b1d42 0%, #10264a 60%, #02050c 100%)',
        color: 'rgba(255,255,255,0.95)',
      }}
    >
      <div className="site-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: heading + quote/body + CTA + nav */}
          <div className="relative z-10 text-left order-2 lg:order-1 flex flex-col justify-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 md:mb-10 leading-tight tracking-tight"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Everything here points to one simple idea.
            </h2>
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
              >
                Life is already hard. People are trying to work, earn, pay bills, and get through the day using systems that do not work well together. That makes simple things feel stressful and confusing.
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
              >
                When everything works together, life feels lighter. What you do matters. What you earn carries forward. Things make sense again.
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
              >
                This is what it looks like when the system finally works for people, not against them.
              </p>
            </div>
            <a
              href="#"
              className="inline-block mt-8 text-white underline underline-offset-2 hover:opacity-90 transition-opacity"
            >
              Read more
            </a>
            {/* Nav controls — back, play, forward */}
            <div className="flex items-center gap-3 mt-8">
              <button type="button" className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Previous">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button type="button" className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Play">
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </button>
              <button type="button" className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Next">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Right: 2 videos side-by-side, larger, shifted left */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-start min-h-[300px] md:min-h-[380px]">
            <div className="relative w-full max-w-full lg:max-w-[95%] flex items-center gap-4 md:gap-6">
              {/* Left video — larger */}
              <div className="relative flex-1 min-w-0 max-w-[52%] rounded-2xl overflow-hidden shadow-xl aspect-video min-h-[200px] md:min-h-[240px]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/headless-left-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Right video — larger, gap between */}
              <div className="relative flex-1 min-w-0 max-w-[52%] rounded-2xl overflow-hidden shadow-xl aspect-video min-h-[200px] md:min-h-[240px]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/headless-right-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
