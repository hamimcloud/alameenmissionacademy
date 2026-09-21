import React from 'react';
import { Flame, Target, Award, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Mission30({ onApplyClick }) {
  const topPracticeScores = [
    { rank: 1, name: "Moshfique Alam", mark: "647 / 720", status: "Top Score" },
    { rank: 2, name: "Al Amin", mark: "635 / 720", status: "High Distinction" },
    { rank: 3, name: "Wasima Rahman", mark: "580 / 720", status: "Qualified" },
    { rank: 4, name: "Sofika Khatun", mark: "576 / 720", status: "Qualified" },
    { rank: 5, name: "Selima Aktara", mark: "553 / 720", status: "Qualified" }
  ];

  return (
    <section id="mission30" className="section-py" style={{
      background: 'linear-gradient(180deg, #061224 0%, #0a192f 50%, #061224 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background radial highlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1rem'
          }}>
            <Flame size={16} color="#fbbf24" />
            <span>ELITE MEDICAL & ENGINEERING ACCELERATOR</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Mission 30 <span style={{ color: '#fbbf24' }}>(M3 Super Batch)</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            A rigorous residential entrance-coaching program producing stellar doctors and engineering ranks from Assam through disciplined mentorship, continuous evaluations, and intensive test simulations.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          {/* Left Column: Methodology & Rigor */}
          <div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              Why Mission 30 Consistently Outperforms
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  title: "720-Marks Full Practice Tests",
                  desc: "Conducted under exact NTA exam conditions with negative marking, OMR answer sheets, and immediate ranking analytics."
                },
                {
                  title: "Short Practice Tests (190 Marks)",
                  desc: "Topic-wise short sprint tests to reinforce micro-concepts in Physics, Organic Chemistry, Botany, and Zoology."
                },
                {
                  title: "Strict Residential Supervision",
                  desc: "Zero mobile phone distractions, fixed daily study timetables, and on-campus faculty proctors to resolve doubts instantly."
                },
                {
                  title: "Experienced NEET / JEE Faculty",
                  desc: "Taught by entrance experts and postgraduates with over 7+ years of specialized medical entrance coaching track record."
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                    flexShrink: 0
                  }}>
                    <Target size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Mock Test Performance Showcase */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2rem',
            color: '#0f172a',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
            border: '2px solid rgba(245, 158, 11, 0.4)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '1rem',
              marginBottom: '1.25rem'
            }}>
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#d97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Official Test Series Archive
                </span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', margin: 0 }}>
                  M3 Practice Test Spotlight
                </h4>
              </div>
              <div style={{
                background: '#ecfdf5',
                color: '#059669',
                padding: '0.3rem 0.65rem',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <FileText size={14} /> Full Test: 720 Marks
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {topPracticeScores.map((score) => (
                <div
                  key={score.rank}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    background: score.rank === 1 ? '#fffbeb' : '#f8fafc',
                    border: score.rank === 1 ? '1px solid #fde68a' : '1px solid #f1f5f9'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: score.rank === 1 ? '#f59e0b' : '#0f274a',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.8rem'
                    }}>
                      {score.rank}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.925rem' }}>
                        {score.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {score.status}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: score.rank === 1 ? '#b45309' : '#059669',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {score.mark}
                  </div>
                </div>
              ))}
            </div>

            {/* Application Action */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '14px',
              padding: '1.25rem',
              textAlign: 'center',
              border: '1px dashed #cbd5e1'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '0.75rem' }}>
                Admissions for <strong>Mission 30 (NEET & JEE 2026-27 Batch)</strong> are currently open for meritorious students.
              </div>
              <button
                onClick={() => {
                  const formEl = document.getElementById('admissions');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  if (onApplyClick) onApplyClick("Mission 30 (NEET & JEE Super Batch)");
                }}
                className="btn btn-amber"
                style={{ width: '100%', borderRadius: '10px' }}
              >
                <span>Register for Mission 30 Entrance Test</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Poster Showcase Banner */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Award size={32} color="#fbbf24" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
                Proven Medical College Placement Track Record
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Our students are currently pursuing MBBS at GMCH Guwahati, AMCH Dibrugarh, FAAMCH Barpeta, KMCH Kokrajhar, and SMCH Silchar.
              </div>
            </div>
          </div>

          <a 
            href="#achievers" 
            style={{
              color: '#34d399',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span>View All Doctors & Achievers</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
