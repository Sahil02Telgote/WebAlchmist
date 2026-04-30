'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Analytics Dashboard",
      type: "SaaS Application",
      desc: "A high-performance analytics dashboard for financial institutions. Built with Next.js, Framer Motion, and PostgreSQL. Features real-time data visualization and complex state management.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      imagePath: "C:\\Users\\123sa\\.gemini\\antigravity\\brain\\a516dbfe-93e6-417a-837c-dd08c9563083\\saas_dashboard_1777452424785.png"
    },
    {
      title: "Luxury E-Commerce App",
      type: "Mobile Web Application",
      desc: "A sleek, mobile-first e-commerce experience for a luxury brand. Integrated with Stripe for payments and Sanity for headless CMS. Achieved 99/100 Lighthouse score.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      imagePath: "C:\\Users\\123sa\\.gemini\\antigravity\\brain\\a516dbfe-93e6-417a-837c-dd08c9563083\\ecommerce_app_1777452440495.png"
    }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Selected <span className="text-gradient">Work</span></h2>
          <p className={styles.subtitle}>Case studies of scalable products I've built.</p>
        </motion.div>

        <div className={styles.projects}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`${styles.project} ${i % 2 !== 0 ? styles.projectReverse : ''}`}
            >
              <div className={styles.imageContainer}>
                <TiltCard>
                  {/* Using a custom API route to load the absolute file path for demo purposes */}
                  <img 
                    src={`/api/image?path=${encodeURIComponent(project.imagePath)}`} 
                    alt={project.title} 
                    className={styles.image}
                  />
                </TiltCard>
              </div>
              
              <div className={styles.contentContainer}>
                <span className={styles.projectType}>{project.type}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
