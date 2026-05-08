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
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Available for Global Projects
          </div>

          <h1 className={styles.title}>
            {"Engineer Your Next".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <span className="text-gradient" style={{ display: "inline-block" }}>
              {"Masterpiece.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + (i * 0.05),
                    ease: "easeOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={styles.description}
          >
            Building high-performance digital products for a global market. 
            We blend elite engineering with cinematic aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className={styles.actions}
          >
            <a href="#contact" className={`${styles.primaryBtn} magnetic`}>
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className={`${styles.secondaryBtn} magnetic`}>
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* Global Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className={styles.ticker}
        >
          <div className={styles.tickerContent}>
            {["Mumbai", "London", "New York", "San Francisco", "Tokyo", "Dubai", "Singapore"].map((city, i) => (
              <span key={i} className={styles.tickerItem}>
                <span className={styles.tickerDot}></span> {city}
              </span>
            ))}
            {["Mumbai", "London", "New York", "San Francisco", "Tokyo", "Dubai", "Singapore"].map((city, i) => (
              <span key={i + 7} className={styles.tickerItem}>
                <span className={styles.tickerDot}></span> {city}
              </span>
            ))}
          </div>
        </motion.div>
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
