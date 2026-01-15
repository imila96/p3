'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: 'Index 101 has given us the flexibility and scalability we need to grow our business globally. The checkout conversion rates speak for themselves.',
      author: 'Sarah Johnson',
      role: 'Head of Ecommerce',
      company: 'Premium Brand Co.',
      logo: '/images/testimonials/brand1.svg',
    },
    {
      quote: 'Moving to Index 101 was a game-changer. We saw a 40% increase in conversion rates and our site performance improved dramatically.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'Fashion Forward',
      logo: '/images/testimonials/brand2.svg',
    },
    {
      quote: 'The headless commerce capabilities allowed us to create a completely custom experience while still leveraging Index 101 powerful backend.',
      author: 'Emma Williams',
      role: 'VP of Technology',
      company: 'Tech Innovators',
      logo: '/images/testimonials/brand3.svg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            See how Index 101 helps brands grow
          </h2>
        </div>

        {/* Gradient background */}
        <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(155.65%_371.82%_at_6.46%_132%,_rgba(37,93,238,0.4)_0%,_rgba(7,13,32,0)_100%)] pointer-events-none"></div>

        {/* Testimonials Carousel */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto pb-24">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              
              <footer className="mt-8">
                <div className="flex flex-col items-center gap-4">
                  {/* Company Logo Placeholder */}
                  <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-white/50">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-bold text-white">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 4L6 10L12 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 4L14 10L8 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
