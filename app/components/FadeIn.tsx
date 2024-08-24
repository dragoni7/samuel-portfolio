import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

export default function FadeIn(props: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className={props.className ? props.className : ''}
    >
      {props.children}
    </motion.div>
  );
}
