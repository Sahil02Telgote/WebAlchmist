'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // High-performance motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for "Liquid" trailing effect
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Magnetic Detection
      const target = e.target.closest('.magnetic');
      if (target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Pull the element slightly (Tactile feel)
        target.style.transform = `translate(${distanceX * 0.3}px, ${distanceY * 0.3}px)`;
        
        // Pull the cursor ring towards the center
        ringX.set(centerX);
        ringY.set(centerY);
        setIsHovering(true);
      } else {
        // Reset any affected magnetic elements
        document.querySelectorAll('.magnetic').forEach(el => {
          el.style.transform = 'translate(0, 0)';
        });
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, ringX, ringY]);

  if (!isMounted) return null;
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      {/* Fast Dot */}
      <motion.div
        className={styles.cursorDot}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Liquid Ring */}
      <motion.div
        className={styles.cursorRing}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(59, 130, 246, 1)' : 'rgba(59, 130, 246, 0.5)',
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
        }}
      />
    </>
  );
}
