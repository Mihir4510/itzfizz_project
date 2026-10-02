import React from 'react';
import SectionLabel from '../components/ui/SectionLabel';

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-6 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <SectionLabel className="mb-4">AGENCY IMPACT</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-12">
          Measurable <span className="text-indigo-400">Excellence</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '99.9%', label: 'Uptime SLA' },
            { number: '12ms', label: 'Avg Render Speed' },
            { number: '4.9/5', label: 'Client Satisfaction' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">
                {item.number}
              </span>
              <span className="text-slate-400 text-xs md:text-sm font-medium mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
