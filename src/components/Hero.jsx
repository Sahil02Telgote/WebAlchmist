'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Users, Cpu, Layout, Star } from 'lucide-react';
import Hero3D from './Hero3D';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // We are now using live 3D rendering instead of static images for a unique, cinematic feel.

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.background}>
        <Hero3D />
      </div>
      
      <div className={styles.container}>
        <motion.div 
          style={{ opacity }}
          className={styles.content}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={styles.title}
          >
            Engineer Your <br />
            Next <span className="text-gradient">Masterpiece.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles.description}
          >
            We build high-performance web applications with cinematic UI/UX. 
            Enjoy elite engineering, custom 3D elements, and a seamless developer experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={styles.actions}
          >
            <a href="#contact" className={styles.primaryBtn}>
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className={styles.secondaryBtn}>
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* The 3D content is now rendered directly in the background/foreground hybrid */}
        <div className={styles.visualSpacer} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.stats}
      >
        <div className={styles.statItem}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Components</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>150+</span>
          <span className={styles.statLabel}>Pages</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>250+</span>
          <span className={styles.statLabel}>Clients</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>99%</span>
          <span className={styles.statLabel}>Satisfaction</span>
        </div>
      </motion.div>
    </section>
  );
}
