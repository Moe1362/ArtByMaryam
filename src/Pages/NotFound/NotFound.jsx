import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section
      style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        minHeight: '60vh',
        padding: '96px var(--gutter)',
      }}
    >
      <div>
        <p className="eyebrow">Error 404</p>
        <h1
          style={{
            marginTop: 18,
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(36px, 5vw, 60px)',
          }}
        >
          This page has left the gallery.
        </h1>
        <div className="title-rule" />
        <Link to="/" className="btn btn-ghost" style={{ marginTop: 40 }}>
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
