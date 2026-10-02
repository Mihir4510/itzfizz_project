import React from 'react';
import SectionLabel from '../components/ui/SectionLabel';
import { Sparkles, Cpu, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Digital Engineering',
      desc: 'High-speed, production-grade web platforms engineered with React, Vite, and modern architecture for instant load times and peak responsiveness.',
      tag: '01 / SPEED',
    },
    {
      icon: Sparkles,
      title: 'Scroll & Motion FX',
      desc: 'Immersive, physics-based scroll-driven animations with GSAP, ScrollTrigger, and Lenis smooth scrolling that keep users deeply engaged.',
      tag: '02 / MOTION',
    },
    {
      icon: Layers,
      title: 'Design Systems',
      desc: 'Bespoke dark-mode UI systems, micro-interactions, responsive typography, and glassmorphic aesthetics that elevate brand authority.',
      tag: '03 / DESIGN',
    },
  ];

  return (
    <section id="services" className="py-28 px-6 relative bg-[#08090D] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C6FF3D]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <SectionLabel className="mb-4">CAPABILITIES</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3D] to-[#22D3EE]">Peak Performance</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-14 text-sm md:text-base leading-relaxed">
          We combine cutting-edge motion choreography with solid frontend foundations to deliver award-winning web experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel-lime p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top glow hover effect */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF3D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 group-hover:bg-[#C6FF3D] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#22D3EE] tracking-widest">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#C6FF3D] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-[#C6FF3D] transition-colors">
                  <span>DISCOVER MORE</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
