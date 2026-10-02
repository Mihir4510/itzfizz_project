import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../features/hero/components/Hero';
import Services from '../sections/Services';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';
import Footer from '../components/layout/Footer';
import './app.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <Hero />
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
