'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const cleanPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  const backgroundImages = {
    '/': 'url("/header-images/home.jpg")',
    '/bedrock': 'url("/header-images/bedrock.png")',
    '/java-og': 'url("/header-images/java-og.png")',
    '/java': 'url("/header-images/java-creative.png")',
  };

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
          href="/java-og"
          className={`${styles.navLink} ${cleanPathname === '/java-og' ? styles.navLinkActive : ''}`}
        >
          Classic
        </Link>
        <Link
          href="/java"
          className={`${styles.navLink} ${cleanPathname === '/java' ? styles.navLinkActive : ''}`}
        >
          Creative
        </Link>
        <Link
          href="/bedrock"
          className={`${styles.navLink} ${cleanPathname === '/bedrock' ? styles.navLinkActive : ''}`}
        >
          Bedrock
        </Link>
      </nav>
    </header>
  );
}
