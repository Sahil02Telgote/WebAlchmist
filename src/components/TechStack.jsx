'use client';
import { motion } from 'framer-motion';
import TechStack3D from './TechStack3D';
import styles from './TechStack.module.css';

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "NestJS", "Python", "GraphQL", "REST APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Vercel"]
    }
  ];

  return (
    <section className={styles.techStack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Arsenal</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Interact with our core technologies.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.canvasContainer}
        >
          <TechStack3D />
        </motion.div>
      </div>
    </section>
  );
}
