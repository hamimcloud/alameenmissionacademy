import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Footer({ onOpenLoginModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a192f 0%, #061224 100%)',
      color: '#cbd5e1',
      padding: '4.5rem 0 2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: School Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: '#ffffff',
                padding: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/logo.png" 
                  alt="Al-Ameen Mission Academy Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  AL-AMEEN MISSION ACADEMY
                </h3>
                <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, letterSpacing: '0.05em' }}>
                  HOWLY, ASSAM • ESTD. 2014
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              A premier residential cum day-boarding institution dedicated to academic brilliance, moral character, and high-yield medical/engineering entrance coaching under our flagship <strong>Mission 30</strong>.
            </p>

            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '0.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.8rem'
            }}>
              <div style={{ color: '#fbbf24', fontWeight: 700 }}>
                Darpan Code: {schoolInfo.darpanCode}
              </div>
              <div style={{ color: '#e2e8f0' }}>
                UDISE: {schoolInfo.udiseCode}
              </div>
            </div>
          </div>

          {/* Column 2: Academic Streams */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              Academic Streams
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'English Medium (Nursery - X)', href: '#programs' },
                { label: 'Class XI & XII Science (CBSE/NCERT)', href: '#programs' },
                { label: 'Assamese Medium (Class VI - X)', href: '#programs' },
                { label: 'Assamese Medium (XI - XII Science)', href: '#programs' },
                { label: 'Mission 30 (M3 NEET Super Batch)', href: '#mission30' },
                { label: 'Separate Residential Hostels', href: '#campus' }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href.replace('#', ''));
                    }}
                    style={{
                      fontSize: '0.85rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s ease'
                    }}
                    className="footer-link"
                  >
                    <ChevronRight size={14} color="#059669" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Portals & Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              Portals & Admissions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <li>
                <button
                  onClick={onOpenLoginModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.85rem',
                    color: '#fbbf24',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Student & Staff Portal Login</span>
                </button>
              </li>
              <li>
                <a
                  href={schoolInfo.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.8rem', color: '#64748b', wordBreak: 'break-all' }}
                >
                  {schoolInfo.loginUrl}
                </a>
              </li>
              {[
                { label: 'Admission Inquiry Form', href: '#admissions' },
                { label: 'Results & Medical Achievers', href: '#achievers' },
                { label: 'Faculty Directory', href: '#faculty' },
                { label: 'Campus Photo Gallery', href: '#gallery' },
                { label: 'Circulars & Notice Board', href: '#notices' }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href.replace('#', ''));
                    }}
                    style={{
                      fontSize: '0.85rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                    className="footer-link"
                  >
                    <ChevronRight size={14} color="#059669" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              Academy Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{schoolInfo.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${schoolInfo.primaryPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {schoolInfo.primaryPhone}
                  </a>{' '}
                  /{' '}
                  <a href={`tel:${schoolInfo.secondaryPhone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {schoolInfo.secondaryPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href={`mailto:${schoolInfo.email}`} style={{ color: '#34d399', fontWeight: 600 }}>
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Al-Ameen Mission Academy, Howly</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Honesty • Dedication • Diligence</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
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
