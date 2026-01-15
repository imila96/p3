'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Store {
  id: string;
  name: string;
  url: string;
  image: string;
  logo: string;
  type: string;
  typeColor: string;
}

export default function ScrollingShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stores: Store[] = [
    {
      id: 'store1',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/braindead.png',
      logo: '/stores/braindead-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store2',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/swati.png',
      logo: '/stores/swati-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store3',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/holo-taco.png',
      logo: '/stores/holotaco-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store4',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/chamberlain.png',
      logo: '/stores/chamberlain-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store5',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/braindead.png',
      logo: '/stores/braindead-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store6',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/swati.png',
      logo: '/stores/swati-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store7',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/holo-taco.png',
      logo: '/stores/holotaco-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
    {
      id: 'store8',
      name: 'Index 101',
      url: 'index101.com',
      image: '/images/stores/chamberlain.png',
      logo: '/stores/chamberlain-logo.svg',
      type: 'Custom Template',
      typeColor: '#1F51FF'
    },
  ];

  return (
    <section className="grid gap-y-8 grid-cols-full text-white bg-transparent pt-0 pb-0 md:pb-8">
      <div 
        className={`flex relative w-screen mx-auto gap-6 xl:max-w-[1800px] motion-safe:overflow-hidden motion-reduce:overflow-visible min-h-[552px] transition-opacity ease-in duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maskImage: 'linear-gradient(90deg, transparent 1%, rgb(0,0,0) 7%, rgb(0,0,0) 93%, transparent 99%)'
        }}
      >
        {/* First Set of Stores */}
        <div className="flex shrink-0 w-max gap-6 animate-marquee-reverse animation-delay-500">
          {stores.map((store) => (
            <StoreCard key={`${store.id}-1`} store={store} />
          ))}
        </div>
        
        {/* Duplicate Set for Seamless Loop */}
        <div className="flex shrink-0 w-max gap-6 animate-marquee-reverse animation-delay-500">
          {stores.map((store) => (
            <StoreCard key={`${store.id}-2`} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreCard({ store }: { store: Store }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`https://${store.url}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="relative max-w-[400px] group block shrink-0 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[400px] h-[552px] relative bg-gray-900 overflow-hidden">
        <Image
          src={store.image}
          alt={`Screenshot of the ${store.name} website`}
          fill
          className="object-cover"
        />
      </div>

      {/* Hover Overlay */}
      <div 
        className={`flex flex-col items-center justify-center absolute inset-0 bg-black/90 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-[80%] mx-auto mb-8">
          <div className="text-white font-bold text-2xl">{store.name}</div>
        </div>
        <div className="mt-8 flex items-center text-white">
          <span className="mr-2 text-sm sm:text-lg">{store.url}</span>
          <svg fill="none" viewBox="0 0 20 20" height="12" width="12" className="-rotate-45">
            <path stroke="currentColor" strokeLinecap="round" d="m12.12 4.34 5.59 5.59a.1.1 0 0 1 0 .14l-5.59 5.59M17.78 10H2.22"></path>
          </svg>
        </div>
      </div>

      {/* Badge */}
      <div 
        className="absolute bottom-5 left-5 text-white text-[0.8125rem] md:text-[1.125rem] py-2.5 px-4 rounded-full flex items-center gap-2.5"
        style={{ backgroundColor: store.typeColor }}
      >
        <span className="block w-2 h-2 rounded-full bg-white"></span>
        {store.type}
      </div>
    </a>
  );
}
