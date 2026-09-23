import { Link } from 'react-router-dom';
import { commissionMailto } from '../../data/site';
import './AboutMe.css';

const practice = [
  {
    title: 'Calligraphy',
    text: 'Hand-lettered Persian script is drawn directly into each composition — as ornament, as rhythm and as meaning.',
  },
  {
    title: 'The Figure',
    text: 'Dancers, portraits and quiet profiles anchor the work, their gestures echoing the movement of the letters.',
  },
  {
    title: 'Material',
    text: 'Layered acrylic, texture paste, gold leaf and applied detail give every canvas a surface that changes with the light.',
  },
];

const AboutMe = () => {
  return (
    <div className="about">
      <section className="about-intro" aria-labelledby="about-title">
        <figure className="about-portrait">
          <div className="about-frame">
            <img
              src="/img9.jpeg"
              alt="Dark silhouette of a woman in profile wearing an ornate gold headband, set against a textured golden moon."
            />
          </div>
          <figcaption>Moonlit Silhouette — mixed media with gold leaf</figcaption>
        </figure>

        <div className="about-copy">
          <p className="eyebrow">About the Artist</p>
          <h1 id="about-title" className="about-title">
            Hi, I’m <em>Maryam.</em>
          </h1>
          <p className="about-lead">
            A painter based in San Jose, California, creating vibrant, emotive work that
            captures the essence of human experience.
          </p>
          <div className="about-body">
            <p>
              With over a decade of experience, my work has been featured in galleries across
              the country and collected by art enthusiasts worldwide.
            </p>
            <p>
              My artistic journey began at a young age, inspired by the beauty of nature and the
              complexity of human emotion. I draw from a wide range of influences — classical
              art, contemporary culture and personal experience — to create pieces that resonate
              on a deep emotional level and spark meaningful conversations about life, identity
              and connection.
            </p>
            <p>
              When I’m not in the studio, you’ll find me exploring local art scenes, teaching
              workshops, or collaborating with other artists on community projects. I’m always
              glad to connect with fellow art lovers.
            </p>
          </div>
          <p className="about-signature" aria-hidden="true">Maryam</p>
        </div>
      </section>

      <section className="about-practice" aria-labelledby="practice-title">
        <header className="about-practice-header">
          <p className="eyebrow">The Practice</p>
          <h2 id="practice-title" className="about-practice-title">Three threads in every piece</h2>
          <div className="title-rule" />
        </header>
        <ol className="practice-grid">
          {practice.map((item, i) => (
            <li key={item.title} className="practice-card">
              <span className="practice-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-cta">
        <h2 className="about-cta-title">Let’s create something together.</h2>
        <div className="about-cta-actions">
          <a href={commissionMailto} className="btn btn-primary">Enquire About a Commission</a>
          <Link to="/#collection" className="btn btn-ghost">Browse the Collection</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
