import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../data/testimonials';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialArc({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, total]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index: number): React.CSSProperties => {
    // Calculate shortest distance for wrapping effect
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    
    const scale = Math.max(1 - (absDiff * 0.15), 0.5);
    const opacity = absDiff > 2 ? 0 : Math.max(1 - (absDiff * 0.35), 0.05);
    
    // Mobile responsive transform adjustments
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const xBase = isMobile ? 85 : 115;
    const yCurve = isMobile ? 15 : 25;
    const yQuad = isMobile ? 8 : 12;
    
    const translateX = diff * xBase;
    const translateY = absDiff * yCurve + Math.pow(absDiff, 2) * yQuad;
    const rotate = diff * 6;
    
    const zIndex = total - absDiff;

    return {
      transform: `translate(-50%, -50%) translate(${translateX}%, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity,
      zIndex,
      pointerEvents: absDiff > 1 ? 'none' : 'auto'
    };
  };

  return (
    <div 
      className="testimonial-arc-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="testimonial-arc-wrapper">
        {testimonials.map((t, index) => (
          <article
            key={t.id}
            className={`testimonial-card testimonial-arc-card ${index === activeIndex ? 'is-active' : ''}`}
            style={getCardStyle(index)}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(index);
              }
            }}
          >
            <div className="testimonial-card__top">
              <img className="testimonial-card__avatar" src={t.image} alt={t.name} />
              <div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </div>
            <div className={`testimonial-card__rating ${t.rating < 5 ? 'testimonial-card__rating--yellow' : ''}`}>
              {t.rating.toFixed(1)}
            </div>
            <h4>{t.title}</h4>
            <p>{t.content}</p>
          </article>
        ))}
      </div>
      
      <div className="testimonial-arc-controls">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-arc-dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => handleCardClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
