import React from 'react';
import { 
  Award, 
  PhoneOff, 
  HeartHandshake, 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpenCheck,
  Quote
} from 'lucide-react';
import { keyRules, schoolInfo } from '../data/schoolData';

export default function About() {
  const iconMap = {
    Award: Award,
    SmartphoneOff: PhoneOff,
    HeartHandshake: HeartHandshake,
    Home: Home,
    ShieldCheck: ShieldCheck,
    BookOpenCheck: BookOpenCheck
  };

  return (
    <section id="about" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>ABOUT OUR INSTITUTION</span>
          </div>
          <h2 className="section-title">
            Fostering <span className="highlight">Honesty, Dedication</span> & Academic Diligence
          </h2>
          <p className="section-subtitle">
            Established in 2014 in Howly Town, Al-Ameen Mission Academy has emerged as a landmark center for academic distinction, residential discipline, and NEET/JEE medical selections.
          </p>
        </div>

        {/* Principal Message & Institutional Core Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4.5rem'
        }}>
          {/* Principal's Card */}
          <div style={{
            background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 20px 40px rgba(10, 25, 47, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Quote 
              size={120} 
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                color: 'rgba(255, 255, 255, 0.04)',
                pointerEvents: 'none'
              }} 
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                  fontSize: '1.5rem',
                  color: '#fbbf24'
                }}>
                  AS
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                  Abdus Sabur
                </h3>
                <div style={{ color: '#34d399', fontSize: '0.875rem', fontWeight: 700 }}>
                  Principal, Al-Ameen Mission Academy
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                  M.A, Dip. Mass Com • Ex-Navy
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}>
              "True education goes far beyond textbook memorization. At Al-Ameen Mission Academy, we instill naval-grade discipline, unwavering moral character, and intellectual rigor. We create a distraction-free sanctum where every child can realize their potential and emerge as doctors, engineers, and upright leaders."
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '1rem'
            }}>
              <span style={{ fontSize: '0.8125rem', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.05em' }}>
                HONESTY • DEDICATION • DILIGENCE
              </span>
              <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
                Estd. 2014
              </span>
            </div>
          </div>

          {/* Academy Mission & Philosophy */}
          <div>
            <div className="section-badge gold">
              <span>OUR PHILOSOPHY</span>
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0a192f', marginBottom: '1rem' }}>
              A Safe, Focused Sanctuary for High Achievers
            </h3>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Located in the peaceful town of Howly, Barpeta, Al-Ameen Mission Academy operates with a dedicated campus architecture designed specifically to prevent modern digital distractions.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                "Comprehensive dual-medium education (English Medium CBSE pattern + Assamese Medium)",
                "Full-fledged residential boarding with individual academic care and mentoring",
                "Flagship 'Mission 30' residential batch for high-yield NEET & JEE performance",
                "Proven track record of placing students in GMCH, FAAMCH, NMCH, KMCH, and SMCH"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Special Rules & Core Features Grid */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0a192f' }}>
            Core Institutional Standards & Values
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
            What makes Al-Ameen Mission Academy stand out as Assam's trusted residential learning sanctuary
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '1.5rem'
        }}>
          {keyRules.map((rule, index) => {
            const IconComponent = iconMap[rule.icon] || ShieldCheck;
            return (
              <div 
                key={index} 
                className="card-modern"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669'
                }}>
                  <IconComponent size={24} />
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>
                  {rule.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                  {rule.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
