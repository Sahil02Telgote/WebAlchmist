'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const cards = [
    {
      icon: <Code2 size={24} className={styles.iconBlue} />,
      title: "Frontend Engineering",
      desc: "Architecting responsive, accessible, and performant user interfaces using React and Next.js."
    },
    {
      icon: <Server size={24} className={styles.iconPurple} />,
      title: "Backend Systems",
      desc: "Building scalable APIs, microservices, and robust backend architectures."
    },
    {
      icon: <Database size={24} className={styles.iconPink} />,
      title: "Database Design",
      desc: "Structuring complex data relationships with MongoDB, PostgreSQL, and Redis."
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>More than just code.</h2>
          <p className={styles.subtitle}>
            With over a decade of experience, I bring a product-first mindset to engineering. 
            I don&apos;t just write code; I solve business problems and build scalable architectures that last.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass ${styles.card}`}
            >
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
