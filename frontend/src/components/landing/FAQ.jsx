import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { faqData } from '../../data/mockData';

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="section-container-narrow">
        <div className="section-header">
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur Medisync
          </p>
        </div>
        
        <Accordion type="single" collapsible className="faq-accordion">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="faq-item">
              <AccordionTrigger className="faq-question">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="faq-answer">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
