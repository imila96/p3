'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = {
    Sell: [
      { label: 'Sell everywhere', href: '#' },
      { label: 'Online store', href: '#' },
      { label: 'International ecommerce', href: '#' },
      { label: 'Omnichannel commerce', href: '#' },
      { label: 'Headless commerce', href: '#' },
      { label: 'Campaigns and flash sales', href: '#' },
      { label: 'Retail and point of sale', href: '#' },
      { label: 'B2B ecommerce', href: '#' },
    ],
    Manage: [
      { label: 'Manage complexity', href: '#' },
      { label: 'Automation', href: '#' },
      { label: 'Shipping', href: '#' },
      { label: 'Payments', href: '#' },
    ],
    Integrate: [
      { label: 'Integrate systems', href: '#' },
      { label: 'Automation', href: '#' },
      { label: 'Headless commerce', href: '#' },
      { label: 'Partners', href: '#' },
    ],
    Platform: [
      { label: 'Index 101 platform', href: '#' },
      { label: 'Case studies', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Upgrade to Index 101', href: '#' },
    ],
  };

  return (
    <header className="font-sans h-0">
      <div className="after:absolute after:top-0 after:left-0 after:will-change-opacity after:pointer-events-none after:h-full after:w-full after:z-10 after:transition-opacity after:duration-200 w-full z-50 after:bg-black text-white fixed top-0 after:opacity-100 after:border-b after:border-white/20">
        <div className="h-[73px] px-4 xl:px-auto flex items-center z-20 relative max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="inline-block shrink-0 mr-16">
            <svg width="104" height="32" viewBox="0 0 104 32" fill="none" className="h-8">
              <text x="0" y="24" fontSize="24" fontWeight="bold" fill="white">Index 101</text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden h-full w-full" aria-label="Main">
            <ul className="flex h-full w-full">
              {Object.entries(navItems).map(([key, items]) => (
                <li key={key} className="mr-8 text-base relative group">
                  <button
                    className="bg-transparent font-bold flex items-center h-full"
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span className="mr-3">{key}</span>
                    <div className="relative inline-block h-[7px] w-3">
                      <div className="inline-block rounded border-b-8 h-2 w-[2px] border-white bg-white -translate-x-[3px] rotate-[135deg]"></div>
                      <div className="inline-block rounded border-b-8 h-2 w-[2px] border-white bg-white -rotate-[135deg]"></div>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === key && (
                    <ul className="absolute top-[80px] z-[21] py-2 min-w-[240px] bg-white text-black rounded-lg shadow-md whitespace-nowrap">
                      {items.map((item, idx) => (
                        <li key={idx} className={idx === 0 ? 'border-b border-gray-300' : ''}>
                          <Link
                            href={item.href}
                            className="inline-block py-2 px-3 w-full font-bold text-[0.9375rem] hover:bg-gray-300 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mr-8 text-base">
                <Link href="#" className="flex items-center h-full hover:underline font-bold">
                  Migrate
                </Link>
              </li>
              <li className="mr-8 text-base ml-auto">
                <Link href="#" className="flex items-center h-full hover:underline font-bold">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="ml-auto">
            <ul className="lg:flex hidden items-center">
              <li>
                <Link
                  href="#contact-sales"
                  className="inline-block px-4 py-2.5 rounded-lg text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-150 font-bold whitespace-nowrap"
                >
                  Get in touch
                </Link>
              </li>
            </ul>

            {/* Mobile Menu */}
            <ul className="flex items-center lg:hidden mr-[-15px]">
              <li>
                <Link href="#contact-sales" className="whitespace-nowrap hover:underline font-bold text-white underline pr-4">
                  Get in touch
                </Link>
              </li>
              <li>
                <button
                  className="flex h-12 w-12 cursor-pointer select-none flex-col items-center justify-center gap-1"
                  aria-label="Menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <div className="h-0.5 w-[1.125rem] bg-white"></div>
                  <div className="h-0.5 w-[1.125rem] bg-white"></div>
                  <div className="h-0.5 w-[1.125rem] bg-white"></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 lg:hidden overflow-y-auto">
          <div className="h-[73px] container flex items-center border-b border-white/20">
            <Link href="/" className="inline-block shrink-0 mr-16">
              <svg width="104" height="32" viewBox="0 0 104 32" fill="none" className="h-8">
                <text x="0" y="24" fontSize="24" fontWeight="bold" fill="white">Index 101</text>
              </svg>
            </Link>
            <button
              className="ml-auto flex h-12 w-12 cursor-pointer flex-col items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="text-2xl">×</div>
            </button>
          </div>
          <nav className="p-4">
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key} className="mb-6">
                <h3 className="text-xl font-bold mb-3">{key}</h3>
                <ul className="pl-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link href={item.href} className="text-lg hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
