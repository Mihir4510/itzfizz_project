import React from 'react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-white/5 text-slate-400 py-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] shadow-[0_0_8px_#C6FF3D]" />
            <span className="text-white font-heading font-extrabold text-base tracking-wider uppercase">
              {SITE_CONFIG.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm font-sans">
            Scroll-driven interactive car animation built with React, GSAP, ScrollTrigger & Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation" className="flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C6FF3D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] rounded py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs font-mono text-slate-600 text-center md:text-right">
          © {CURRENT_YEAR} ITZFIZZ DIGITAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
