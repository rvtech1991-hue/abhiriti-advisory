import { stats } from '../../data/stats';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Stats.module.css';

export function Stats() {
  const { ref, values } = useCountUp(stats.map((s) => s.target));

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.grid}>
        {stats.map((stat, i) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.num}>
              {stat.prefix}
              {values[i]}
              {stat.suffix}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
