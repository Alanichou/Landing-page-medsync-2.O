import React from 'react';
import { howItWorksData } from '../../data/mockData';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-subtitle">
            Trois étapes simples pour révolutionner votre planification
          </p>
        </div>
        
        <div className="steps-container">
          {howItWorksData.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number-wrapper">
                <div className="step-number">{step.step}</div>
                {index < howItWorksData.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
              
              <div className="step-content">
                <div className="step-image">
                  <img src={step.image} alt={step.title} />
                  <div className="step-image-overlay"></div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
