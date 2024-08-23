import { motion } from 'framer-motion';

export default function transition(Component: React.FC) {
  return () => (
    <>
      <Component />
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-full bg-yellow-500 origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-in fixed top-0 left-0 w-full h-full bg-yellow-500 origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
