import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Benefits from './components/landing/Benefits';
import HowItWorks from './components/landing/HowItWorks';
import Testimonials from './components/landing/Testimonials';
import Pricing from './components/landing/Pricing';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';
import Footer from './components/landing/Footer';
import ContactPage from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';
import './styles/landing.css';
import './styles/contact.css';

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();

  const handleDemoRequest = () => {
    navigate('/contact');
  };

  const handlePricingClick = () => {
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
    </div>
  );
};

// Main App Component with Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
