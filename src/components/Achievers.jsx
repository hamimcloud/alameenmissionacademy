import React, { useState } from 'react';
import { Stethoscope, GraduationCap, Star, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import { achieversData } from '../data/schoolData';

export default function Achievers() {
  const [activeTab, setActiveTab] = useState('medical');
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAll(false);
  };

  const medicalList = showAll ? achieversData.medicalCollege : achieversData.medicalCollege.slice(0, 6);
  const hsList = showAll ? achieversData.boardResultsHS : achieversData.boardResultsHS.slice(0, 6);
  const hslcList = showAll ? achieversData.boardResultsHSLC : achieversData.boardResultsHSLC.slice(0, 6);

  const currentTotal =
    activeTab === 'medical'
      ? achieversData.medicalCollege.length
      : activeTab === 'hs_science'
        ? achieversData.boardResultsHS.length
        : achieversData.boardResultsHSLC.length;

  return (
    <section id="achievers" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <Trophy size={15} />
            <span>HALL OF FAME</span>
          </div>
          <h2 className="section-title">
            Our <span className="highlight">Outstanding Achievers</span>
          </h2>
          <p className="section-subtitle">
            Government medical college selections and state board distinctions.
          </p>
        </div>

        {/* Responsive Tab Buttons */}
        <div className="achievers-tabs" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          {[
            { id: 'medical', label: 'NEET & Medical', icon: Stethoscope },
            { id: 'hs_science', label: 'H.S. Science 2024', icon: GraduationCap },
            { id: 'hslc', label: 'H.S.L.C. 2025', icon: Star }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.15rem',
                  borderRadius: '10px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  background: isActive ? '#0a192f' : '#ffffff',
                  color: isActive ? '#fbbf24' : '#475569',
                  border: isActive ? '1px solid #0a192f' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 4px 14px rgba(10, 25, 47, 0.14)' : 'none'
                }}
              >
                <Icon size={16} color={isActive ? '#fbbf24' : '#64748b'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Medical Selections */}
        {activeTab === 'medical' && (
          <div className="grid-cards">
            {medicalList.map((student, idx) => (
              <div
                key={idx}
                className="card-modern"
                style={{
                  padding: '1.25rem 1.35rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #10b981, #059669)'
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#059669',
                    background: '#ecfdf5',
                    padding: '0.18rem 0.55rem',
                    borderRadius: '6px'
                  }}>
                    {student.category}
                  </span>
                  <span style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#b45309',
                    background: '#fffbeb',
                    border: '1px solid #fef3c7',
                    padding: '0.18rem 0.5rem',
                    borderRadius: '6px'
                  }}>
                    {student.score}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                  {student.name}
                </h4>

                <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.4 }}>
                  {student.college}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: H.S. Science 2024 */}
        {activeTab === 'hs_science' && (
          <div>
            <div className="grid-4" style={{
              background: '#0a192f',
              color: '#ffffff',
              borderRadius: '14px',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              {[
                { val: '53', label: 'Appeared', color: '#34d399' },
                { val: '48', label: '1st Division', color: '#fbbf24' },
                { val: '15', label: 'Star Marks', color: '#38bdf8' },
                { val: '02', label: 'Distinctions', color: '#f472b6' }
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.55rem', fontWeight: 900, color: s.color, lineHeight: 1.1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid-cards">
              {hsList.map((res, idx) => (
                <div key={idx} className="card-modern" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: res.badge === 'Distinction' ? '#b45309' : '#059669',
                      background: res.badge === 'Distinction' ? '#fef3c7' : '#ecfdf5',
                      padding: '0.18rem 0.5rem',
                      borderRadius: '6px'
                    }}>
                      {res.badge}
                    </span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0a192f', fontFamily: 'var(--font-heading)' }}>
                      {res.percentage}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                    {res.name}
                  </h4>

                  <div style={{ fontSize: '0.78rem', color: '#64748b', background: '#f8fafc', padding: '0.45rem 0.65rem', borderRadius: '8px' }}>
                    {res.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: H.S.L.C. 2025 */}
        {activeTab === 'hslc' && (
          <div className="grid-cards">
            {hslcList.map((hslc, idx) => (
              <div
                key={idx}
                className="card-modern"
                style={{
                  padding: '1.25rem',
                  borderLeft: '4px solid #f59e0b'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: hslc.badge === 'Distinction' ? '#b45309' : '#059669',
                    background: hslc.badge === 'Distinction' ? '#fffbeb' : '#ecfdf5',
                    padding: '0.18rem 0.5rem',
                    borderRadius: '6px'
                  }}>
                    {hslc.badge}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0a192f', fontFamily: 'var(--font-heading)' }}>
                    {hslc.percentage}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>
                  {hslc.name}
                </h4>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {hslc.medium}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show All / Show Less Toggle */}
        {currentTotal > 6 && (
          <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-secondary btn-sm"
              style={{ borderRadius: '999px', padding: '0.6rem 1.35rem' }}
            >
              <span>{showAll ? 'Show Less' : `View All (${currentTotal})`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
