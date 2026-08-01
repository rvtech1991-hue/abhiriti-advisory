import { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { NavLink } from './NavLink';
import styles from './Nav.module.css';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#core', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#testimonials', label: 'Testimonials' },
];

export function Nav() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logoTile}>
            <span>A</span>
          </div>
          <div className={styles.wordmark}>
            <strong>Abhiriti Advisory</strong>
            <span>Finance · Compliance · Tech</span>
          </div>
        </div>

        {!isMobile && (
          <nav className={styles.desktopNav} aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <a href="#contact" className={styles.ctaPill}>
              Contact Us
            </a>
          </nav>
        )}

        {isMobile && (
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </header>

      {isMobile && menuOpen && (
        <div className={styles.mobileOverlay}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`${styles.mobileLink} ${styles.contact}`} onClick={closeMenu}>
            Contact Us
          </a>
        </div>
      )}
    </>
  );
}
