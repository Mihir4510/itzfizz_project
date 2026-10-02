import React, { forwardRef } from 'react';

const HEADLINE_TEXT = 'WELCOME ITZFIZZ';

/**
 * Headline Component
 * Each character wrapped in its own <span> for per-letter GSAP animation.
 * Letters start dim (opacity 0.08) and are "unveiled" by the car passing over them.
 * The headline sits at z-10 so the car (z-20) drives physically OVER the text.
 */
const Headline = forwardRef(({ subtitle = 'SCROLL-DRIVEN MOTION EXPERIENCE' }, ref) => {
  const characters = HEADLINE_TEXT.split('');

  return (
    <div ref={ref} className="relative z-10 w-full select-none flex flex-col items-center">
      {/* Screen-reader accessible heading */}
      <h1 className="sr-only" aria-label="Welcome Itzfizz">WELCOME ITZFIZZ</h1>

      {/* Visual letter-spaced headline — exact same vertical band as the car lane */}
      <div className="relative flex justify-center items-center py-2 sm:py-4">
        <div
          aria-hidden="true"
          className="headline-letters-row font-heading font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] leading-none flex justify-center items-center whitespace-nowrap"
          style={{ fontSize: 'clamp(2.2rem, 6.2vw, 6.2rem)' }}
        >
          {characters.map((char, i) => {
            if (char === ' ') {
              return (
                <span
                  key={`space-${i}`}
                  className="inline-block w-3 sm:w-5 md:w-8"
                >
                  &nbsp;
                </span>
              );
            }
            return (
              <span
                key={`letter-${i}`}
                data-letter-index={i}
                className="headline-letter inline-block text-slate-300 font-extrabold"
                style={{
                  opacity: 0.08,
                  willChange: 'transform, opacity, filter, color, textShadow',
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {/* Subheading Badge */}
      <div className="mt-3 sm:mt-5 flex justify-center">
        <span className="subheading-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#C6FF3D] bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 backdrop-blur-md shadow-[0_0_20px_rgba(198,255,61,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
          {subtitle}
        </span>
      </div>
    </div>
  );
});

Headline.displayName = 'Headline';

export default Headline;
