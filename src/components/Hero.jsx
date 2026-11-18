import React from 'react';
import {
  ArrowRight,
  Award,
  LogIn,
  CheckCircle2,
  MapPin,
  Flame
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Hero({ onOpenLoginModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 10% 20%, #061224 0%, #0a192f 50%, #0f274a 100%)',
        color: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2 hero-grid" style={{ alignItems: 'center', gap: '2.5rem' }}>
          {/* Left Column */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.35)',
              color: '#34d399',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '1.15rem',
              letterSpacing: '0.02em'
            }}>
              <span className="pulse-dot"></span>
              <span>ADMISSIONS OPEN {schoolInfo.admissionSession}</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.14,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '1rem'
            }}>
              Nurturing <span style={{ color: '#fbbf24' }}>Minds</span>, Building{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Doctors & Leaders.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '520px'
            }}>
              Residential & day-boarding education in English (CBSE pattern) and Assamese mediums with flagship <strong>Mission 30 NEET & JEE</strong> coaching.
            </p>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <button onClick={() => scrollTo('admissions')} className="btn btn-primary btn-lg">
                <span>Apply Now</span>
                <ArrowRight size={17} />
              </button>

              <button onClick={() => scrollTo('mission30')} className="btn btn-amber btn-lg">
                <Flame size={17} />
                <span>Mission 30</span>
              </button>

              <button onClick={onOpenLoginModal} className="btn btn-portal btn-lg">
                <LogIn size={17} />
                <span>Portal Login</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem 1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              {[
                'CBSE Pattern / NCERT',
                'Separate Boys & Girls Hostels',
                'Zero Gadget Campus'
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <CheckCircle2 size={17} color="#10b981" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.84rem', color: '#e2e8f0', fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Campus Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              position: 'relative'
            }}>
              <img
                src="/images/campus-hero.jpg"
                alt="Al-Ameen Mission Academy Howly Campus"
                style={{
                  width: '100%',
                  height: 'clamp(250px, 38vw, 400px)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(6, 18, 36, 0.88) 0%, rgba(6, 18, 36, 0.08) 60%)'
              }} />

              {/* Safe In-Frame Achievement Badge */}
              <div style={{
                position: 'absolute',
                top: '0.9rem',
                right: '0.9rem',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#ffffff',
                padding: '0.55rem 0.9rem',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem'
              }}>
                <Award size={22} color="#fbbf24" />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, opacity: 0.95 }}>Board Success</div>
                </div>
              </div>

              {/* Campus Caption */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem'
              }}>
                <div style={{
                  background: 'rgba(10, 25, 47, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '14px',
                  padding: '0.95rem 1.1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#fbbf24', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      Green Campus • Howly Town
                    </span>
                    <span style={{ color: '#34d399', fontSize: '0.72rem', fontWeight: 700 }}>
                      Estd. 2014
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontSize: '0.82rem' }}>
                    <MapPin size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span>Ward No. 1, Howly Town, Barpeta, Assam - 781316</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 3.75rem 0 4.5rem 0;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 2.25rem 0 2.5rem 0;
          }
          .hero-ctas .btn {
            flex: 1 1 auto;
          }
        }
      `}</style>
    </section>
  );
}
