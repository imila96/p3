import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section 
      className="section-bottom relative"
      style={{
        background: 'linear-gradient(180deg, #02050c 0%, #0b1d42 40%, #10264a 100%)',
        color: 'rgba(255,255,255,0.95)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%)'
        }}
      ></div>

      <div className="site-content relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-normal mb-6"
            style={{ 
              color: 'rgba(255,255,255,0.95)', 
              fontSize: '36px',
              fontWeight: 800,
              textAlign: 'center'
            }}
          >
            Move forward without rebuilding.
          </h2>
          <p 
            className="text-lg mb-8"
            style={{ 
              color: 'rgba(255,255,255,0.82)', 
              textAlign: 'center',
              maxWidth: '880px',
              margin: '12px auto 28px'
            }}
          >
            Learn how one system can replace the chaos, reduce costs, and help you earn, sell, and operate more easily, without changing who you are or how you work.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#contact-sales"
              className="inline-block font-normal transition-colors"
              style={{
                background: '#dcd9ad',
                color: '#0b1d42',
                padding: '14px 26px',
                borderRadius: '10px',
                fontWeight: 700
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
