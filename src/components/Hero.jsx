import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  LogIn, 
  BookOpen, 
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
    <section id="hero" style={{
      position: 'relative',
      background: 'radial-gradient(circle at 10% 20%, #061224 0%, #0a192f 50%, #0f274a 100%)',
      color: '#ffffff',
      padding: '4.5rem 0 3.5rem 0',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Headline & Calls to Action */}
          <div>
            {/* Admissions Banner Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.4rem 0.95rem',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.35)',
              color: '#34d399',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              letterSpacing: '0.02em'
            }}>
              <span className="pulse-dot"></span>
              <span>ADMISSION OPEN FOR SESSION {schoolInfo.admissionSession}</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}>
              Nurturing <span style={{ color: '#fbbf24' }}>Minds</span>, Building{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitFillColor: 'transparent'
              }}>
                Doctors & Leaders.
              </span>
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '560px'
            }}>
              Al-Ameen Mission Academy, Howly — A premier residential cum day boarding institution offering English (CBSE pattern) & Assamese mediums with specialized <strong>Mission 30 NEET & JEE</strong> coaching.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button
                onClick={() => scrollTo('admissions')}
                className="btn btn-primary btn-lg"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo('mission30')}
                className="btn btn-amber btn-lg"
              >
                <Flame size={18} />
                <span>Mission 30 (NEET)</span>
              </button>

              <button
                onClick={onOpenLoginModal}
                className="btn btn-portal btn-lg"
              >
                <LogIn size={18} />
                <span>Portal Login</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <CheckCircle2 size={20} color="#10b981" />
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 600 }}>
                  CBSE Pattern / NCERT
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <CheckCircle2 size={20} color="#10b981" />
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 600 }}>
                  Separate Boys & Girls Hostels
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <CheckCircle2 size={20} color="#10b981" />
                <span style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 600 }}>
                  Strict Zero Gadget Policy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Real Campus Photograph Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              position: 'relative'
            }}>
              <img
                src="/images/campus-hero.jpg"
                alt="Al-Ameen Mission Academy Howly Campus"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(6, 18, 36, 0.85) 0%, rgba(6, 18, 36, 0.1) 60%)'
              }} />

              {/* In-Image Information Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(10, 25, 47, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{
                      color: '#fbbf24',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Green Campus • Howly Town
                    </span>
                    <span style={{
                      color: '#34d399',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'rgba(16, 185, 129, 0.2)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '6px'
                    }}>
                      Estd. 2014
                    </span>
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    Al-Ameen Mission Academy Campus
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.8125rem' }}>
                    <MapPin size={14} color="#f59e0b" />
                    <span>Ward No.1, Howly Town, Barpeta, Assam - 781316</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#ffffff',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              boxShadow: '0 12px 25px rgba(16, 185, 129, 0.4)',
              border: '2px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: 'bounce-subtle 4s infinite ease-in-out'
            }}>
              <Award size={28} color="#fbbf24" />
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>Board Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
