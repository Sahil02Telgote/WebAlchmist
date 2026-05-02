'use client';
import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);
  const targetText = "WEBALCHEMIST";

  // Generate stable random particles
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 8}s`,
      delay: `${Math.random() * 5}s`,
      size: `${1 + Math.random() * 4}px`,
      opacity: 0.1 + Math.random() * 0.6
    }));
  }, []);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = targetText.length * 3;
    
    // Decoding text effect - Faster & Sharper
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
    }, 30);

    // Progress logic
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(Math.floor(currentProgress));

      if (currentProgress === 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // 1.5s pause for epic reveal
      }
    }, 120);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className={styles.preloaderContainer}>
          <div className={styles.grain} />
          <div className={styles.scanline} />
          
          {/* Background Particles */}
          <div className={styles.particles}>
            {particles.map((p) => (
              <div 
                key={p.id}
                className={styles.particle}
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  '--duration': p.duration,
                  '--delay': p.delay,
                  '--max-opacity': p.opacity,
                  animationDelay: p.delay
                }}
              />
            ))}
          </div>

          {/* Top Panel */}
          <motion.div 
            className={`${styles.panel} ${styles.panelTop}`}
            exit={{ 
              y: "-100%", 
              transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
            }}
          />
          
          {/* Bottom Panel */}
          <motion.div 
            className={`${styles.panel} ${styles.panelBottom}`}
            exit={{ 
              y: "100%", 
              transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
            }}
          />

          {/* Center Content */}
          <motion.div 
            className={styles.content}
            exit={{ 
              scale: 2.5, 
              opacity: 0, 
              filter: "blur(30px)", 
              transition: { duration: 1.2, ease: "easeInOut" } 
            }}
          >
            <div className={styles.energyCore} />
            
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{displayText}</h1>
              {progress > 20 && (
                <div className={styles.glitchLayer} aria-hidden="true" />
              )}
            </div>
            
            <div className={styles.details}>
              <div className={styles.percentage}>
                {progress < 100 ? `SYNCING RESONANCE [${progress}%]` : 'ALCHEMICAL SYSTEM ONLINE'}
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
