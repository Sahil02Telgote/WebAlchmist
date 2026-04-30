'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import Hero3D from './Hero3D';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Hero3D />
      </div>
      
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.badge}
        >
          <Code size={16} />
          <span>WebAlchemist Engineering</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={styles.title}
        >
          Turning Ideas Into <br />
          <span className="text-gradient">Digital Reality.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.description}
        >
          We are an elite engineering studio specializing in high-performance web applications, 
          3D interactive experiences, and scalable system architectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={styles.actions}
        >
          <a href="#estimator" className={styles.primaryBtn}>
            Estimate Project <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className={styles.secondaryBtn}>
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
