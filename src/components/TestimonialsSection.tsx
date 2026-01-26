export default function TestimonialsSection() {
  return (
    <section 
      className="section-mid relative -mt-16"
      style={{
        background: 'linear-gradient(180deg, #0b1d42 0%, #10264a 60%, #02050c 100%)',
        color: 'rgba(255,255,255,0.95)',
        padding: '60px 40px'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-12 md:mb-16 leading-tight tracking-tight text-center"
            style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 800 }}
          >
            Everything here points to one simple idea.
          </h2>
          <div className="space-y-8 md:space-y-10">
            <p 
              className="text-xl md:text-2xl leading-relaxed font-normal max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
            >
              Life is already hard. People are trying to work, earn, pay bills, and get through the day using systems that do not work well together. That makes simple things feel stressful and confusing.
            </p>
            <p 
              className="text-xl md:text-2xl leading-relaxed font-normal max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
            >
              When everything works together, life feels lighter. What you do matters. What you earn carries forward. Things make sense again.
            </p>
            <p 
              className="text-xl md:text-2xl leading-relaxed font-normal max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.82)', lineHeight: '1.6' }}
            >
              This is what it looks like when the system finally works for people, not against them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
