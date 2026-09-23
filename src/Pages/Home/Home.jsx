import { Link } from 'react-router-dom';
import Collection from '../../components/collection/Collection';
import { commissionMailto } from '../../data/site';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Contemporary Calligraphy &amp; Figurative Art</p>
          <h1 id="hero-title" className="hero-title">
            Where the written word <em>becomes</em> the figure.
          </h1>
          <p className="hero-lede">
            Original mixed-media paintings weaving Persian calligraphy, gold leaf and the
            human form — made by hand in San Jose, California.
          </p>
          <div className="hero-actions">
            <Link to="/#collection" className="btn btn-primary">View the Collection</Link>
            <a href={commissionMailto} className="btn btn-ghost">Commission a Piece</a>
          </div>
        </div>

        <figure className="hero-art">
          <div className="hero-frame">
            <img
              src="/img5.jpeg"
              alt="Ballerina arched backwards in a white and gold tutu, framed by silver calligraphy."
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span className="hero-art-title">The Dancer</span>
            <span className="hero-art-medium">Mixed media with gold leaf</span>
          </figcaption>
        </figure>
      </section>

      <Collection />

      <section className="statement" aria-label="About the work">
        <div className="statement-inner">
          <p>
            Calligraphy that moves the way a body moves — paintings made to be read
            and felt at once.
          </p>
          <span className="statement-mark">The Work</span>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <p className="eyebrow">Commissions</p>
        <h2 id="cta-title" className="cta-title">Have a space, a story or a word in mind?</h2>
        <p className="cta-text">
          Maryam creates original pieces for homes, collectors and businesses. Share your
          idea, space or the words that matter to you, and the conversation begins there.
        </p>
        <div className="cta-actions">
          <a href={commissionMailto} className="btn btn-primary">Start an Enquiry</a>
          <Link to="/about" className="btn btn-ghost">About the Artist</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
