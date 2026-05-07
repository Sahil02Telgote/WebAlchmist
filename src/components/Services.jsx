'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "MVP Build",
      price: "₹30k+",
      desc: "Perfect for startups needing a quick, scalable Minimum Viable Product.",
      features: ["Architecture", "Responsive UI", "Auth & DB", "2-3 weeks"],
      popular: false
    },
    {
      title: "Custom Engineering",
      price: "₹50k+",
      desc: "End-to-end development for complex, high-performance web applications and internal tools.",
      features: ["Next.js/React", "Custom API", "Admin Dashboard", "Integrations", "Cloud Deploy", "Security Audits"],
      popular: true
    },
    {
      title: "Technical Consulting",
      price: "₹700/hr",
      desc: "Expert guidance on system architecture and code quality.",
      features: ["System Design", "Code Audit", "Performance"],
      popular: false
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>Elite <span className="text-gradient">Capabilities.</span></h2>
          <p className={styles.subtitle}>Scaling businesses globally through superior engineering.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`${styles.card} ${service.popular ? styles.popular : ''}`}
            >
              {service.popular && <div className={styles.popularBadge}>Studio Choice</div>}
              
              <div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.price}>{service.price}</div>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
              
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`${service.popular ? styles.primaryBtn : styles.secondaryBtn} magnetic`}
              >
                Start Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
