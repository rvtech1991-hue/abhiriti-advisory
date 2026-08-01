import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const PHOTO =
  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1000';

const VALUES = [
  { mono: 'I', title: 'Integrity', caption: 'First, always' },
  { mono: 'C', title: 'Clarity', caption: 'In every report' },
  { mono: 'S', title: 'Speed', caption: 'Without shortcuts' },
];

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.orb} />
      <div ref={revealRef} className={`${styles.grid} section-fade`}>
        <div className={styles.photoCard}>
          <img src={PHOTO} alt="Founding team of Abhiriti Advisory" />
          <div className={styles.statOverlay}>
            <div className={styles.statNum}>20+ Years</div>
            <div className={styles.statCaption}>
              Guiding businesses through every number that matters
            </div>
          </div>
        </div>

        <div>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2 className={styles.heading}>
            A new-generation advisory, built on old-fashioned rigor.
          </h2>
          <div className={styles.copy}>
            <p>
              Abhiriti Advisory Pvt. Ltd. was founded to give growing businesses one dependable
              partner for compliance, capital and technology — instead of four separate vendors.
              Our team pairs qualified Chartered Accountants with financial planners, RERA
              specialists and software engineers so every decision is backed by the right
              expertise.
            </p>
            <p>
              We believe advice should be proactive, documentation should be painless, and
              technology should quietly do the heavy lifting.
            </p>
          </div>
          <div className={styles.values}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueMono}>{v.mono}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <div className={styles.valueCaption}>{v.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
