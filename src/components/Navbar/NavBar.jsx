import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <span className="logo-eyebrow">Studio</span>
        <h1>Art By Maryam</h1>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {['Home', 'About Me', 'Services', 'Contact'].map((label, i) => (
          <li key={label} style={{ '--i': i }}>
            <a
              href={`#${label.toLowerCase().replace(' ', '')}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default NavBar;
