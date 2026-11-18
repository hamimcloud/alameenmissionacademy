import React from 'react';
import { CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { programsData } from '../data/schoolData';

export default function Programs({ onSelectProgram }) {
  const handleApplyClick = (programTitle) => {
    if (onSelectProgram) onSelectProgram(programTitle);
    const formEl = document.getElementById('admissions');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>ACADEMIC PROGRAMS</span>
          </div>
          <h2 className="section-title">
            Streams for <span className="highlight">Every Academic Stage</span>
          </h2>
          <p className="section-subtitle">
            Strong foundational schooling through senior secondary science and specialized NEET/JEE residential coaching.
          </p>
        </div>

        <div className="grid-3">
          {programsData.map((prog) => {
            const isMission30 = prog.id === 'mission-30';
            return (
              <div
                key={prog.id}
                id={isMission30 ? 'mission30' : undefined}
                className="program-card"
                style={{
                  borderRadius: '20px',
                  background: isMission30
                    ? 'linear-gradient(145deg, #0a192f 0%, #0f274a 100%)'
                    : '#ffffff',
                  color: isMission30 ? '#ffffff' : '#0f172a',
                  border: isMission30 ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                  boxShadow: isMission30 ? '0 18px 40px rgba(15, 39, 74, 0.2)' : 'var(--shadow-sm)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {isMission30 && (
                  <div style={{
                    position: 'absolute',
                    top: '1.1rem',
                    right: '-32px',
                    transform: 'rotate(45deg)',
                    background: '#f59e0b',
                    color: '#061224',
                    fontWeight: 900,
                    fontSize: '0.68rem',
                    padding: '0.2rem 2.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    Flagship
                  </div>
                )}

                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '0.28rem 0.7rem',
                    borderRadius: '999px',
                    marginBottom: '0.9rem',
                    background: isMission30 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                    color: isMission30 ? '#fbbf24' : '#059669',
                    border: isMission30 ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    {prog.badge}
                  </span>

                  <h3 style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: isMission30 ? '#ffffff' : '#0a192f',
                    marginBottom: '0.25rem'
                  }}>
                    {prog.title}
                  </h3>

                  <div style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: isMission30 ? '#34d399' : '#059669',
                    marginBottom: '0.9rem'
                  }}>
                    {prog.subtitle}
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: isMission30 ? '#cbd5e1' : '#475569',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}>
                    {prog.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                    {prog.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                        <CheckCircle
                          size={16}
                          color={isMission30 ? '#34d399' : '#059669'}
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span style={{
                          fontSize: '0.85rem',
                          color: isMission30 ? '#e2e8f0' : '#334155',
                          lineHeight: 1.45
                        }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  paddingTop: '1.15rem',
                  borderTop: isMission30 ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ fontSize: '0.78rem', color: isMission30 ? '#94a3b8' : '#64748b' }}>
                    <strong>{prog.classes}</strong>
                  </div>

                  <button
                    onClick={() => handleApplyClick(prog.title)}
                    className={isMission30 ? 'btn btn-amber btn-sm' : 'btn btn-primary btn-sm'}
                    style={{ borderRadius: '10px' }}
                  >
                    <span>Apply</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .program-card {
            padding: 1.35rem !important;
          }
        }
      `}</style>
    </section>
  );
}
