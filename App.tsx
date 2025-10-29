import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { TargetAudience } from './components/TargetAudience';
import { HowItWorks } from './components/HowItWorks';
import { Transformation } from './components/Transformation';
import { About } from './components/About';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-cream font-montserrat text-brand-charcoal">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <TargetAudience />
        <HowItWorks />
        <Transformation />
        <About />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;