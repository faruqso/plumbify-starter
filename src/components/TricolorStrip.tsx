import { useEffect, useRef, useState } from 'react';

type TricolorStripProps = {
  className?: string;
};

export default function TricolorStrip({ className = '' }: TricolorStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [pulseId, setPulseId] = useState(0);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest('[data-strip-trigger]');
      if (trigger?.contains(stripRef.current)) setPulseId((current) => current + 1);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={stripRef} className={`tricolor-strip ${className}`.trim()} aria-hidden="true">
      <span></span>
      <span key={`pulse-${pulseId}`} className={pulseId ? 'tricolor-strip__center--pulsing' : ''}></span>
      <span></span>
    </div>
  );
}
