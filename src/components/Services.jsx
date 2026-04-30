'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "MVP Development",
      price: "₹30,000+",
      desc: "Perfect for startups needing a quick, scalable Minimum Viable Product.",
      features: ["Full-stack architecture", "Responsive UI/UX", "Database setup", "Core feature implementation", "2-3 weeks delivery"],
      popular: false
    },
    {
      title: "Custom Web App",
      price: "₹50,000+",
      desc: "End-to-end development for complex, data-intensive web applications.",
      features: ["Advanced frontend (React/Next.js)", "Scalable backend API", "Custom admin dashboard", "Third-party integrations", "Performance optimization"],
      popular: true
    },
    {
      title: "Architecture Consulting",
      price: "₹700/hr",
      desc: "Technical guidance, code reviews, and system architecture planning.",
      features: ["System design", "Codebase audit", "Performance profiling", "Security review", "Team mentoring"],
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
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Clear Offerings. <span className="text-gradient">No Surprises.</span></h2>
          <p className={styles.subtitle}>Transparent pricing for premium development services.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard className={`${styles.card} ${service.popular ? styles.popular : ''}`}>
                {service.popular && <div className={styles.popularBadge}>Most Requested</div>}
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.price}>{service.price}</div>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                <ul className={styles.features}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className={service.popular ? styles.primaryBtn : styles.secondaryBtn}>
                  Get Started
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
