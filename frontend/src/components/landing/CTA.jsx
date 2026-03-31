import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ctaData } from '../../data/mockData';

const CTA = ({ onCtaClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{ctaData.title}</h2>
          <p className="cta-subtitle">{ctaData.subtitle}</p>
          
          <Button 
            onClick={onCtaClick}
            className="cta-button"
            size="lg"
          >
            {ctaData.buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="cta-features">
            {ctaData.secondaryText.split(' • ').map((text, index) => (
              <div key={index} className="cta-feature-item">
                <CheckCircle2 className="w-4 h-4" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
