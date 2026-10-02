import React from 'react';
import SectionLabel from '../components/ui/SectionLabel';

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-6 relative bg-[#0A0B10] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <SectionLabel className="mb-4">AGENCY IMPACT</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-14">
          Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3D] to-[#22D3EE]">Excellence</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
          {[
            { number: '150+', label: 'Projects Delivered', desc: 'Across 14 countries' },
            { number: '99.9%', label: 'Uptime SLA', desc: 'Enterprise reliability' },
            { number: '<12ms', label: 'Interaction Latency', desc: 'GSAP 60fps locked' },
            { number: '4.9/5', label: 'Client Satisfaction', desc: 'Top tier feedback' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center border border-white/10 hover:border-[#C6FF3D]/30 transition-all group"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#C6FF3D] font-mono tracking-tight drop-shadow-[0_0_15px_rgba(198,255,61,0.3)] group-hover:scale-105 transition-transform">
                {item.number}
              </span>
              <span className="text-white text-sm font-semibold mt-3">
                {item.label}
              </span>
              <span className="text-slate-500 text-xs font-mono mt-1">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
