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
  const [isTouch, setIsTouch] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover)');
    const update = () => setIsTouch(!media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const isExpanded = isTouch || (hover && isActive);
  const motionTransition = reduceMotion ? { duration: 0 } : transition;
  const resolvedContentTransition = reduceMotion ? { duration: 0 } : contentTransition;

  return (
    <article
      className={['service-card', hover && 'service-card--interactive', className].filter(Boolean).join(' ')}
      data-strip-trigger
      style={{ '--service-card-image-ratio': imageAspectRatio } as React.CSSProperties}
      onMouseEnter={() => hover && setIsActive(true)}
      onMouseLeave={() => hover && setIsActive(false)}
      onFocusCapture={() => hover && setIsActive(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsActive(false);
      }}
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
            animate={{ scale: isExpanded ? 1 : 1.04 }}
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
        <motion.div
          className="service-card__cta-clip"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, marginTop: isExpanded ? '0.25rem' : 0 }}
          transition={resolvedContentTransition}
          aria-hidden={!isExpanded}
        >
          <motion.div
            className="service-card__cta"
            initial={false}
            animate={{ y: isExpanded ? 0 : 72 }}
            transition={resolvedContentTransition}
          >
            <Button href={href} variant="primary" label={cta} hoverLabel={cta} tabIndex={isExpanded ? 0 : -1} />
          </motion.div>
        </motion.div>
      </div>

      <TricolorStrip className="service-card__rule" />
    </article>
  );
}
