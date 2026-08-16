import { branches } from '../../data/branches';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Presence.module.css';

export function Presence() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="presence" className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Our Presence</span>
          <h2 className={styles.heading}>Branches</h2>
        </div>
        <div className={styles.grid}>
          {branches.map((branch) => (
            <div key={branch.name} className={styles.card}>
              <div className={styles.pin} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div className={styles.cardHead}>
                <h3 className={styles.cardName}>{branch.name}</h3>
                {branch.headOffice && <span className={styles.cardTag}>Head Office</span>}
              </div>
              {branch.address && <p className={styles.cardAddress}>{branch.address}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
