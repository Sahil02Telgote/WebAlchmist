import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={`text-gradient ${styles.logo}`}>WebAlchemist.</span>
            <p className={styles.tagline}>Turning Ideas into Digital Reality</p>
          </div>
          
          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} WebAlchemist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
