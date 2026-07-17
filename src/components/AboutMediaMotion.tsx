import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import TricolorStrip from './TricolorStrip';

type AboutMediaMotionProps = {
  image: string;
  imageAlt: string;
};

export default function AboutMediaMotion({ image, imageAlt }: AboutMediaMotionProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 0.34, 1], [-72, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.34, 1], [0.97, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.34, 1], [1.08, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.24, 1], [0.58, 1, 1]);
  const topRightRadius = useTransform(
    scrollYProgress,
    [0, 0.34, 1],
    ['64px', '124px', '124px']
  );

  return (
    <motion.div
      ref={mediaRef}
      className="about__media"
      data-strip-trigger
      style={reduceMotion ? undefined : { y, scale, opacity }}
    >
      <motion.div
        className="about__image"
        style={{
          borderTopLeftRadius: '32px',
          borderTopRightRadius: reduceMotion ? '124px' : topRightRadius,
          scale: reduceMotion ? undefined : imageScale
        }}
      >
        <img alt={imageAlt} src={image} />
      </motion.div>
      <TricolorStrip className="about__rule" />
    </motion.div>
  );
}
