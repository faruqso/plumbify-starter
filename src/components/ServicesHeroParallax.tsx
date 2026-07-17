import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import Button from './Button';
import { services } from '../data/services';

export default function ServicesHeroParallax() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Different parallax speeds for the floating images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // Map 5 specific services to the 5 nodes
  const parallaxNodes = [
    { idx: 0, y: y1, className: 'parallax-img-1' },
    { idx: 1, y: y2, className: 'parallax-img-2' },
    { idx: 2, y: y3, className: 'parallax-img-3' },
    { idx: 3, y: y4, className: 'parallax-img-4' },
    { idx: 4, y: y5, className: 'parallax-img-5' },
  ];

  const floatingCards = parallaxNodes.map(node => {
    const service = services[node.idx];
    return {
      href: `/services/${service.slug}`,
      src: service.homepageImage,
      alt: service.homepageImageAlt || service.title,
      title: service.shortTitle || service.cardTitle,
      className: node.className,
      y: prefersReducedMotion ? 0 : node.y,
    };
  });

  return (
    <section ref={containerRef} className="services-parallax-hero interactive-grid-hero">
      <div className="services-parallax-hero__content">
        
        {/* Floating Parallax Cards */}
        {floatingCards.map((card, idx) => (
          <motion.a
            key={idx}
            href={card.href}
            className={`parallax-img-wrapper ${card.className}`}
            style={{ y: card.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1 + idx * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <img src={card.src} alt={card.alt} />
            <div className="parallax-img-info">
              <h3>{card.title}</h3>
              <div className="parallax-img-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Center Text Content */}
        <div className="services-parallax-hero__text">
          <motion.p 
            className="services-parallax-hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Plumbify services
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Every plumbing service has its own clear plan.
          </motion.h1>
          
          <motion.div 
            className="services-parallax-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p>
              Choose the service that matches the problem. Each page explains the process, 
              what we check, and how we make the work feel calmer from first visit to final test.
            </p>
            <div className="services-parallax-hero__cta">
              <a href="#all-services" className="services-parallax-hero__link">
                See all services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
