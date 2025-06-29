'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const linkStyle = (path) => ({
    margin: '0 1rem',
    color: pathname === path ? '#ffd700' : 'white',
    textDecoration: 'none',
    fontWeight: pathname === path ? 'bold' : 'normal',
  });

  return (
    <header
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000',
      }}
    >
      <nav style={{ marginTop: '1rem' }}>
        <Link href="/" style={linkStyle('/')}>Main</Link>
        <Link href="/bedrock" style={linkStyle('/bedrock')}>Bedrock</Link>
        <Link href="/java" style={linkStyle('/java')}>Java</Link>
      </nav>
    </header>
  );
};

export default Header;
