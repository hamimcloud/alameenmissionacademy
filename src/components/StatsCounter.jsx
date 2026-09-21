import React from 'react';
import { Award, Users, BookOpen, Clock, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { statsData, schoolInfo } from '../data/schoolData';

export default function StatsCounter() {
  const icons = [Clock, Award, BookOpen, Users];

  return (
    <section style={{
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      position: 'relative',
      marginTop: '-2rem',
      zIndex: 10
    }}>
      <div className="container">
        {/* Main Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.25rem',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '1.75rem',
          boxShadow: '0 20px 40px -10px rgba(10, 25, 47, 0.08)',
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
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '14px',
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={26} color="#059669" />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.85rem',
                    fontWeight: 900,
                    color: '#0a192f',
                    lineHeight: 1,
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#334155', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Official Notice Ribbon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.25rem 0',
          fontSize: '0.875rem',
          color: '#475569'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <ShieldCheck size={18} color="#059669" />
            <span>
              Recognized Institution • <strong>HS/Darpan Code:</strong> {schoolInfo.darpanCode} • <strong>UDISE:</strong> {schoolInfo.udiseCode}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <PhoneCall size={18} color="#f59e0b" />
            <span>
              Admission Helplines: <a href={`tel:${schoolInfo.primaryPhone}`} style={{ fontWeight: 700, color: '#0a192f' }}>{schoolInfo.primaryPhone}</a> / <a href={`tel:${schoolInfo.secondaryPhone}`} style={{ fontWeight: 700, color: '#0a192f' }}>{schoolInfo.secondaryPhone}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
