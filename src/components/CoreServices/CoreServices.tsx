import { useState } from 'react';
import { services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './CoreServices.module.css';

export function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const tabsRevealRef = useScrollReveal<HTMLDivElement>();
  const detailRevealRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section id="core" className={styles.tabsSection}>
        <div className={styles.inner}>
          <div ref={tabsRevealRef} className={`${styles.header} section-fade`}>
            <span className={styles.eyebrow}>Core Services</span>
            <h2 className={styles.heading}>Everything your business&apos;s finances need</h2>
          </div>

          <div className={styles.tabList} role="tablist" aria-label="Core service verticals">
            {services.map((svc, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={svc.id}
                  role="tab"
                  id={`tab-${svc.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${svc.id}`}
                  className={`${styles.tab} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className={styles.tabDot}>{svc.mono}</span>
                  {svc.title}
                </button>
              );
            })}
          </div>

          <div
            className={styles.panel}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
          >
            <div>
              <h3 className={styles.panelTitle}>{active.title}</h3>
              <p className={styles.panelDesc}>{active.desc}</p>
              <div className={styles.checklist}>
                {active.items.map((item) => (
                  <div key={item} className={styles.checkItem}>
                    <span className={styles.checkDot} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.panelImage}>
              <img src={active.img} alt={active.title} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.inner}>
          <div ref={detailRevealRef} className={`${styles.header} section-fade`}>
            <span className={styles.eyebrow}>{active.title}, in full</span>
            <h2 className={styles.heading}>Every detail, every deadline, handled</h2>
          </div>
          <div className={styles.detailGrid}>
            {active.detailItems.map((item) => (
              <div key={item.title} className={styles.detailCard}>
                <div className={styles.detailMono}>{item.mono}</div>
                <h4 className={styles.detailTitle}>{item.title}</h4>
                <p className={styles.detailDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
