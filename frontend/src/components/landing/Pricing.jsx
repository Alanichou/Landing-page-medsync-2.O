import React from 'react';
import { Button } from '../ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { pricingData } from '../../data/mockData';

const Pricing = ({ onCtaClick }) => {
  return (
    <section className="pricing-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Tarifs transparents et accessibles</h2>
          <p className="section-subtitle">
            Choisissez le forfait adapté à la taille de votre structure
          </p>
        </div>
        
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className="pricing-badge">Le plus populaire</div>
              )}
              
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
              </div>
              
              <div className="pricing-price">
                <span className="price-amount">€{plan.price}</span>
                <span className="price-period">/mois</span>
              </div>
              
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">
                    <Check className="w-5 h-5 feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={onCtaClick}
                className={plan.highlighted ? 'pricing-cta-primary' : 'pricing-cta-secondary'}
                size="lg"
              >
                Demander une démo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="pricing-footer">
          <p className="pricing-note">
            💰 <strong>ROI garanti :</strong> Rentabilisez votre investissement en moins d'une semaine
          </p>
          <p className="pricing-note">
            🎓 Formation et support inclus dans tous les forfaits
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
