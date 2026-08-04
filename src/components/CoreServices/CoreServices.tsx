import { useEffect, useState } from 'react';
import { services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './CoreServices.module.css';

export function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const active = services[activeIndex];
  const tabsRevealRef = useScrollReveal<HTMLDivElement>();

  // Footer service links jump here via "#core-<serviceId>" so the matching
  // tab opens and the page scrolls straight to that service's content —
  // not just to the top of the tab list.
  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/^#core-(.+)$/);
      if (!match) return;
      const index = services.findIndex((s) => s.id === match[1]);
      if (index === -1) return;
      setActiveIndex(index);
      setSelectedCategory(0);
      requestAnimationFrame(() => {
        document.getElementById(`panel-${match[1]}`)?.scrollIntoView({ block: 'start' });
      });
      history.replaceState(null, '', '#core');
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const selectTab = (i: number) => {
    setActiveIndex(i);
    setSelectedCategory(0);
  };

  return (
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
                onClick={() => selectTab(i)}
              >
                <span
                  className={styles.tabDot}
                  style={isActive ? undefined : { backgroundColor: svc.color }}
                >
                  {svc.mono}
                </span>
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
          <div className={styles.panelIntro}>
            <h3 className={styles.panelTitle}>{active.title}</h3>
            <p className={styles.panelDesc}>{active.desc}</p>
          </div>

          {active.categories ? (
            <div className={styles.categorySplit}>
              <div
                className={styles.categoryList}
                role="tablist"
                aria-label={`${active.title} categories`}
              >
                {active.categories.map((cat, i) => {
                  const isSelected = i === selectedCategory;
                  return (
                    <button
                      key={cat.title}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`${styles.categoryItem} ${isSelected ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(i)}
                    >
                      <span>{cat.title}</span>
                      <span className={styles.categoryCount}>{cat.items.length}</span>
                    </button>
                  );
                })}
              </div>
              <div className={styles.categoryDetail} role="tabpanel">
                <h4 className={styles.categoryDetailTitle}>
                  {active.categories[selectedCategory].title}
                </h4>
                <p className={styles.categoryDetailCount}>
                  {active.categories[selectedCategory].items.length} services
                </p>
                <div className={styles.categoryDetailGrid}>
                  {active.categories[selectedCategory].items.map((item) => (
                    <div key={item} className={styles.checkItem}>
                      <span className={styles.checkDot} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.detailGrid}>
              {active.detailItems!.map((item) => (
                <div key={item.title} className={styles.detailCard}>
                  <div className={styles.detailMono}>{item.mono}</div>
                  <h4 className={styles.detailTitle}>{item.title}</h4>
                  <p className={styles.detailDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
