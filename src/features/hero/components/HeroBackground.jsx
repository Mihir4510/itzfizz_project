import React, { forwardRef } from 'react';

const HeroBackground = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Dark Ambient Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a0e17] to-slate-950" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Cyan Light Blob */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full hero-glow-cyan blur-[120px] opacity-60" />

      {/* Indigo/Violet Light Blob */}
      <div className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] rounded-full hero-glow-purple blur-[140px] opacity-50" />

      {/* Subtle Top Spotlight Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-70" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90" />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';

export default HeroBackground;
