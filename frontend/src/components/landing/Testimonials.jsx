import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../data/mockData';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Ils nous font confiance</h2>
          <p className="section-subtitle">
            Découvrez comment Medisync transforme le quotidien des professionnels de santé
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 star-icon" fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
