import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  y = 35,
  scale = 0.96,
  blur = 12,
  curtain = false,
  duration = 0.75
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y, 
        scale: scale || 1, 
        filter: blur ? `blur(${blur}px)` : 'blur(0px)',
        clipPath: curtain 
          ? 'inset(18% 0% 0% 0% round 16px)' 
          : 'inset(0% 0% 0% 0% round 0px)'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        filter: 'blur(0px)',
        clipPath: 'inset(0% 0% 0% 0% round 0px)'
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ willChange: 'transform, opacity, filter' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
