import React, { useRef } from 'react';
import Headline from './Headline';
import Car from './Car';
import StatsGrid from './StatsGrid';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Component — Pinned 100vh section with scroll-driven car animation.
 *
 * Z-index stack:
 *   z-0  — background ambient glows & lane dashes
 *   z-10 — headline letters ("W E L C O M E   I T Z F I Z Z")
 *   z-20 — car (drives OVER the headline text)
 *   z-30 — stat cards
 *
 * The headline and car share the same vertical band so the car physically
 * covers the letters as it translates horizontally on scroll.
 */
const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const carRef = useRef(null);
  const laneDashesRef = useRef(null);
  const statsGridRef = useRef(null);
  const countersRef = useRef([]);

  useHeroAnimation({
    heroRef,
    headlineRef,
    carRef,
    laneDashesRef,
    statsGridRef,
    countersRef,
  });

  return (
    <section
      ref={heroRef}
      className="hero-section relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-asphalt-grain select-none"
    >
      {/* ===== z-0: Background ambient atmospheric glows ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C6FF3D]/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[280px] bg-[#22D3EE]/[0.06] rounded-full blur-[120px]" />
      </div>

      {/* ===== MAIN CONTENT: vertically stacked, centered ===== */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 px-4 sm:px-6 py-20 sm:py-24">

        {/* ===== Headline + Car Track Row ===== */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* z-0: Lane dashes along the car & headline track */}
          <div className="absolute top-[28%] sm:top-[30%] md:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen pointer-events-none z-0 overflow-hidden">
            <div
              ref={laneDashesRef}
              className="w-[200%] h-[2px] border-t-2 border-dashed border-[#C6FF3D]/25"
              style={{ willChange: 'transform' }}
            />
          </div>

          {/* z-10: Headline text (car drives OVER this) */}
          <Headline ref={headlineRef} subtitle="SCROLL-DRIVEN MOTION EXPERIENCE" />

          {/* z-20: Car — vertically centered directly over the letters row */}
          <div className="absolute top-[28%] sm:top-[30%] md:top-[32%] left-0 -translate-y-1/2 z-20 pointer-events-none w-full">
            <div
              ref={carRef}
              className="absolute -translate-y-1/2"
              style={{
                left: '-30vw',
                willChange: 'transform',
              }}
            >
              <Car />
            </div>
          </div>
        </div>

        {/* ===== z-30: Stat cards ===== */}
        <StatsGrid ref={statsGridRef} countersRef={countersRef} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="scroll-indicator text-[10px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#C6FF3D]/80 animate-pulse">
          SCROLL TO DRIVE
        </span>
        <ChevronDown className="w-4 h-4 text-[#C6FF3D]/60 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
