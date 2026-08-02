import { industries } from '../../data/clients';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ClientsGrid.module.css';

export function ClientsGrid() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="clients" className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Trusted By</span>
          <h2 className={styles.heading}>Industries we&apos;ve worked with</h2>
        </div>
        <div className={styles.grid}>
          {industries.map((industry) => (
            <div key={industry.name} className={styles.tile}>
              <div className={styles.imageWrap}>
                <img src={industry.img} alt={industry.name} loading="lazy" decoding="async" />
              </div>
              <span className={styles.name}>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
