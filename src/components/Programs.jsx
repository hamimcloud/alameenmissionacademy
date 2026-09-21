import React, { useState } from 'react';
import { BookOpen, CheckCircle, GraduationCap, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { programsData } from '../data/schoolData';

export default function Programs({ onSelectProgram }) {
  const [selectedId, setSelectedId] = useState('english-medium');

  const handleApplyClick = (programTitle) => {
    if (onSelectProgram) onSelectProgram(programTitle);
    const formEl = document.getElementById('admissions');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>ACADEMIC PROGRAMS</span>
          </div>
          <h2 className="section-title">
            Tailored Streams for <span className="highlight">Every Academic Stage</span>
          </h2>
          <p className="section-subtitle">
            Whether building strong foundational English-medium literacy or excelling in Assamese-medium board exams with competitive science, we provide world-class instruction.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {programsData.map((prog) => {
            const isMission30 = prog.id === 'mission-30';
            return (
              <div
                key={prog.id}
                style={{
                  borderRadius: '24px',
                  background: isMission30 
                    ? 'linear-gradient(145deg, #0a192f 0%, #0f274a 100%)' 
                    : '#ffffff',
                  color: isMission30 ? '#ffffff' : '#0f172a',
                  border: isMission30 ? '2px solid #f59e0b' : '1px solid #e2e8f0',
                  boxShadow: isMission30 ? '0 20px 45px rgba(15, 39, 74, 0.25)' : 'var(--shadow-md)',
                  padding: '2.25rem',
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
                    top: '1.25rem',
                    right: '-32px',
                    transform: 'rotate(45deg)',
                    background: '#f59e0b',
                    color: '#061224',
                    fontWeight: 900,
                    fontSize: '0.7rem',
                    padding: '0.25rem 2.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>
                    Featured
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '999px',
                      background: isMission30 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.1)',
                      color: isMission30 ? '#fbbf24' : '#059669',
                      border: isMission30 ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(16, 185, 129, 0.2)'
                    }}>
                      {prog.badge}
                    </span>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isMission30 ? '#94a3b8' : '#64748b'
                    }}>
                      {prog.tag}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.65rem',
                    fontWeight: 800,
                    color: isMission30 ? '#ffffff' : '#0a192f',
                    marginBottom: '0.35rem'
                  }}>
                    {prog.title}
                  </h3>

                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: isMission30 ? '#34d399' : '#059669',
                    marginBottom: '1.25rem'
                  }}>
                    {prog.subtitle}
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    color: isMission30 ? '#cbd5e1' : '#475569',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem'
                  }}>
                    {prog.description}
                  </p>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: isMission30 ? '#fbbf24' : '#0a192f',
                      marginBottom: '0.85rem'
                    }}>
                      Key Curriculum Highlights:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {prog.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                          <CheckCircle 
                            size={16} 
                            color={isMission30 ? '#34d399' : '#059669'} 
                            style={{ flexShrink: 0, marginTop: '3px' }} 
                          />
                          <span style={{
                            fontSize: '0.875rem',
                            color: isMission30 ? '#e2e8f0' : '#334155',
                            lineHeight: 1.5
                          }}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{
                  paddingTop: '1.5rem',
                  borderTop: isMission30 ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ fontSize: '0.8rem', color: isMission30 ? '#94a3b8' : '#64748b' }}>
                    Eligibility: <strong>{prog.classes}</strong>
                  </div>

                  <button
                    onClick={() => handleApplyClick(prog.title)}
                    className={isMission30 ? 'btn btn-amber btn-sm' : 'btn btn-primary btn-sm'}
                    style={{ borderRadius: '10px' }}
                  >
                    <span>Inquire / Apply</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
