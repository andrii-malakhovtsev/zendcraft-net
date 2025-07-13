'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const cleanPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  // Background images for each route
  const backgroundImages = {
    '/': 'url("/header-images/home.png")',
    '/bedrock': 'url("/header-images/bedrock.jpg")',
    '/java-og': 'url("/header-images/java-og.jpg")',
    '/java': 'url("/header-images/java-creative.png")',
  };

  // Fallback background image
  const backgroundImage = backgroundImages[cleanPathname] || 'url("/header-images/logo.png")';

  return (
    <header
      className={styles.header}
      style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Link href="/" className={styles.titleImageLink}>
        <img src="/header-images/logo.png" alt="ZendCraft.net" className={styles.titleImage} />
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
