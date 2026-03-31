import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { heroData } from '../../data/mockData';

const Hero = ({ onCtaClick, onSecondaryClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <CheckCircle2 className="w-4 h-4" />
            <span>Solution certifiée pour le secteur médical</span>
          </div>
          
          <h1 className="hero-title">
            {heroData.title}
          </h1>
          
          <p className="hero-subtitle">
            {heroData.subtitle}
          </p>
          
          <div className="hero-stats">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="hero-cta">
            <Button 
              onClick={onCtaClick}
              className="cta-primary"
              size="lg"
            >
              {heroData.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={onSecondaryClick}
              variant="outline"
              className="cta-secondary"
              size="lg"
            >
              {heroData.ctaSecondary}
            </Button>
          </div>
          
          <div className="hero-trust">
            <div className="trust-badges">
              <span className="trust-badge">🔒 RGPD Conforme</span>
              <span className="trust-badge">✓ CCN 51 Intégré</span>
              <span className="trust-badge">🏥 HDS Certifié</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={heroData.heroImage} 
              alt="Professionnel de santé utilisant Medisync"
              className="main-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
