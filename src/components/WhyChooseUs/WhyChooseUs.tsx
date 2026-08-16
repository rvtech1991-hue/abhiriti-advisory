import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './WhyChooseUs.module.css';

const REASONS = [
  '25+ Years of Professional Experience',
  'Qualified Chartered Accountants',
  'Dedicated Team of Professionals',
  'End-to-End Financial Solutions',
  'Technology-Driven Processes',
  'Timely Compliance Management',
  'Personalized Client Support',
  'Confidentiality & Data Security',
  'Transparent Professional Approach',
  'PAN India Service Delivery',
  'Qualified Advocates',
  'Qualified Advisors',
  'Qualified Company Secretary',
  'Qualified Financial Experts',
  'Qualified Software Experts',
];

export function WhyChooseUs() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Our Difference</span>
          <h2 className={styles.heading}>Why Choose Us</h2>
        </div>
        <div className={styles.grid}>
          {REASONS.map((reason) => (
            <div key={reason} className={styles.item}>
              <span className={styles.checkBadge} aria-hidden="true">
                ✓
              </span>
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
