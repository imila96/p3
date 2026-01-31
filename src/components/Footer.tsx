'use client';

import Link from 'next/link';

export default function Footer() {
  const strugLinks = [
    { label: 'About', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Affiliates', href: '#' },
    { label: 'Legal', href: '#' },
    { label: 'Service Status', href: '#' },
  ];
  const supportLinks = [
    { label: 'Merchant Support', href: '#' },
    { label: 'Strug Help Center', href: '#' },
    { label: 'Hire a Partner', href: '#' },
    { label: 'Strug Academy', href: '#' },
    { label: 'Strug Community', href: '#' },
  ];
  const developersLinks = [
    { label: 'Strug.dev', href: '#' },
    { label: 'API Documentation', href: '#' },
    { label: 'Dev Degree', href: '#' },
  ];
  const productsLinks = [
    { label: 'Shop', href: '#' },
    { label: 'Shop Pay', href: '#' },
    { label: 'Strug Plus', href: '#' },
    { label: 'Strug for Enterprise', href: '#' },
  ];
  const Column = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
    <div>
      <h4 className="text-sm text-white mb-4 font-normal tracking-tight">{title}</h4>
      <ul className="space-y-3">
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-white pt-14 pb-10">
        <div className="site-content flex flex-col items-center w-full">
        {/* Centered content — narrower block + centered flex so items sit in the middle */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Top: Logo + 4 columns — centered as a group */}
          <div className="flex flex-wrap gap-x-12 gap-y-10 pb-10 justify-center">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 mb-2">
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

            <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center">
              <Column title="Strug" links={strugLinks} />
              <Column title="Support" links={supportLinks} />
              <Column title="Developers" links={developersLinks} />
              <Column title="Products" links={productsLinks} />
            </div>
          </div>

          {/* Bottom: separator, legal + social */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <button type="button" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
              </svg>
              <span>Canada</span>
              <span className="text-white/60">|</span>
              <span>English</span>
              <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Your Privacy Choices
              <span className="inline-flex w-5 h-5 rounded bg-blue-600 items-center justify-center text-[10px] text-white" aria-hidden>✓</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Facebook">
              <span className="text-sm font-normal">f</span>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="X">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="YouTube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-3.239.149-4.771 1.699-4.971 4.918-.019.322-.024.636-.024.958 0 .323.005.636.024.958.2 3.219 1.732 4.769 4.971 4.918 1.281.058 1.689.072 4.947.072 3.259 0 3.668-.014 4.948-.072 3.23-.149 4.771-1.699 4.97-4.918.02-.322.024-.636.024-.958 0-.322-.004-.636-.024-.958-.2-3.219-1.732-4.769-4.971-4.918-1.281-.058-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="TikTok">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Pinterest">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
            </Link>
          </div>
          </div>

          <div className="text-center mt-8 text-sm text-white/60">
            © {new Date().getFullYear()} Strug. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
