import { useRef, useState } from 'react';
import styles from './Hero.module.css';

const POSTER =
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600';
// TODO: replace with your own branded hero footage (H.264 MP4 + WebM, see build spec §8)
const VIDEO_SRC = 'https://videos.pexels.com/video-files/7147921/7147921-uhd_2560_1440_25fps.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Chartered Accountants &amp; Financial Advisors
        </div>
        <h1 className={styles.headline}>
          <span className={styles.d1}>Financial</span>{' '}
          <span className={styles.gold}>clarity,</span>
          <br />
          <span className={styles.d3}>engineered for</span>{' '}
          <span className={styles.d4}>growth.</span>
        </h1>
        <p className={styles.subhead}>
          CA, financial planning, RERA compliance and software — one advisory team handling every
          number that matters to your business.
        </p>
        <div className={styles.ctas}>
          <a href="#contact" className={styles.primaryCta}>
            Book a Free Consultation
          </a>
          <a href="#core" className={styles.secondaryCta}>
            See Our Services
          </a>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollDot} />
        </div>
      </div>

      <button
        type="button"
        className={styles.playCue}
        onClick={togglePlay}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        aria-pressed={playing}
      >
        <span className={styles.playRing}>
          {playing ? (
            <span className={styles.pauseBars} aria-hidden="true">
              <span />
              <span />
            </span>
          ) : (
            <span className={styles.playTriangle} aria-hidden="true" />
          )}
        </span>
      </button>
    </section>
  );
}
