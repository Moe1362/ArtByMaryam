import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { commissionMailto } from '../../data/site';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastKey, setLastKey] = useState(location.key);
  if (location.key !== lastKey) {
    setLastKey(location.key);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const collectionActive = location.pathname === '/' && location.hash === '#collection';

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" aria-label="Art By Maryam — home">
        <span className="logo-eyebrow">Studio</span>
        <span className="logo-name">Art By Maryam</span>
      </Link>

      <button
        type="button"
        className={`menu-toggle${open ? ' open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <nav aria-label="Primary">
        <ul id="primary-nav" className={`navbar-links${open ? ' open' : ''}`}>
          <li style={{ '--i': 0 }}>
            <Link to="/#collection" className={collectionActive ? 'active' : undefined}>
              Collection
            </Link>
          </li>
          <li style={{ '--i': 1 }}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li style={{ '--i': 2 }}>
            <a href={commissionMailto} className="navbar-cta">Commission</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
