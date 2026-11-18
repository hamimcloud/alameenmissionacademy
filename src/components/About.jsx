import React from 'react';
import { CheckCircle2, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>ABOUT OUR INSTITUTION</span>
          </div>
          <h2 className="section-title">
            Fostering <span className="highlight">Honesty, Dedication</span> & Diligence
          </h2>
          <p className="section-subtitle">
            Since 2014 in Howly Town, Al-Ameen Mission Academy has united residential discipline with top board and NEET/JEE coaching.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Principal's Card */}
          <div className="principal-card" style={{
            background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(10, 25, 47, 0.14)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Quote
              size={100}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                color: 'rgba(255, 255, 255, 0.04)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                padding: '3px',
                flexShrink: 0
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#0f274a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1.35rem',
                  color: '#fbbf24'
                }}>
                  AS
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                  Abdus Sabur
                </h3>
                <div style={{ color: '#34d399', fontSize: '0.85rem', fontWeight: 700 }}>
                  Principal, Al-Ameen Mission Academy
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>
                  M.A, Dip. Mass Com • Ex-Navy
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '0.96rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
              fontStyle: 'italic'
            }}>
              "True education goes beyond memorization. We instill naval-grade discipline, moral character, and intellectual rigor in a distraction-free campus so every student can emerge as a doctor, engineer, or upright leader."
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.14)',
              paddingTop: '0.9rem'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.05em' }}>
                HONESTY • DEDICATION • DILIGENCE
              </span>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                Estd. 2014
              </span>
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <div className="section-badge gold">
              <span>OUR MISSION</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.45rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#0a192f', marginBottom: '0.85rem' }}>
              A Focused Sanctuary for High Achievers
            </h3>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Designed to eliminate digital distractions, our Howly campus provides structured academics, personal mentorship, and financial support for deserving students.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Dual-medium schooling: English (CBSE pattern) & Assamese Medium',
                'Separate Boys & Girls hostels with 24/7 warden supervision',
                'Flagship Mission 30 residential batch for NEET & JEE aspirants',
                'Merit scholarships & fee concessions for needy talented students'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={19} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.93rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .principal-card {
            padding: 1.35rem !important;
          }
        }
      `}</style>
    </section>
  );
}
