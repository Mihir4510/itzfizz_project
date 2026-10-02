import React, { useState } from 'react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl bg-[#0D111A]/80 border border-white/10 px-5 py-3 flex items-center justify-between backdrop-blur-xl shadow-lg">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C6FF3D] to-[#22D3EE] flex items-center justify-center font-heading font-black text-black shadow-md shadow-[#C6FF3D]/20 group-hover:scale-105 transition-transform">
            IF
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base md:text-lg tracking-wider text-white uppercase group-hover:text-[#C6FF3D] transition-colors">
              ITZFIZZ
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
              DIGITAL
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#C6FF3D] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#services"
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-black bg-[#C6FF3D] hover:bg-[#b8f52e] shadow-[0_0_15px_rgba(198,255,61,0.3)] transition-all hover:scale-105"
          >
            Explore Experience
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-[#0D111A] rounded-2xl flex flex-col gap-4 border border-white/10 backdrop-blur-xl">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#C6FF3D] text-base font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
