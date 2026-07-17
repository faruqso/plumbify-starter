import React, { useRef, useState } from 'react';
import type { Testimonial } from '../data/testimonials';

interface Props {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="tmq-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const partial = !filled && rating >= star - 0.5;
        return (
          <svg key={star} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <defs>
              <linearGradient id={`star-${star}-${Math.round(rating * 10)}`}>
                <stop offset={partial ? '50%' : filled ? '100%' : '0%'} stopColor="#f6b613" />
                <stop offset={partial ? '50%' : filled ? '100%' : '0%'} stopColor="#e0e0e0" />
              </linearGradient>
            </defs>
            <polygon
              points="8,1 10.2,6.2 16,6.9 11.8,10.9 13,16.3 8,13.4 3,16.3 4.2,10.9 0,6.9 5.8,6.2"
              fill={filled ? '#f6b613' : partial ? `url(#star-${star}-${Math.round(rating * 10)})` : '#e0e0e0'}
            />
          </svg>
        );
      })}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="tmq-card">
      <div className="tmq-card__quote">"</div>
      <p className="tmq-card__text">{t.content}</p>
      <div className="tmq-card__footer">
        <img className="tmq-card__avatar" src={t.image} alt={t.name} width={48} height={48} />
        <div className="tmq-card__person">
          <strong className="tmq-card__name">{t.name}</strong>
          <span className="tmq-card__role">{t.role}</span>
        </div>
        <div className="tmq-card__badge">
          <StarRating rating={t.rating} />
          <span className="tmq-card__score">{t.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsMarquee({ testimonials }: Props) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate cards for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className="tmq-track-outer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={`tmq-track ${paused ? 'tmq-track--paused' : ''}`}
      >
        {doubled.map((t, i) => (
          <div className="tmq-slide" key={`${t.id}-${i}`}>
            <Card t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
