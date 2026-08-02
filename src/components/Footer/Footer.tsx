import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <span className={styles.brand}>Abhiriti Advisory</span>
          <p className={styles.blurb}>
            CA, financial, RERA and software services for growing businesses.
          </p>
        </div>
        <div>
          <div className={styles.colTitle}>Company</div>
          <div className={styles.colLinks}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#core">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <div className={styles.colTitle}>Services</div>
          <div className={styles.colLinks}>
            <span>CA Services</span>
            <span>Financial Services</span>
            <span>RERA Services</span>
            <span>Software Services</span>
            <span>Insurance Services</span>
            <span>Mediclaim Services</span>
          </div>
        </div>
        <div>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.colLinks}>
            <span>RvTech1991@gmail.com</span>
            <span>+91 78751 91359</span>
            <span>Belapur, Navi Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span>© {year} Abhiriti Advisory Pvt. Ltd. All rights reserved.</span>
        <span>Designed for a modern, professional advisory brand.</span>
      </div>
    </footer>
  );
}
