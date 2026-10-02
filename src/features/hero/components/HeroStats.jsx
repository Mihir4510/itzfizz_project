import React, { forwardRef } from 'react';

const HeroStats = forwardRef(({ stats = [], className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full max-w-5xl mx-auto px-4 z-10 ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id || stat.label}
            className="glass-panel glass-panel-hover p-5 md:p-6 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left border border-white/10 group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-indigo-300 transition-all font-mono tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-sm md:text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-xs text-slate-400 mt-1 hidden md:block">
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

HeroStats.displayName = 'HeroStats';

export default HeroStats;
