import { coreTeam, leadership } from '../../data/team';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Team.module.css';

export function Team() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="team" className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Our People</span>
          <h2 className={styles.heading}>The team behind every engagement.</h2>
        </div>

        <div className={styles.featured}>
          <span className={styles.featuredAvatar} aria-hidden="true">
            {leadership.initials}
          </span>
          <div>
            <div className={styles.featuredTag}>Director</div>
            <h3 className={styles.featuredName}>{leadership.name}</h3>
            <p className={styles.featuredMeta}>{leadership.experience} of Experience</p>
            <p className={styles.featuredBio}>{leadership.bio}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {coreTeam.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.cardMono}>{member.initials}</div>
              <h4 className={styles.cardName}>{member.name}</h4>
              <span className={styles.cardSpecialization}>{member.specialization}</span>
              <p className={styles.cardExperience}>{member.experience} of Experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
