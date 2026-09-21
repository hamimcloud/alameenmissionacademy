import React, { useState } from 'react';
import { Award, Stethoscope, GraduationCap, Star, CheckCircle, Trophy, Sparkles } from 'lucide-react';
import { achieversData } from '../data/schoolData';

export default function Achievers() {
  const [activeTab, setActiveTab] = useState('medical');

  return (
    <section id="achievers" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <Trophy size={15} />
            <span>HALL OF FAME</span>
          </div>
          <h2 className="section-title">
            Celebrating Our <span className="highlight">Outstanding Achievers</span>
          </h2>
          <p className="section-subtitle">
            From premier government medical colleges to state board distinctions, our students continuously make Al-Ameen Mission Academy proud.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {[
            { id: 'medical', label: 'NEET & Medical Selections (MBBS/BDS)', icon: Stethoscope },
            { id: 'hs_science', label: 'H.S. Science Final 2024 Toppers', icon: GraduationCap },
            { id: 'hslc', label: 'H.S.L.C. 2025 Board Results', icon: Star }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 1.35rem',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  background: isActive ? '#0a192f' : '#ffffff',
                  color: isActive ? '#fbbf24' : '#475569',
                  border: isActive ? '1px solid #0a192f' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 4px 15px rgba(10, 25, 47, 0.15)' : 'none'
                }}
              >
                <Icon size={18} color={isActive ? '#fbbf24' : '#64748b'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Medical & NEET Selections */}
        {activeTab === 'medical' && (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '16px',
              padding: '1.25rem 1.75rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Stethoscope size={28} color="#059669" />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#065f46', margin: 0 }}>
                    Official NEET & Govt. Medical College Selections
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#047857', margin: 0 }}>
                    Alumni and students admitted into prestigious medical universities across Assam
                  </p>
                </div>
              </div>
              <div style={{
                background: '#ffffff',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#059669',
                boxShadow: 'var(--shadow-sm)'
              }}>
                15+ Featured Medical Selections
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}>
              {achieversData.medicalCollege.map((student, idx) => (
                <div
                  key={idx}
                  className="card-modern"
                  style={{
                    padding: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #10b981, #059669)'
                  }} />

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#059669',
                        background: '#ecfdf5',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px'
                      }}>
                        {student.category}
                      </span>
                      <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: '#b45309',
                        background: '#fffbeb',
                        border: '1px solid #fef3c7',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px'
                      }}>
                        {student.score}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                      {student.name}
                    </h4>

                    <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.45 }}>
                      <strong>Institution:</strong> {student.college}
                    </div>
                  </div>

                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    color: '#64748b'
                  }}>
                    <CheckCircle size={14} color="#10b981" />
                    <span>Al-Ameen Mission Academy Alumnus</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: H.S. Final 2024 (Science) */}
        {activeTab === 'hs_science' && (
          <div>
            {/* Quick Summary Banner */}
            <div style={{
              background: '#0a192f',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '1rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34d399' }}>53</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Total Appeared</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fbbf24' }}>48</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>1st Division Holders</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#38bdf8' }}>15</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Star Marks</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f472b6' }}>02</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>State Distinctions</div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.25rem'
            }}>
              {achieversData.boardResultsHS.map((res, idx) => (
                <div
                  key={idx}
                  className="card-modern"
                  style={{
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: res.badge === 'Distinction' ? '#b45309' : '#059669',
                      background: res.badge === 'Distinction' ? '#fef3c7' : '#ecfdf5',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px'
                    }}>
                      {res.badge}
                    </span>
                    <span style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#0a192f',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {res.percentage}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                    {res.name}
                  </h4>

                  <div style={{ fontSize: '0.8rem', color: '#64748b', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                    {res.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: H.S.L.C. 2025 Board Results */}
        {activeTab === 'hslc' && (
          <div>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.25rem 1.75rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <Star size={26} color="#f59e0b" />
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  H.S.L.C. Final Results (Assamese Medium Campus)
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  Consistently demonstrating high ranks from our dedicated residential Assamese medium stream
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem'
            }}>
              {achieversData.boardResultsHSLC.map((hslc, idx) => (
                <div
                  key={idx}
                  className="card-modern"
                  style={{
                    padding: '1.5rem',
                    borderLeft: '4px solid #f59e0b'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: hslc.badge === 'Distinction' ? '#b45309' : '#059669',
                      background: hslc.badge === 'Distinction' ? '#fffbeb' : '#ecfdf5',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '6px'
                    }}>
                      {hslc.badge}
                    </span>
                    <span style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#0a192f',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {hslc.percentage}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                    {hslc.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    {hslc.medium}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
