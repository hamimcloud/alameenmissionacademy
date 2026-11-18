import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, ExternalLink, ChevronRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Footer({ onOpenLoginModal }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a192f 0%, #061224 100%)',
      color: '#cbd5e1',
      padding: '3.5rem 0 1.75rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '2.25rem',
          marginBottom: '2.5rem'
        }}>
          {/* Column 1: Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.9rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: '#ffffff',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src="/logo.png"
                  alt="Al-Ameen Mission Academy Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  AL-AMEEN MISSION ACADEMY
                </h3>
                <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, letterSpacing: '0.05em' }}>
                  HOWLY, ASSAM • ESTD. 2014
                </div>
              </div>
            </div>

            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.2rem',
              padding: '0.65rem 0.9rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.78rem'
            }}>
              <div style={{ color: '#fbbf24', fontWeight: 700 }}>
                Darpan Code: {schoolInfo.darpanCode}
              </div>
              <div style={{ color: '#e2e8f0' }}>
                UDISE: {schoolInfo.udiseCode}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'About Academy', href: '#about' },
                { label: 'Academic Programs', href: '#programs' },
                { label: 'Mission 30 (NEET / JEE)', href: '#mission30' },
                { label: 'Achievers & Results', href: '#achievers' },
                { label: 'Faculty Directory', href: '#faculty' },
                { label: 'Campus & Hostels', href: '#campus' },
                { label: 'Online Admission', href: '#admissions' }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href.replace('#', ''));
                    }}
                    className="footer-link"
                    style={{
                      fontSize: '0.84rem',
                      color: '#94a3b8',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <ChevronRight size={14} color="#059669" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office & Portal */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              Academy Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{schoolInfo.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Phone size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${schoolInfo.primaryPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {schoolInfo.primaryPhone}
                  </a>
                  {' / '}
                  <a href={`tel:${schoolInfo.secondaryPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {schoolInfo.secondaryPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href={`mailto:${schoolInfo.email}`} style={{ color: '#34d399', fontWeight: 600 }}>
                  {schoolInfo.email}
                </a>
              </div>

              <button
                onClick={onOpenLoginModal}
                style={{
                  marginTop: '0.35rem',
                  alignSelf: 'flex-start',
                  background: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.35)',
                  borderRadius: '8px',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  color: '#fbbf24',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <ExternalLink size={14} />
                <span>Student / Staff Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.85rem',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#cbd5e1' }}>Al-Ameen Mission Academy, Howly</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Honesty • Dedication • Diligence</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #34d399 !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
}
