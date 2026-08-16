import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './MissionVision.module.css';

const PANELS = [
  {
    mono: 'M',
    title: 'Our Mission',
    text: 'To provide reliable, ethical and technology-driven professional services that empower businesses to grow confidently while maintaining complete statutory compliance.',
  },
  {
    mono: 'V',
    title: 'Our Vision',
    text: "To become one of India's most trusted advisory firms, recognized for excellence, integrity, innovation and long-term client relationships.",
  },
];

export function MissionVision() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Purpose</span>
          <h2 className={styles.heading}>What drives us.</h2>
        </div>
        <div className={styles.grid}>
          {PANELS.map((panel) => (
            <div key={panel.title} className={styles.card}>
              <div className={styles.cardMono}>{panel.mono}</div>
              <h3 className={styles.cardTitle}>{panel.title}</h3>
              <p className={styles.cardText}>{panel.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
