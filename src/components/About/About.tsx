import { useScrollReveal } from '../../hooks/useScrollReveal';
import { leadership } from '../../data/team';
import styles from './About.module.css';

const DIRECTOR_PHOTO = '/images/jairam-purswani.jpeg';

const VALUES = [
  { mono: 'I', title: 'Integrity' },
  { mono: 'E', title: 'Excellence' },
  { mono: 'T', title: 'Transparency' },
  { mono: 'C', title: 'Client Focus' },
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
        <div className={styles.photoColumn}>
          <div className={styles.photoCard}>
            <img src={DIRECTOR_PHOTO} alt="CA Jairam Purswani, Managing Director, Abhiriti Advisory" />
          </div>
          <div className={styles.statOverlay}>
            <div className={styles.statNum}>25+ Years</div>
            <div className={styles.statCaption}>
              CA Jairam Purswani
              <span className={styles.statCaptionTitle}>Managing Director</span>
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
              Abhiriti Advisory Pvt. Ltd. is a professionally managed practice providing Audit and
              Assurance Services — including Internal, External and Forensic Audit — alongside
              legal advisory, Management Consultancy, Health &amp; Life Insurance Consultancy,
              Mutual Fund and Investment Advisory, Software Services and Business Solutions to
              clients across India. With 25+ years of professional experience, we help businesses
              navigate complex statutory requirements while building for sustainable growth.
            </p>
            <p>
              Our team combines technical expertise with practical business knowledge to deliver
              timely, accurate and value-driven solutions. We serve startups, MSMEs, private
              limited companies, LLPs, partnership firms, proprietorships, trusts, NGOs, exporters,
              manufacturers and multinational businesses.
            </p>
          </div>

          <div className={styles.directorBlock}>
            <span className={styles.directorEyebrow}>Led by</span>
            <h3 className={styles.directorName}>
              CA Jairam Purswani
              <span className={styles.directorTitle}>Managing Director</span>
            </h3>
            <p className={styles.directorBio}>
              With 25+ years of experience, Jairam leads our team of Chartered Accountants,
              Advocates, Financial Consultants, Software Consultants, Loan Consultants and
              Insurance Advisors — personally overseeing complex audit, taxation and corporate
              advisory engagements with a practical, growth-focused approach.
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

          <div className={styles.secondLeader}>
            <span className={styles.secondLeaderAvatar} aria-hidden="true">
              {leadership.initials}
            </span>
            <div>
              <h4 className={styles.secondLeaderName}>
                {leadership.name}
                <span className={styles.secondLeaderTitle}>{leadership.title}</span>
              </h4>
              <p className={styles.secondLeaderMeta}>{leadership.experience} of Experience</p>
              <p className={styles.secondLeaderBio}>{leadership.bio}</p>
            </div>
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
