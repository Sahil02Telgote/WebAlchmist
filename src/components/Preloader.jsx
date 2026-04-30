'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);
  const targetText = "WEBALCHEMIST";

  useEffect(() => {
    let iteration = 0;
    const maxIterations = targetText.length * 3;
    
    // Decoding text effect
    const textInterval = setInterval(() => {
      setDisplayText((prev) => 
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) return targetText[index];
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(textInterval);
      }
      iteration += 1;
    }, 40);

    // Progress bar and loading logic
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(Math.floor(currentProgress));

      if (currentProgress === 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsLoading(false);
        }, 800); // Wait a bit at 100% before triggering exit
      }
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className={styles.preloaderContainer}>
          {/* Top Panel */}
          <motion.div 
            className={`${styles.panel} ${styles.panelTop}`}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          />
          
          {/* Bottom Panel */}
          <motion.div 
            className={`${styles.panel} ${styles.panelBottom}`}
            exit={{ y: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          />

          {/* Center Content */}
          <motion.div 
            className={styles.content}
            exit={{ scale: 3, opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <div style={{ position: 'relative' }}>
              <h1 className={styles.title}>{displayText}</h1>
              {progress > 50 && (
                <h1 className={`${styles.title} ${styles.glitchLayer}`} aria-hidden="true">
                  {displayText}
                </h1>
              )}
            </div>
            
            <div className={styles.details}>
              <div className={styles.percentage}>
                {progress < 100 ? `SYS.INIT [${progress}%]` : 'ACCESS GRANTED'}
              </div>
              <div className={styles.barContainer}>
                <motion.div 
                  className={styles.bar} 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
