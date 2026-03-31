// Mock data for Medisync Landing Page

export const heroData = {
  title: "Simplifiez la planification de vos équipes soignantes",
  subtitle: "Medisync automatise vos plannings, garantit l'équité et la conformité légale, tout en libérant du temps précieux pour vos équipes.",
  ctaPrimary: "Demander une démo gratuite",
  ctaSecondary: "Voir les tarifs",
  heroImage: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa",
  stats: [
    { value: "85%", label: "de temps économisé" },
    { value: "€1850", label: "économisés/mois" },
    { value: "100%", label: "conforme CCN 51" }
  ]
};

export const benefitsData = [
  {
    icon: "Clock",
    title: "Économisez 4h par semaine",
    description: "Fini les week-ends passés sur Excel. Notre IA génère automatiquement des plannings équitables et conformes.",
    color: "#1A8A9A"
  },
  {
    icon: "Shield",
    title: "Conformité garantie",
    description: "Respect automatique de la CCN 51, RGPD et réglementation du travail. Zéro risque juridique.",
    color: "#34C4BB"
  },
  {
    icon: "Smartphone",
    title: "Mobile-first pour vos équipes",
    description: "Vos soignants consultent leurs plannings et posent leurs congés depuis leur téléphone, en toute autonomie.",
    color: "#1A8A9A"
  },
  {
    icon: "Users",
    title: "Équité et transparence",
    description: "Distribution équitable des gardes et plannings. Améliorez la QVT et réduisez le turnover.",
    color: "#34C4BB"
  },
  {
    icon: "TrendingUp",
    title: "ROI immédiat",
    description: "Rentabilisez votre investissement en moins d'une semaine. Réduisez les coûts opérationnels jusqu'à €1850/mois.",
    color: "#1A8A9A"
  },
  {
    icon: "Bell",
    title: "Alertes intelligentes",
    description: "Notifications en temps réel pour les absences, les non-conformités et les besoins en personnel.",
    color: "#34C4BB"
  }
];

export const howItWorksData = [
  {
    step: "1",
    title: "Configuration initiale",
    description: "Paramétrez vos règles de planification, qualifications, et contraintes légales en quelques clics.",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d"
  },
  {
    step: "2",
    title: "Automatisation intelligente",
    description: "Notre IA génère des plannings optimisés, équitables et conformes à la CCN 51.",
    image: "https://images.pexels.com/photos/11198232/pexels-photo-11198232.jpeg"
  },
  {
    step: "3",
    title: "Gestion simplifiée",
    description: "Validez, ajustez et partagez les plannings. Vos équipes accèdent à tout depuis leur mobile.",
    image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd"
  }
];

export const testimonialsData = [
  {
    name: "Laura M.",
    role: "Directrice de clinique privée",
    image: "https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg",
    quote: "Avant Medisync, je passais mes week-ends sur Excel. Maintenant, les plannings se font en 15 minutes. Une révolution pour notre clinique de 30 personnes.",
    rating: 5
  },
  {
    name: "Julien L.",
    role: "Infirmier libéral",
    image: "https://images.unsplash.com/photo-1758204054877-fb1c7ba85ea1",
    quote: "Enfin une solution mobile ! Je consulte mon planning en temps réel et pose mes congés sans appeler ma responsable. C'est transparent et équitable.",
    rating: 5
  },
  {
    name: "Dr. Sophie R.",
    role: "Médecin associée",
    image: "https://images.unsplash.com/photo-1758691462638-c60c83bd7310",
    quote: "La conformité CCN 51 intégrée nous a fait économiser des milliers d'euros en conseil juridique. Et nos équipes sont beaucoup plus sereines.",
    rating: 5
  }
];

export const pricingData = [
  {
    name: "Starter",
    price: "25",
    description: "Pour les petites structures",
    features: [
      "Jusqu'à 15 employés",
      "Planification automatisée",
      "Application mobile",
      "Conformité CCN 51",
      "Support par email"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: "40",
    description: "Pour les cliniques en croissance",
    features: [
      "Jusqu'à 35 employés",
      "Tout du plan Starter",
      "Gestion des gardes avancée",
      "Rapports personnalisés",
      "Support prioritaire",
      "Formation incluse"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "50",
    description: "Pour les grandes structures",
    features: [
      "Jusqu'à 50 employés",
      "Tout du plan Professional",
      "API & intégrations",
      "Compte manager dédié",
      "SLA garantis",
      "Hébergement HDS certifié"
    ],
    highlighted: false
  }
];

export const faqData = [
  {
    question: "Combien de temps prend la mise en place ?",
    answer: "La configuration initiale prend environ 2 heures. Nos équipes vous accompagnent pour paramétrer vos règles de planification. Vous pouvez générer votre premier planning dès le lendemain."
  },
  {
    question: "Medisync est-il conforme à la CCN 51 ?",
    answer: "Oui, absolument. Medisync intègre nativement toutes les règles de la Convention Collective Nationale 51, incluant les temps de repos, gardes obligatoires, et contraintes légales. Nos algorithmes vérifient automatiquement la conformité."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Vos données sont hébergées sur des serveurs HDS (Hébergeur de Données de Santé) certifiés en France. Nous sommes 100% conformes RGPD avec chiffrement de bout en bout."
  },
  {
    question: "Puis-je essayer avant de m'engager ?",
    answer: "Oui ! Nous offrons une démo personnalisée gratuite et un essai de 14 jours sans engagement. Vous pouvez tester toutes les fonctionnalités avec vos propres données."
  },
  {
    question: "Que se passe-t-il si je dépasse le nombre d'employés de mon forfait ?",
    answer: "Vous pouvez passer au forfait supérieur à tout moment. La transition est instantanée et le prix est ajusté au prorata pour le mois en cours."
  },
  {
    question: "Mes équipes ont-elles besoin d'une formation ?",
    answer: "Medisync est conçu pour être intuitif. Pour les gestionnaires, nous offrons une formation de 1h. Pour les soignants, l'application mobile est si simple qu'aucune formation n'est nécessaire."
  }
];

export const featuresData = [
  {
    title: "Dashboard gestionnaire",
    description: "Interface intuitive pour créer, valider et gérer tous vos plannings en quelques clics.",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d"
  },
  {
    title: "Application mobile soignants",
    description: "Vos équipes consultent leur planning, posent leurs congés et reçoivent des notifications en temps réel.",
    image: "https://images.pexels.com/photos/11198232/pexels-photo-11198232.jpeg"
  },
  {
    title: "Algorithme d'équité",
    description: "Distribution automatique et équitable des gardes selon les qualifications et préférences de chacun.",
    image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd"
  }
];

export const ctaData = {
  title: "Prêt à transformer la gestion de vos plannings ?",
  subtitle: "Rejoignez les cliniques qui ont déjà économisé des centaines d'heures avec Medisync.",
  buttonText: "Demander une démo gratuite",
  secondaryText: "Sans engagement • Configuration en 2h • Support inclus"
};
