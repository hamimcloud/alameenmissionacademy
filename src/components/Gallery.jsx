import React, { useState } from 'react';
import { Image, Eye, X, Filter } from 'lucide-react';
import { galleryItems } from '../data/schoolData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Campus', 'Facilities', 'Campus Life', 'Academics', 'Achievements'];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Image size={15} />
            <span>CAMPUS GLIMPSES</span>
          </div>
          <h2 className="section-title">
            Explore Life at <span className="highlight">Al-Ameen Mission Academy</span>
          </h2>
          <p className="section-subtitle">
            Authentic photographs of our serene Howly campus, well-equipped science laboratories, classrooms, and student activities.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              className="gallery-card"
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#0a192f' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10, 25, 47, 0.4)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.25s ease'
                }} className="gallery-overlay">
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#0a192f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}>
                    <Eye size={22} />
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(10, 25, 47, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#fbbf24',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Lightbox Modal */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(6, 18, 36, 0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                width: '100%',
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  border: 'none'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ maxHeight: '70vh', overflow: 'hidden', background: '#0a192f', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  style={{ maxHeight: '70vh', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '1.5rem', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {activeImage.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.25rem' }}>
                  {activeImage.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>
                  {activeImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
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
