import type { AnchorHTMLAttributes } from 'react';
import styles from './Nav.module.css';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function NavLink({ href, className = '', children, ...rest }: NavLinkProps) {
  return (
    <a href={href} className={`navlink ${styles.navLink} ${className}`} {...rest}>
      {children}
    </a>
  );
}
