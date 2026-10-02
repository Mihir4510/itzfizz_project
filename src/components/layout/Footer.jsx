import React from 'react';
import { SITE_CONFIG } from '../../constants/siteConfig';

const CURRENT_YEAR = 2026;

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-white font-bold text-lg tracking-wider">
            {SITE_CONFIG.name.toUpperCase()}
          </span>
          <p className="text-xs text-slate-500 max-w-sm">
            Interactive Scroll-Driven Hero Animation — Frontend Assignment Demo.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation" className="flex items-center gap-6 text-sm">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          © {CURRENT_YEAR} Itzfizz Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
