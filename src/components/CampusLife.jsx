import React from 'react';
import { Home, FlaskConical, ShieldAlert, Utensils, Library, Compass, CheckCircle2 } from 'lucide-react';
import { facilitiesData } from '../data/schoolData';

export default function CampusLife() {
  const iconMap = {
    Home: Home,
    FlaskConical: FlaskConical,
    ShieldAlert: ShieldAlert,
    Utensils: Utensils,
    Library: Library,
    Compass: Compass
  };

  return (
    <section id="campus" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Home size={15} />
            <span>CAMPUS & RESIDENTIAL FACILITIES</span>
          </div>
          <h2 className="section-title">
            A Safe, Disciplined <span className="highlight">Home Away from Home</span>
          </h2>
          <p className="section-subtitle">
            Our residential ecosystem is purposefully designed for deep concentration, safety, and physical well-being, providing separate facilities for boys and girls.
          </p>
        </div>

        {/* Facilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {facilitiesData.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Home;
            return (
              <div
                key={idx}
                className="card-modern"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '2rem'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669',
                  border: '1px solid rgba(16, 185, 129, 0.25)'
                }}>
                  <Icon size={26} />
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', margin: 0 }}>
                  {fac.title}
                </h4>

                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hostel Safety & Discipline Feature Box */}
        <div style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
          borderRadius: '24px',
          padding: '2.5rem',
          color: '#ffffff',
          boxShadow: '0 20px 45px rgba(10, 25, 47, 0.2)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                Residential Safeguards & Discipline
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Uncompromising Security & Structured Routines
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Our daily schedule begins with morning prayers and assembly, followed by intensive school classes, supervised sports, nutritious meals, and mandatory evening study hours under faculty proctors.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                "Strict boundary gates with 24/7 security watch",
                "Full-time resident wardens for both Boys & Girls hostels",
                "Periodic medical check-ups and first-aid support",
                "Dedicated visitor timings and parent communication windows"
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
