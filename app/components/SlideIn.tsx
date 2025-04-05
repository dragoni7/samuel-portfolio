import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideIn({ children, delay = 0, duration = 0.5, className = '' }: SlideInProps) {
  const variants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delay: delay,
        duration: duration,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
