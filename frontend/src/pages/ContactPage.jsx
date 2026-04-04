import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Calendar, ArrowLeft, Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      employeeCount: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error('Erreur', {
        description: 'Veuillez remplir tous les champs obligatoires.',
      });
      setIsSubmitting(false);
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Erreur', {
        description: 'Veuillez entrer une adresse email valide.',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulation d'envoi (MOCK - sera remplacé par un vrai backend)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      toast.success('Demande envoyée avec succès !', {
        description: 'Notre équipe vous contactera sous 24h pour planifier votre démonstration personnalisée.',
        duration: 6000,
      });

      setIsSubmitting(false);
      
      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        employeeCount: '',
        message: ''
      });

      // Rediriger vers la page d'accueil après 2 secondes
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <div className="contact-header-container">
          <div className="header-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Calendar className="logo-icon" />
            <span className="logo-text">Medisync</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="back-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="contact-main">
        <div className="contact-container">
          {/* Left Column - Info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h1 className="contact-title">Demander une démonstration gratuite</h1>
              <p className="contact-description">
                Découvrez comment Medisync peut transformer la gestion de vos plannings. 
                Notre équipe vous recontactera sous 24h pour organiser une démonstration personnalisée.
              </p>

              <div className="contact-benefits">
                <div className="contact-benefit-item">
                  <CheckCircle2 className="benefit-check-icon" />
                  <span>Démonstration personnalisée de 30 minutes</span>
                </div>
                <div className="contact-benefit-item">
                  <CheckCircle2 className="benefit-check-icon" />
                  <span>Réponses à toutes vos questions</span>
                </div>
                <div className="contact-benefit-item">
                  <CheckCircle2 className="benefit-check-icon" />
                  <span>Sans engagement</span>
                </div>
                <div className="contact-benefit-item">
                  <CheckCircle2 className="benefit-check-icon" />
                  <span>Analyse de vos besoins spécifiques</span>
                </div>
              </div>

              <div className="contact-details">
                <h3 className="contact-details-title">Vous préférez nous appeler ?</h3>
                <div className="contact-detail-item">
                  <Phone className="contact-icon" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="contact-detail-item">
                  <Mail className="contact-icon" />
                  <span>contact@medisync.fr</span>
                </div>
                <div className="contact-detail-item">
                  <MapPin className="contact-icon" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="firstName" className="form-label">
                    Prénom <span className="required">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jean"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="lastName" className="form-label">
                    Nom <span className="required">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Dupont"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <Label htmlFor="email" className="form-label">
                    Email professionnel <span className="required">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@clinique.fr"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="phone" className="form-label">
                    Téléphone <span className="required">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <Label htmlFor="company" className="form-label">
                  Nom de votre établissement
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Clinique Saint-Martin"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="employeeCount" className="form-label">
                  Nombre d'employés
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.employeeCount}>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="Sélectionnez une fourchette" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employés</SelectItem>
                    <SelectItem value="11-20">11-20 employés</SelectItem>
                    <SelectItem value="21-35">21-35 employés</SelectItem>
                    <SelectItem value="36-50">36-50 employés</SelectItem>
                    <SelectItem value="50+">Plus de 50 employés</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <Label htmlFor="message" className="form-label">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de vos besoins spécifiques..."
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <Button 
                type="submit" 
                className="form-submit-button"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="form-footer-text">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                Vos données sont protégées conformément au RGPD.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
