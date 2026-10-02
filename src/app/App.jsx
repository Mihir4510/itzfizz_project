import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import Services from '../sections/Services';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import Footer from '../components/layout/Footer';
import { useLenis } from '../hooks/useLenis';
import './app.css';

function App() {
  // Initialize Lenis smooth scrolling integrated with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="min-h-screen bg-[#0A0B10] text-slate-100 flex flex-col font-sans selection:bg-[#C6FF3D] selection:text-black">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Core Scroll-Driven Hero Feature */}
        <Hero />

        {/* Follow-up Content Showcase Sections */}
        <Services />
        <StatsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
