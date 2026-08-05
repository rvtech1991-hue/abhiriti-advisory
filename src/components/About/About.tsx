import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const DIRECTOR_PHOTO = '/images/jairam-purswani.jpeg';

const VALUES = [
  { mono: 'I', title: 'Integrity' },
  { mono: 'E', title: 'Excellence' },
  { mono: 'T', title: 'Transparency' },
];

const EXPERTISE = [
  'GST & Taxation',
  'Statutory & Tax Audit',
  'Company Law & ROC',
  'Virtual CFO Advisory',
  'Business Restructuring',
  'NRI & International Taxation',
];

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.orb} />
      <div ref={revealRef} className={`${styles.grid} section-fade`}>
        <div className={styles.photoCard}>
          <img src={DIRECTOR_PHOTO} alt="CA Jairam Purswani, Director, Abhiriti Advisory" />
          <div className={styles.statOverlay}>
            <div className={styles.statNum}>20+ Years</div>
            <div className={styles.statCaption}>CA Jairam Purswani — Director</div>
          </div>
        </div>

        <div>
          <span className={styles.eyebrow}>Who We Are</span>
          <h2 className={styles.heading}>
            A new-generation advisory, built on old-fashioned rigor.
          </h2>
          <div className={styles.copy}>
            <p>
              Abhiriti Advisory pairs Chartered Accountants with financial planners, RERA
              specialists and software engineers — one team, every number covered.
            </p>
          </div>

          <div className={styles.directorBlock}>
            <span className={styles.directorEyebrow}>Led by</span>
            <h3 className={styles.directorName}>CA Jairam Purswani, Director</h3>
            <p className={styles.directorBio}>
              With 20+ years of experience, Jairam leads our CA and advisory team — overseeing
              complex audit, tax and corporate engagements with a practical, growth-focused
              approach.
            </p>
            <div className={styles.expertiseTags}>
              {EXPERTISE.map((tag) => (
                <span key={tag} className={styles.expertiseTag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/downloads/Abhiriti-Advisory-Company-Profile.docx"
              download
              className={styles.downloadBtn}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Company Profile
            </a>
          </div>

          <div className={styles.values}>
            {VALUES.map((v, i) => (
              <div key={v.title} className={styles.valueItem}>
                {i > 0 && <span className={styles.valueDivider} aria-hidden="true" />}
                <span className={styles.valueMono}>{v.mono}</span>
                <span className={styles.valueTitle}>{v.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
