'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AppsShowcase() {
  const apps = [
    { name: 'Index 101', logo: '/images/apps/klaviyo.png' },
    { name: 'Index 101', logo: '/images/apps/yotpo.png' },
    { name: 'Index 101', logo: '/images/apps/recharge.png' },
    { name: 'Index 101', logo: '/images/apps/gorgias.png' },
    { name: 'Index 101', logo: '/images/apps/privy.png' },
    { name: 'Index 101', logo: '/images/apps/loox.png' },
    { name: 'Index 101', logo: '/images/apps/smile.png' },
    { name: 'Index 101', logo: '/images/apps/judgeme.png' },
    { name: 'Index 101', logo: '/images/apps/omnisend.png' },
    { name: 'Index 101', logo: '/images/apps/aftership.png' },
    { name: 'Index 101', logo: '/images/apps/bold.png' },
    { name: 'Index 101', logo: '/images/apps/stamped.png' },
  ];

  return (
    <div className="container mx-auto px-4 my-16">
      <div className="bg-gradient-to-b from-black to-blue-900 rounded-3xl relative overflow-hidden">
        <div className="relative z-10 py-24">
          {/* Scrolling Apps */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee-slow">
              {[...apps, ...apps].map((app, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-item shrink-0 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg p-4 hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500">
                      {app.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlay on edges */}
        <div className="absolute top-0 z-20 w-full h-full rounded-3xl pointer-events-none bg-gradient-to-r from-blue-900 via-transparent to-blue-900"></div>
      </div>
    </div>
  );
}
