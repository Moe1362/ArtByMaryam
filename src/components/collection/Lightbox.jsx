import { useEffect, useRef } from 'react';

const Lightbox = ({ artworks, index, onChange, onClose }) => {
  const closeRef = useRef(null);
  const art = artworks[index];
  const count = artworks.length;

  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  // Lock page scroll and restore focus to the opener when closed.
  useEffect(() => {
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count);
      else if (e.key === 'ArrowRight') onChange((index + 1) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, count, onChange, onClose]);

  // Keep keyboard focus inside the dialog.
  const trapFocus = (e) => {
    if (e.key !== 'Tab') return;
    const focusable = e.currentTarget.querySelectorAll('button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onKeyDown={trapFocus}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>

      <button type="button" className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous work">
        <span aria-hidden="true">‹</span>
      </button>

      <figure className="lightbox-figure" key={art.id}>
        <img src={art.src} alt={art.alt} />
        <figcaption>
          <span className="lightbox-count">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <span id="lightbox-title" className="lightbox-title">{art.title}</span>
          <span className="lightbox-medium">{art.medium}</span>
        </figcaption>
      </figure>

      <button type="button" className="lightbox-nav lightbox-next" onClick={next} aria-label="Next work">
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
};

export default Lightbox;
