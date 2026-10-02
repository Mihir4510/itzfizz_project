import React, { forwardRef } from 'react';

const HeroVisual = forwardRef(({ carRef, trackRef }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full max-w-5xl mx-auto py-4 md:py-6"
    >
      {/* Test Track Card Container */}
      <div
        ref={trackRef}
        className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-950/90 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"
      >
        {/* Ambient Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-purple-950/40 pointer-events-none" />

        {/* Outer Glow Highlight */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 blur-xl pointer-events-none" />

        {/* Road Surface Track */}
        <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-1/2 -translate-y-1/2 h-24 sm:h-28 md:h-32 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-inner overflow-hidden">
          {/* Subtle Asphalt Grid Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* Glowing Road Center Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

          {/* Track Edge Neon Accent Lines */}
          <div className="absolute left-0 right-0 top-1.5 border-t border-cyan-500/30" />
          <div className="absolute left-0 right-0 bottom-1.5 border-b border-purple-500/30" />

          {/* Soft Surface Ambient Glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.15)] pointer-events-none" />
        </div>

        {/* START Marker */}
        <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              START
            </span>
            <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] border-2 border-slate-950" />
          </div>
        </div>

        {/* FINISH Marker */}
        <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]">
              FINISH
            </span>
            <div className="h-3.5 w-3.5 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.9)] border-2 border-slate-950" />
          </div>
        </div>

        {/* Car Outer Positioning Wrapper (Handles -translate-y-1/2 CSS layout) */}
        <div className="absolute left-[6%] sm:left-[8%] top-1/2 -translate-y-1/2 z-30 pointer-events-none">
          {/* Car GSAP Animation Target (Animates 'x' transform ONLY via GSAP) */}
          <div ref={carRef} className="will-change-transform">
            <img
              src="/images/Hero/car.png"
              alt="Itzfizz Futuristic Concept Car"
              onError={(e) => {
                // Fallback if browser requires png format
                e.currentTarget.src = '/images/Hero/car.png';
              }}
              className="w-32 sm:w-48 md:w-60 lg:w-64 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(6,182,212,0.45)] select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Track Information Bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase select-none">
          <span className="text-cyan-400 font-semibold">START</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">SCROLL TO DRIVE</span>
          <span className="text-slate-600">•</span>
          <span className="text-purple-400 font-semibold">FINISH</span>
        </div>
      </div>
    </div>
  );
});

HeroVisual.displayName = 'HeroVisual';

export default HeroVisual;