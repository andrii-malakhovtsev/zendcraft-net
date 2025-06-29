import React from 'react';
import { NavLink } from 'react-router-dom';

const headerBackground = 'https://i.imgur.com/Z1qMZt7.jpg'; // Replace with your own

const Header = () => (
  <header
    style={{
      backgroundImage: `url(${headerBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '3rem 1rem',
      textAlign: 'center',
      textShadow: '2px 2px 4px #000',
    }}
  >
    <h1 style={{ margin: 0, fontSize: '3rem' }}>ZendCraft.net</h1>
    <nav style={{ marginTop: '1rem' }}>
      {['/', '/bedrock', '/java'].map((path, index) => {
        const labels = ['Main', 'Bedrock', 'Java'];
        return (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            style={({ isActive }) => ({
              margin: '0 1rem',
              color: isActive ? '#ffd700' : 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
            })}
          >
            {labels[index]}
          </NavLink>
        );
      })}
    </nav>
  </header>
);

export default Header;
