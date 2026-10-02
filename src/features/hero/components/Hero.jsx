import React, { useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroHeading from './HeroHeading';
import HeroStats from './HeroStats';
import HeroVisual from './HeroVisual';
import ScrollIndicator from '../../../components/ui/ScrollIndicator';
import { HERO_DATA } from '../data/heroData';
import { useHeroAnimation } from '../hooks/useHeroAnimation';

const Hero = () => {
  // DOM element refs for GSAP ScrollTrigger orchestration
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);
  const carRef = useRef(null);
  const trackRef = useRef(null);
  const bgRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Initialize GSAP intro & scroll-driven car animations
  useHeroAnimation({
    heroRef,
    headingRef,
    statsRef,
    visualRef,
    carRef,
    trackRef,
    bgRef,
    scrollIndicatorRef,
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-24 md:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-slate-950"
    >
      {/* 1. Background Layer */}
      <HeroBackground ref={bgRef} />

      {/* Hero Main Content Shell */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 my-auto z-10">
        {/* 2. Main Headline (W E L C O M E   I T Z F I Z Z) & Subheading */}
        <HeroHeading
          ref={headingRef}
          badge={HERO_DATA.badge}
          headline={HERO_DATA.headline}
          subheading={HERO_DATA.subheading}
        />

        {/* 3. Interactive Test Track & Real Car Visual */}
        <HeroVisual
          ref={visualRef}
          carRef={carRef}
          trackRef={trackRef}
        />

        {/* 4. Statistics Cards */}
        <HeroStats ref={statsRef} stats={HERO_DATA.stats} />
      </div>

      {/* 5. Scroll Indicator */}
      <div className="z-20 mt-4 sm:mt-6">
        <ScrollIndicator ref={scrollIndicatorRef} />
      </div>
    </section>
  );
};

export default Hero;