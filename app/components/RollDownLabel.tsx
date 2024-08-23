import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RollDownLabelProps {
  labels: string[];
}

export default function RollDownLabel({ labels }: RollDownLabelProps) {
  const [currentLabelIndex, setCurrentLabelIndex] = useState<number>(0);
  const colors: string[] = [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-pink-500',
    'text-indigo-500',
  ];

  function nextColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    const changeText = setInterval(() => {
      setCurrentLabelIndex((prev: number) => (prev + 1) % labels.length);
    }, 2500);

    return () => clearInterval(changeText);
  });

  return (
    <div
      className={`inline-flex overflow-hidden ${nextColor()} text-3xl sm:text-4xl lg:text-5xl font-semibold`}
      key={currentLabelIndex}
    >
      {labels[currentLabelIndex].split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 330,
            damping: 17,
            duration: 0.5,
            delay: index * 0.05,
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </div>
  );
}
