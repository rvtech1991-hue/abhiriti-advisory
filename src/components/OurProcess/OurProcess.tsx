import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './OurProcess.module.css';

const STEPS = [
  'Understand Client Requirements',
  'Analyze Business & Compliance Needs',
  'Develop Practical Solutions',
  'Execute with Accuracy',
  'Review & Quality Check',
  'Deliver Within Timelines',
  'Continuous Client Support',
];

export function OurProcess() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>Our Process</h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <div key={step} className={styles.card}>
              <div className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</div>
              <p className={styles.cardText}>{step}</p>
            </div>
          ))}
        </div>

        <div className={styles.commitment}>
          <p className={styles.commitmentText}>
            We believe every client deserves professional advice that is practical, proactive and
            dependable. Our commitment is to simplify compliance, minimize risks, maximize
            efficiency and create long-term value for every business we serve.
          </p>
          <p className={styles.quote}>&ldquo;Your Success is Our Professional Commitment.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
