'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItemsWithDropdown = {
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
  };

  const platformItems = [
    { label: 'Strug platform', href: '#' },
    { label: 'Case studies', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Upgrade', href: '#' },
  ];

  const ChevronDown = ({ open = false }: { open?: boolean }) => (
    <div className={`relative inline-block h-[7px] w-3 ml-1 transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`} aria-hidden>
      <div className="inline-block rounded border-b-8 h-2 w-[2px] origin-center transition-all duration-300 ease-out border-white bg-white -translate-x-[3px] rotate-[135deg]" />
      <div className="inline-block rounded border-b-8 h-2 w-[2px] origin-center transition-all duration-300 ease-out border-white bg-white -rotate-[135deg]" />
    </div>
  );

  return (
    <header className="font-sans h-0">
      <div
        className="w-full z-50 text-white fixed top-0 overflow-hidden"
        style={{
          // Match hero top color (#16212E) so no sharp line; smooth transition when scrolled
          background: scrolled
            ? 'linear-gradient(180deg, #0d1520 0%, #16212E 100%)'
            : 'linear-gradient(180deg, #16212E 0%, #16212E 88%, rgba(22,33,46,0.92) 100%)',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
          transition: 'background 0.5s ease-out, box-shadow 0.5s ease-out',
        }}
      >
        <div className="h-[73px] px-4 xl:px-8 flex items-center z-20 relative max-w-[1440px] mx-auto">
          {/* Logo - Shopping bag with S inside + Strug (like reference) */}
          <Link href="/" className="inline-flex items-center shrink-0 mr-16 transition-opacity duration-200 ease-out hover:opacity-90 active:opacity-95">
            <span className="relative inline-flex items-center justify-center w-8 h-8 mr-2 text-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="absolute text-[11px] font-normal text-white leading-none mt-0.5" style={{ fontFamily: 'inherit' }}>S</span>
            </span>
            <span className="text-xl font-normal text-white tracking-tight">Strug</span>
          </Link>

          {/* Desktop Navigation - Sell, Manage, Integrate, Migrate */}
          <nav className="lg:flex hidden h-full items-center" aria-label="Main">
            <ul className="flex h-full items-center">
              {Object.entries(navItemsWithDropdown).map(([key, items]) => (
                <li key={key} className="mr-8 text-base relative group">
                  <button
                    className="bg-transparent font-normal flex items-center h-full transition-opacity duration-200 ease-out hover:opacity-90"
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{key}</span>
                    <ChevronDown open={openDropdown === key} />
                  </button>
                  <ul
                    className={`absolute top-[80px] z-[21] py-2 min-w-[240px] bg-white text-black rounded-xl shadow-lg whitespace-nowrap transition-all duration-200 ease-out origin-top ${
                      openDropdown === key
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-1 pointer-events-none invisible'
                    }`}
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {items.map((item, idx) => (
                      <li key={idx} className={idx === 0 ? 'border-b border-gray-100' : ''}>
                        <Link
                          href={item.href}
                          className="inline-block py-2.5 px-4 w-full text-[0.9375rem] font-medium text-gray-800 hover:bg-gray-50 hover:text-black transition-colors duration-200 ease-out rounded-t first:rounded-t-xl"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="mr-8 text-base">
                <Link href="#" className="flex items-center h-full hover:underline font-normal transition-opacity duration-200 ease-out hover:opacity-90">
                  Migrate
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Platform + Start for free */}
          <div className="ml-auto flex items-center">
            <div className="lg:flex hidden items-center mr-6">
              <div className="relative group">
                <button
                  className="font-normal flex items-center hover:underline transition-opacity duration-200 ease-out hover:opacity-90"
                  onMouseEnter={() => setOpenDropdown('Platform')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>Platform</span>
                  <ChevronDown open={openDropdown === 'Platform'} />
                </button>
                <ul
                  className={`absolute top-[80px] right-0 z-[21] py-2 min-w-[240px] bg-white text-black rounded-xl shadow-lg whitespace-nowrap transition-all duration-200 ease-out origin-top-right ${
                    openDropdown === 'Platform'
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-1 pointer-events-none invisible'
                  }`}
                  onMouseEnter={() => setOpenDropdown('Platform')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {platformItems.map((item, idx) => (
                    <li key={idx} className={idx === 0 ? 'border-b border-gray-100' : ''}>
                      <Link
                        href={item.href}
                        className="inline-block py-2.5 px-4 w-full text-[0.9375rem] font-medium text-gray-800 hover:bg-gray-50 hover:text-black transition-colors duration-200 ease-out rounded-t first:rounded-t-xl"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="lg:flex hidden items-center">
              <li>
                <Link
                  href="#contact-sales"
                  className="inline-block px-5 py-2.5 rounded-full text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-out font-normal whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start for free
                </Link>
              </li>
            </ul>

            {/* Mobile Menu */}
            <ul className="flex items-center lg:hidden mr-[-15px]">
              <li>
                <Link href="#contact-sales" className="whitespace-nowrap hover:underline font-normal text-white pr-4 transition-opacity duration-200 ease-out hover:opacity-90">
                  Start for free
                </Link>
              </li>
              <li>
                <button
                  className="flex h-12 w-12 cursor-pointer select-none flex-col items-center justify-center gap-1.5 transition-opacity duration-200 hover:opacity-90"
                  aria-label="Menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <div className={`h-0.5 w-[1.125rem] bg-white rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <div className={`h-0.5 w-[1.125rem] bg-white rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                  <div className={`h-0.5 w-[1.125rem] bg-white rounded-full transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — slide in from right with smooth transition */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#16212E] text-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-[73px] container flex items-center border-b border-white/20 transition-colors duration-200">
            <Link href="/" className="inline-flex items-center shrink-0 mr-16">
              <span className="relative inline-flex items-center justify-center w-8 h-8 mr-2 text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="absolute text-[11px] font-normal text-white leading-none mt-0.5">S</span>
              </span>
              <span className="text-xl font-normal text-white tracking-tight">Strug</span>
            </Link>
            <button
              className="ml-auto flex h-12 w-12 cursor-pointer flex-col items-center justify-center text-white/90 hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="text-2xl leading-none transition-transform duration-200 hover:scale-110">×</span>
            </button>
          </div>
          <nav className="p-4">
            {Object.entries(navItemsWithDropdown).map(([key, items]) => (
              <div key={key} className="mb-6">
                <h3 className="text-xl font-normal mb-3">{key}</h3>
                <ul className="pl-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <Link href={item.href} className="text-lg hover:underline transition-opacity duration-200 hover:opacity-90" onClick={() => setMobileMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mb-6">
              <h3 className="text-xl font-normal mb-3">Platform</h3>
              <ul className="pl-3">
                {platformItems.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <Link href={item.href} className="text-lg hover:underline transition-opacity duration-200 hover:opacity-90" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
