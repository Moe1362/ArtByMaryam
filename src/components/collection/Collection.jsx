import { useEffect, useRef, useState } from 'react';
import artworks from '../../data/artworks';
import Lightbox from './Lightbox';
import './Collection.css';

const Collection = () => {
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" className="collection-container" aria-labelledby="collection-title">
      <header className="collection-header">
        <p className="eyebrow">Selected Works</p>
        <h2 id="collection-title" className="collection-title">The Collection</h2>
        <div className="title-rule" />
        <p className="collection-intro">
          Portraits, dancers and quiet figures, each drawn together with hand-lettered
          Persian calligraphy. Select a work to view it in detail.
        </p>
      </header>

      <ul className="art-grid">
        {artworks.map((art, index) => (
          <li
            key={art.id}
            className="art-item"
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ '--delay': `${(index % 4) * 70}ms` }}
          >
            <button
              type="button"
              className="art-button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View “${art.title}” full size`}
            >
              <div className="art-frame">
                <img src={art.src} alt={art.alt} loading="lazy" decoding="async" />
                <div className="art-overlay" aria-hidden="true">
                  <span className="overlay-cta">View Work</span>
                </div>
              </div>
              <div className="art-info">
                <span className="art-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="art-title">{art.title}</p>
                  <p className="art-medium">{art.medium}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null && (
        <Lightbox
          artworks={artworks}
          index={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export default Collection;
