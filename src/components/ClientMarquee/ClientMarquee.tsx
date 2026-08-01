import { industries } from '../../data/clients';
import styles from './ClientMarquee.module.css';

const looped = [...industries, ...industries, ...industries];

export function ClientMarquee() {
  return (
    <section className={styles.strip} aria-label="Industries we work with">
      <div className={styles.track}>
        {looped.map((industry, i) => (
          <div key={`${industry.name}-${i}`} className={styles.tile}>
            {industry.name}
          </div>
        ))}
      </div>
    </section>
  );
}
