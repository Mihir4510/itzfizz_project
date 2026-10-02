import React from 'react';
import Button from '../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative bg-gradient-to-b from-[#0A0B10] via-[#08090D] to-[#050608] border-t border-white/5">
      <div className="max-w-4xl mx-auto rounded-3xl glass-panel-lime p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C6FF3D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#22D3EE]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C6FF3D]/10 border border-[#C6FF3D]/25 text-[#C6FF3D] text-xs font-mono font-semibold tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START THE ENGINE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Ready to transform your digital experience?
        </h2>
        <p className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed font-normal">
          Let’s collaborate to build high-performance scroll-driven web experiences that captivate your users from the first frame.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
          <Button variant="primary" size="lg" icon={ArrowRight}>
            Start Your Project
          </Button>
          <Button variant="secondary" size="lg" href="#services">
            Explore Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
