import React, { useEffect, useRef } from 'react';
import './Collection.css';

const artworks = [
  { id: 1, src: '/img1.jpeg', alt: 'Art 1', title: 'Sunset Bliss', medium: 'Oil on Canvas' },
  { id: 2, src: '/img2.jpeg', alt: 'Art 2', title: "Nature's Embrace", medium: 'Watercolor' },
  { id: 3, src: '/img3.jpeg', alt: 'Art 3', title: 'Urban Dreams', medium: 'Acrylic on Canvas' },
  { id: 4, src: '/img4.jpeg', alt: 'Art 4', title: 'Serene Waters', medium: 'Digital Art' },
  { id: 5, src: '/img5.jpeg', alt: 'Art 5', title: 'Abstract Whispers', medium: 'Mixed Media' },
  { id: 6, src: '/img6.jpeg', alt: 'Art 6', title: 'Floral Symphony', medium: 'Pastel on Paper' },
  { id: 7, src: '/img7.jpeg', alt: 'Art 7', title: 'Cosmic Dance', medium: 'Digital Art' },
  { id: 8, src: '/img8.jpeg', alt: 'Art 8', title: 'Tranquil Reflections', medium: 'Oil on Canvas' },
  { id: 9, src: '/img9.jpeg', alt: 'Art 9', title: 'Vibrant Energy', medium: 'Acrylic on Canvas' },
  { id: 10, src: '/img10.jpeg', alt: 'Art 10', title: 'Mystical Forest', medium: 'Watercolor' },
];

const Collection = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
    <div className="collection-container">
      <div className="collection-header">
        <p className="collection-eyebrow">Curated Works</p>
        <h2 className="collection-title">My Art Collection</h2>
        <div className="title-rule" />
      </div>

      <div className="art-grid">
        {artworks.map((art, index) => (
          <div
            key={art.id}
            className="art-item"
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ '--delay': `${index * 60}ms` }}
          >
            <div className="art-frame">
              <img src={art.src} alt={art.alt} />
              <div className="art-overlay">
                <span className="overlay-medium">{art.medium}</span>
              </div>
            </div>
            <div className="art-info">
              <p className="art-title">{art.title}</p>
              <p className="art-medium">{art.medium}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
