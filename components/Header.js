'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  // Normalize pathname to avoid trailing slash issues
  const cleanPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.titleImageLink}>
        <img src="/title.png" alt="ZendCraft.net" className={styles.titleImage} />
      </Link>

      <nav className={styles.nav}>
        <Link
          href="/bedrock"
          className={`${styles.navLink} ${cleanPathname === '/bedrock' ? styles.navLinkActive : ''}`}
        >
          Bedrock
        </Link>
        <Link
          href="/java-og"
          className={`${styles.navLink} ${cleanPathname === '/java-og' ? styles.navLinkActive : ''}`}
        >
          Java OG
        </Link>
        <Link
          href="/java"
          className={`${styles.navLink} ${cleanPathname === '/java' ? styles.navLinkActive : ''}`}
        >
          Java Creative
        </Link>
      </nav>
    </header>
  );
}
