import { Link } from 'react-router-dom';
import site, { commissionMailto } from '../../data/site';
import './Footer.css';

const navigate = [
  { label: 'Home', to: '/' },
  { label: 'Collection', to: '/#collection' },
  { label: 'About the Artist', to: '/about' },
];

const services = ['Original Paintings', 'Private Commissions', 'Corporate & Interior Pieces'];

const Footer = () => {
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-eyebrow">Studio</span>
          <p className="footer-logo">{site.name}</p>
          <p className="footer-tagline">
            Contemporary paintings where calligraphy, gold and the human figure meet.
          </p>
          {socials.length > 0 && (
            <div className="footer-socials">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} className="social-link" target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-col-heading">Navigate</p>
          <ul>
            {navigate.map(({ label, to }) => (
              <li key={label}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <p className="footer-col-heading">Services</p>
          <ul>
            {services.map((item) => (
              <li key={item}><a href={commissionMailto}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-heading">Get in Touch</p>
          <ul className="footer-contact">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-rule" />
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {site.name}. All artwork and images are the property
            of the artist.
          </p>
          <p className="footer-credit">Made by hand in California.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
