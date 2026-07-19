import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import Button from './Button';
import TricolorStrip from './TricolorStrip';

type ServiceCardProps = {
  image?: string;
  imageAlt?: string;
  imageLoading?: 'eager' | 'lazy';
  imageFetchPriority?: 'high' | 'low' | 'auto';
  title: string;
  description?: string;
  price?: string;
  cta?: string;
  href?: string;
  hover?: boolean;
  imageAspectRatio?: string;
  class?: string;
};

const transition = {
  duration: 0.82,
  ease: [0.25, 0.1, 0.25, 1] as const
};

const contentTransition = {
  duration: 0.66,
  ease: [0.25, 0.1, 0.25, 1] as const
};

export default function ServiceCardMotion({
  image,
  imageAlt = '',
  imageLoading = 'lazy',
  imageFetchPriority = 'auto',
  title,
  description,
  price,
  cta = 'Services Detail',
  href = '#',
  hover = true,
  imageAspectRatio = '367 / 352',
  class: className = ''
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const motionTransition = reduceMotion ? { duration: 0 } : transition;

  return (
    <article
      className={['service-card', className].filter(Boolean).join(' ')}
      data-strip-trigger
      style={{ '--service-card-image-ratio': imageAspectRatio } as React.CSSProperties}
    >
      <a href={href} className="service-card__link-overlay" aria-label={`View details for ${title}`} style={{ position: 'absolute', inset: 0, zIndex: 10 }}></a>
      <div className="service-card__media">
        {image ? (
          <motion.img
            src={image}
            alt={imageAlt}
            loading={imageLoading}
            fetchPriority={imageFetchPriority}
            decoding="async"
            whileHover={{ scale: 1.04 }}
            transition={motionTransition}
          />
        ) : (
          <div className="service-card__placeholder" aria-label="Service image placeholder" role="img">Service image</div>
        )}
      </div>

      <div className="service-card__content">
        {price && <p className="service-card__price">{price}</p>}
        <h3>{title}</h3>
        {description && <p className="service-card__description">{description}</p>}
        <div className="service-card__cta-clip" style={{ marginTop: '0.25rem' }}>
          <div className="service-card__cta">
            <Button href={href} variant="primary" label={cta} hoverLabel={cta} tabIndex={0} />
          </div>
        </div>
      </div>

      <TricolorStrip className="service-card__rule" />
    </article>
  );
}
