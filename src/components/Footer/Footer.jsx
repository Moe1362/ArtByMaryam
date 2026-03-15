import React from 'react';
import './Footer.css';

const links = {
  Navigate: ['Home', 'About Me', 'Services', 'Contact'],
  Services: ['Commissioned Art', 'Art Classes', 'Prints & Editions', 'Consultations'],
};

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Behance', href: '#' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <span className="footer-eyebrow">Studio</span>
          <h2 className="footer-logo">Art By Maryam</h2>
          <p className="footer-tagline">
            Turning feeling into form — one canvas at a time.
          </p>
          <div className="footer-socials">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} className="social-link">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading} className="footer-col">
            <p className="footer-col-heading">{heading}</p>
            <ul>
              {items.map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="footer-col">
          <p className="footer-col-heading">Get in Touch</p>
          <ul className="footer-contact">
            <li>hello@artbymaryam.com</li>
            <li>+1 (555) 012-3456</li>
            <li>San Jose, California</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-rule" />
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Art By Maryam. All rights reserved.
          </p>
          <p className="footer-credit">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
