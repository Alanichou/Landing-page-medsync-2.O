import React from 'react';
import { Clock, Shield, Smartphone, Users, TrendingUp, Bell } from 'lucide-react';
import { benefitsData } from '../../data/mockData';

const iconMap = {
  Clock,
  Shield,
  Smartphone,
  Users,
  TrendingUp,
  Bell
};

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Pourquoi choisir Medisync ?</h2>
          <p className="section-subtitle">
            Une solution complète qui transforme la gestion de vos plannings
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div key={index} className="benefit-card">
                <div 
                  className="benefit-icon"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
