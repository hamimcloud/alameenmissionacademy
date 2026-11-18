import React, { useState, useEffect } from 'react';
import { Image, Eye, X } from 'lucide-react';
import { galleryItems } from '../data/schoolData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Campus', 'Facilities', 'Campus Life', 'Academics', 'Achievements'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  return (
    <section id="gallery" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Image size={15} />
            <span>CAMPUS GALLERY</span>
          </div>
          <h2 className="section-title">
            Life at <span className="highlight">Al-Ameen Mission Academy</span>
          </h2>
          <p className="section-subtitle">
            Snapshots of our Howly campus, science labs, classrooms, and student achievements.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.45rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: isActive ? '#0a192f' : '#f8fafc',
                  color: isActive ? '#fbbf24' : '#475569',
                  border: isActive ? '1px solid #0a192f' : '1px solid #e2e8f0'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid-3">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              className="gallery-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div style={{ position: 'relative', height: '215px', overflow: 'hidden', background: '#0a192f' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-img"
                />
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 25, 47, 0.4)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#0a192f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Eye size={20} />
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(10, 25, 47, 0.82)',
                  color: '#fbbf24',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '6px'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '1rem 1.15rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.2rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(6, 18, 36, 0.9)',
              backdropFilter: 'blur(8px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '860px',
                width: '100%',
                maxHeight: '92dvh',
                overflowY: 'auto',
                background: '#ffffff',
                borderRadius: '18px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.65)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <X size={18} />
              </button>

              <div style={{ maxHeight: '68dvh', overflow: 'hidden', background: '#0a192f', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  style={{ maxHeight: '68dvh', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '1.15rem 1.35rem', background: '#ffffff' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '0.18rem 0.5rem', borderRadius: '4px' }}>
                  {activeImage.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a192f', margin: '0.4rem 0 0.2rem' }}>
                  {activeImage.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0 }}>
                  {activeImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </section>
  );
}
