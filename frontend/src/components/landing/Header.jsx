import React from 'react';
import { Button } from '../ui/button';
import { Calendar, Menu } from 'lucide-react';

const Header = ({ onCtaClick }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo">
          <Calendar className="logo-icon" />
          <span className="logo-text">Medisync</span>
        </div>
        
        <nav className="header-nav">
          <a href="#benefits" className="nav-link">Bénéfices</a>
          <a href="#how-it-works" className="nav-link">Comment ça marche</a>
          <a href="#testimonials" className="nav-link">Témoignages</a>
          <a href="#pricing" className="nav-link">Tarifs</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
        
        <div className="header-actions">
          <Button 
            onClick={onCtaClick}
            className="header-cta"
          >
            Demander une démo
          </Button>
          <button className="mobile-menu-button">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
