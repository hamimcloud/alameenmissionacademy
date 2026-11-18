import React from 'react';
import { Home, FlaskConical, ShieldAlert, Utensils, Library, Compass } from 'lucide-react';
import { facilitiesData } from '../data/schoolData';

export default function CampusLife() {
  const iconMap = {
    Home,
    FlaskConical,
    ShieldAlert,
    Utensils,
    Library,
    Compass
  };

  return (
    <section id="campus" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Home size={15} />
            <span>CAMPUS & HOSTELS</span>
          </div>
          <h2 className="section-title">
            Safe, Disciplined <span className="highlight">Campus Facilities</span>
          </h2>
          <p className="section-subtitle">
            Separate residential hostels for boys and girls in a structured, distraction-free campus.
          </p>
        </div>

        <div className="grid-3">
          {facilitiesData.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Home;
            return (
              <div
                key={idx}
                className="card-modern"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  border: '1px solid rgba(16, 185, 129, 0.22)'
                }}>
                  <Icon size={22} />
                </div>

                <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0a192f', margin: 0 }}>
                  {fac.title}
                </h4>

                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
