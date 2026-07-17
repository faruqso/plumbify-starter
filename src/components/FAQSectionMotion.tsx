import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { ServiceFaq } from '../data/services';

export default function FAQSectionMotion({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="service-faq__list-interactive">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`service-faq__item-interactive ${isOpen ? 'is-open' : ''}`}>
            <button 
              className="service-faq__summary" 
              onClick={() => toggleOpen(index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <motion.div 
                className="service-faq__icon"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Smooth chevron icon mimicking Hugeicons */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="service-faq__answer-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="service-faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
