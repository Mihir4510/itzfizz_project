import React from 'react';
import SectionLabel from '../components/ui/SectionLabel';

const Services = () => {
  const services = [
    {
      title: 'Digital Engineering',
      desc: 'Building ultra-fast, responsive web platforms using React, Vite, and cutting-edge frontend tooling.',
    },
    {
      title: 'Scroll & Motion FX',
      desc: 'Crafting immersive scroll-driven animations with GSAP and WebGL to captivate audience attention.',
    },
    {
      title: 'UI/UX Architecture',
      desc: 'Designing sleek dark-mode design systems, custom components, and high-converting user interfaces.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <SectionLabel className="mb-4">WHAT WE DO</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Engineered for <span className="text-cyan-400">Peak Performance</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mb-12 text-sm md:text-base">
          We combine artistic visual aesthetics with robust frontend engineering to build state-of-the-art web apps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/10 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
