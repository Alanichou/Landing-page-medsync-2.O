import React, { useState } from 'react';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Benefits from './components/landing/Benefits';
import HowItWorks from './components/landing/HowItWorks';
import Testimonials from './components/landing/Testimonials';
import Pricing from './components/landing/Pricing';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';
import Footer from './components/landing/Footer';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import './styles/landing.css';

function App() {
  const handleDemoRequest = () => {
    // Mock demo request - will be replaced with actual form/backend integration
    toast.success('Demande de démo envoyée !', {
      description: 'Notre équipe vous contactera sous 24h pour planifier votre démonstration personnalisée.',
      duration: 5000,
    });
    console.log('Demo request submitted');
  };

  const handlePricingClick = () => {
    // Smooth scroll to pricing section
    const pricingSection = document.querySelector('.pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Header onCtaClick={handleDemoRequest} />
      
      <main>
        <Hero 
          onCtaClick={handleDemoRequest}
          onSecondaryClick={handlePricingClick}
        />
        
        <section id="benefits">
          <Benefits />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="pricing">
          <Pricing onCtaClick={handleDemoRequest} />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
        
        <CTA onCtaClick={handleDemoRequest} />
      </main>
      
      <Footer />
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
