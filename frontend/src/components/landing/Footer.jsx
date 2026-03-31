import React from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <Calendar className="logo-icon" />
              <span className="logo-text">Medisync</span>
            </div>
            <p className="footer-description">
              La solution SaaS pour automatiser la planification de vos équipes soignantes. 
              Conforme CCN 51 et RGPD.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Solution</h4>
            <ul className="footer-links">
              <li><a href="#benefits">Bénéfices</a></li>
              <li><a href="#how-it-works">Comment ça marche</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Entreprise</h4>
            <ul className="footer-links">
              <li><a href="#about">À propos</a></li>
              <li><a href="#security">Sécurité</a></li>
              <li><a href="#legal">Mentions légales</a></li>
              <li><a href="#privacy">Confidentialité</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail className="w-4 h-4" />
                <span>contact@medisync.fr</span>
              </li>
              <li>
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li>
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Medisync. Tous droits réservés.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">🔒 RGPD</span>
            <span className="footer-badge">🏥 HDS</span>
            <span className="footer-badge">✓ CCN 51</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
