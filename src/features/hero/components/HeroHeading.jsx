import React, { forwardRef } from 'react';
import SectionLabel from '../../../components/ui/SectionLabel';

const HeroHeading = forwardRef(
  (
    {
      badge = 'NEXT-GEN DIGITAL EXPERIENCE',
      headline = 'W E L C O M E   I T Z F I Z Z',
      subheading = 'Engineering high-performance digital products, interactive scroll experiences, and futuristic web architectures.',
      className = '',
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col items-center text-center max-w-4xl mx-auto px-4 z-10 ${className}`}
      >
        {/* Section Badge */}
        {badge && <SectionLabel className="mb-6">{badge}</SectionLabel>}

        {/* Main Headline with wide letter spacing */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.35em] text-white uppercase font-sans leading-tight md:leading-tight drop-shadow-lg select-none mb-6">
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed tracking-wide mb-2 drop-shadow-sm">
          {subheading}
        </p>
      </div>
    );
  }
);

HeroHeading.displayName = 'HeroHeading';

export default HeroHeading;
