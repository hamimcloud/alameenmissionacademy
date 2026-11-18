import React from 'react';
import { Award, Users, BookOpen, Clock } from 'lucide-react';
import { statsData } from '../data/schoolData';

export default function StatsCounter() {
  const icons = [Clock, Award, BookOpen, Users];

  return (
    <section className="stats-section" style={{
      background: '#f8fafc',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div className="grid-4 stats-box" style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '1.25rem',
          boxShadow: '0 16px 35px -10px rgba(10, 25, 47, 0.08)',
          border: '1px solid #e2e8f0'
        }}>
          {statsData.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} color="#059669" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontSize: '1.65rem',
                    fontWeight: 900,
                    color: '#0a192f',
                    lineHeight: 1,
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-section {
          margin-top: -2.25rem;
          padding-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .stats-section {
            margin-top: 0;
            padding-top: 1.5rem;
            padding-bottom: 0;
          }
          .stats-box {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
