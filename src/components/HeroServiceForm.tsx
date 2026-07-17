import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useEffect } from 'react';
import Button from './Button';
import IconButton from './IconButton';

type HeroServiceFormProps = {
  closeIcon: string;
};

const spring = {
  stiffness: 55,
  damping: 18,
  mass: 0.85
};

export default function HeroServiceForm({ closeIcon }: HeroServiceFormProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerRotate = useMotionValue(0);
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);
  const rotate = useSpring(pointerRotate, spring);

  useEffect(() => {
    const form = document.querySelector('.hero__form-anchor');
    const hero = form?.closest('.hero');
    const finePointer = window.matchMedia('(pointer: fine)');

    if (!hero || reduceMotion || !finePointer.matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const normalizedX = Math.max(-1, Math.min(1, (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)));
      const normalizedY = Math.max(-1, Math.min(1, (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)));

      pointerX.set(normalizedX * 8);
      pointerY.set(normalizedY * 6);
      pointerRotate.set(normalizedX * 0.4);
    };

    const settle = () => {
      pointerX.set(0);
      pointerY.set(0);
      pointerRotate.set(0);
    };

    hero.addEventListener('pointermove', onPointerMove as EventListener);
    hero.addEventListener('pointerleave', settle);

    return () => {
      hero.removeEventListener('pointermove', onPointerMove as EventListener);
      hero.removeEventListener('pointerleave', settle);
    };
  }, [pointerRotate, pointerX, pointerY, reduceMotion]);

  return (
    <motion.div className="hero__form-anchor" style={reduceMotion ? undefined : { x, y, rotate }}>
      <motion.aside
        className="hero__form"
        aria-label="Request a Service"
        animate={reduceMotion ? undefined : {
          y: [-3, 4, -3],
          rotate: [-0.12, 0.12, -0.12]
        }}
        transition={{
          duration: 6.8,
          ease: 'easeInOut',
          repeat: Infinity
        }}
      >
        <div className="hero__form-head">
          <h2>Request a Service</h2>
        </div>
        <IconButton className="hero__form-close" iconSrc={closeIcon} label="Close request form" />

        <form id="request-service-form" className="hero__form-fields">
          <label className="field" htmlFor="name">
            <span className="sr-only">Your name</span>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </label>
          <label className="field" htmlFor="email">
            <span className="sr-only">Email</span>
            <input id="email" name="email" type="email" placeholder="Email" />
          </label>
          <label className="field" htmlFor="phone">
            <span className="sr-only">Phone number</span>
            <input id="phone" name="phone" type="text" placeholder="Phone number" />
          </label>
          <label className="field" htmlFor="service">
            <span className="sr-only">Choose a service</span>
            <input id="service" name="service" type="text" placeholder="Choose a service" />
          </label>
        </form>
        <Button className="hero__submit" variant="primary" form="request-service-form" type="submit">
          Request Services
        </Button>
      </motion.aside>
    </motion.div>
  );
}
