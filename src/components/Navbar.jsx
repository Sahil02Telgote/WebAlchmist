'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className="text-gradient">WebAlchemist.</span>
        </div>

        <div className={styles.desktopLinks}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#contact" className={`${styles.cta} magnetic`}>Hire Me</a>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className={styles.mobileLinks}>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>Work</a>
              <a href="#contact" className={styles.cta} onClick={() => setIsOpen(false)}>Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
