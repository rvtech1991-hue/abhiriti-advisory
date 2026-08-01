import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Testimonials.module.css';

const POSTER =
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600';
// TODO: replace with a real client testimonial video
const VIDEO_SRC = 'https://videos.pexels.com/video-files/6780089/6780089-hd_1920_1080_30fps.mp4';
const ADVANCE_MS = 6000;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const revealRef = useScrollReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = testimonials[activeIndex];
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div ref={revealRef} className={`${styles.header} section-fade`}>
          <span className={styles.eyebrow}>Client Stories</span>
          <h2 className={styles.heading}>Hear it from our clients</h2>
        </div>

        <div
          className={styles.feature}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={styles.videoCard}>
            <video ref={videoRef} autoPlay muted loop playsInline poster={POSTER} aria-hidden="true">
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            <div className={styles.videoScrim} />
            <div className={styles.playWrap}>
              <button
                type="button"
                className={styles.playRing}
                onClick={toggleVideo}
                aria-label={videoPlaying ? 'Pause testimonial video' : 'Play testimonial video'}
                aria-pressed={videoPlaying}
              >
                {videoPlaying ? (
                  <span className={styles.pauseBars} aria-hidden="true">
                    <span />
                    <span />
                  </span>
                ) : (
                  <span className={styles.playTriangle} aria-hidden="true" />
                )}
              </button>
            </div>
            <div className={styles.videoBar}>
              <div className={styles.avatar}>{active.initials}</div>
              <div>
                <div className={styles.videoBarName}>{active.name}</div>
                <div className={styles.videoBarRole}>{active.role}</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.quoteMark}>&ldquo;</div>
            <p className={styles.quoteText}>{active.quote}</p>
            <div className={styles.dots} role="tablist" aria-label="Select testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={`${styles.card} ${i === activeIndex ? styles.activeCard : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <p className={styles.cardSnippet}>{t.snippet}</p>
              <div className={styles.cardBottom}>
                <div className={styles.cardAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.cardName}>{t.name}</div>
                  <div className={styles.cardRole}>{t.role}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
