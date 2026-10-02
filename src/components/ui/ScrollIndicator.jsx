import React, { forwardRef } from 'react';

const ScrollIndicator = forwardRef(({ className = '' }, ref) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScroll();
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleScroll}
      onKeyDown={handleKeyDown}
      className={`flex flex-col items-center justify-center gap-2 cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg p-1 transition-all ${className}`}
      aria-label="Scroll down to explore services"
    >
      <span className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
        Scroll to Explore
      </span>
      <div className="w-8 h-8 rounded-full border border-slate-700 group-hover:border-cyan-500/50 flex items-center justify-center bg-slate-900/40 text-slate-400 group-hover:text-cyan-400 transition-all duration-300">
        <span className="text-sm transform group-hover:translate-y-0.5 transition-transform" aria-hidden="true">
          ↓
        </span>
      </div>
    </button>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
