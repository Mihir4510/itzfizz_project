import React from 'react';
import Button from '../components/ui/Button';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-10 md:p-16 border border-cyan-500/30 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Ready to transform your digital presence?
        </h2>
        <p className="text-slate-300 max-w-xl text-base md:text-lg font-light">
          Let’s collaborate to build high-converting scroll experiences and modern frontend applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button variant="primary" size="lg">
            Start Your Project
          </Button>
          <Button variant="secondary" size="lg">
            Explore Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
