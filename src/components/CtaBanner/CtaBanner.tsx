import styles from './CtaBanner.module.css';

export function CtaBanner() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Ready to get your finances in order?</h2>
      <p className={styles.subcopy}>
        Book a free consultation and see how much time and money the right advisory partner can
        save you.
      </p>
      <a href="#contact" className={styles.cta}>
        Book a Free Consultation
      </a>
    </section>
  );
}
