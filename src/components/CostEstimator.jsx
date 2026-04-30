'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';
import styles from './CostEstimator.module.css';

export default function CostEstimator() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const basePrice = 15000;

  const features = [
    { id: 'auth', label: 'User Authentication', price: 5000 },
    { id: 'db', label: 'Database / CMS', price: 8000 },
    { id: 'payments', label: 'Payment Gateway (Stripe)', price: 10000 },
    { id: 'admin', label: 'Admin Dashboard', price: 10000 },
    { id: 'seo', label: 'Advanced SEO Setup', price: 8000 },
    { id: 'animations', label: 'Complex Animations', price: 10000 },
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const totalPrice = basePrice + selectedFeatures.reduce((total, id) => {
    const feature = features.find(f => f.id === id);
    return total + (feature ? feature.price : 0);
  }, 0);

  return (
    <section id="estimator" className={styles.estimator}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.iconWrapper}>
                <Calculator size={24} className="text-gradient" />
              </div>
              <h2 className={styles.title}>Interactive Project Estimator</h2>
              <p className={styles.desc}>
                Select the features you need for your next project to get an instant cost estimate. 
                This tool helps us align on scope and expectations before we even start talking.
              </p>
              
              <div className={styles.featuresGrid}>
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`${styles.featureBtn} ${selectedFeatures.includes(feature.id) ? styles.active : ''}`}
                  >
                    {feature.label}
                    <span className={styles.featurePrice}>+₹{feature.price.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.resultCard}
          >
            <h3 className={styles.resultTitle}>Estimated Investment</h3>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>₹</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={totalPrice}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={styles.totalPrice}
                >
                  {totalPrice.toLocaleString('en-IN')}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <p className={styles.resultNote}>
              *This is a rough estimate. Final pricing depends on specific requirements and complexity.
            </p>
            
            <a href="#contact" className={styles.ctaBtn}>
              Discuss This Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
