import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  LogIn, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Flame,
  MessageCircle
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Header({ onOpenLoginModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#programs' },
    { label: 'Mission 30', href: '#mission30', highlight: true },
    { label: 'Achievers', href: '#achievers' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Campus & Hostels', href: '#campus' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: isScrolled ? '0 8px 24px rgba(10, 25, 47, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
      transition: 'all 0.25s ease'
    }}>
      {/* Top Announcement & Information Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #061224 0%, #0a192f 50%, #0f274a 100%)',
        color: '#e2e8f0',
        fontSize: '0.8rem',
        padding: '0.45rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}>
          {/* Left Info: Codes & Helplines */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', overflow: 'hidden' }}>
            <div className="top-darpan" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24', fontWeight: 600, whiteSpace: 'nowrap' }}>
              <Sparkles size={13} />
              <span>Darpan: {schoolInfo.darpanCode} | UDISE: {schoolInfo.udiseCode}</span>
            </div>

            <a 
              href={`tel:${schoolInfo.primaryPhone}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0', whiteSpace: 'nowrap' }}
            >
              <Phone size={12} color="#10b981" />
              <span>{schoolInfo.primaryPhone}</span>
            </a>

            <a 
              href={`mailto:${schoolInfo.email}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}
              className="top-email"
            >
              <Mail size={12} color="#10b981" />
              <span>{schoolInfo.email}</span>
            </a>
          </div>

          {/* Right Info: Admission Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#34d399',
              fontSize: '0.75rem',
              fontWeight: 700,
              background: 'rgba(16, 185, 129, 0.15)',
              padding: '0.15rem 0.55rem',
              borderRadius: '999px',
              whiteSpace: 'nowrap'
            }}>
              <span className="pulse-dot"></span>
              <span>Admissions Open {schoolInfo.admissionSession}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        padding: isScrolled ? '0.65rem 0' : '0.85rem 0',
        transition: 'padding 0.25s ease',
        background: '#ffffff'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Logo & School Identity */}
          <a 
            href="#hero" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: '#ffffff',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(10, 25, 47, 0.08)',
              border: '1px solid #e2e8f0',
              flexShrink: 0
            }}>
              <img 
                src="/logo.png" 
                alt="Al-Ameen Mission Academy Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                color: '#0a192f',
                lineHeight: 1.15,
                whiteSpace: 'nowrap'
              }} className="header-brand-title">
                AL-AMEEN MISSION ACADEMY
              </div>
              <div style={{
                fontSize: '0.725rem',
                color: '#64748b',
                fontWeight: 700,
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap'
              }} className="header-brand-sub">
                <span>HOWLY, ASSAM</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ color: '#059669', fontWeight: 800 }}>ESTD. 2014</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-menu" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="desktop-nav-link"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: link.highlight ? '#b45309' : '#334155',
                  padding: '0.35rem 0',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {link.highlight && <Flame size={13} color="#f59e0b" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop & Mobile Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
            {/* Portal Login Button */}
            <button
              onClick={onOpenLoginModal}
              className="btn btn-portal btn-sm header-portal-btn"
              style={{
                borderRadius: '8px',
                padding: '0.5rem 0.85rem',
                fontSize: '0.8125rem'
              }}
            >
              <LogIn size={14} />
              <span>Portal</span>
            </button>

            {/* Apply Now Button */}
            <a
              href="#admissions"
              className="btn btn-primary btn-sm header-apply-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#admissions');
              }}
              style={{
                borderRadius: '8px',
                padding: '0.5rem 0.95rem',
                fontSize: '0.8125rem'
              }}
            >
              <span>Apply Now</span>
              <ChevronRight size={14} />
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="header-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '0.45rem',
                color: '#0f172a',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          boxShadow: '0 25px 35px -5px rgba(0,0,0,0.12)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          animation: 'slideDown 0.2s ease'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: link.highlight ? '#b45309' : '#1e293b',
                padding: '0.75rem 0.5rem',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {link.highlight && <Flame size={16} color="#f59e0b" />}
                <span>{link.label}</span>
              </div>
              <ChevronRight size={16} color="#94a3b8" />
            </a>
          ))}

          {/* Action CTAs in Mobile Drawer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '1rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
              className="btn btn-portal"
              style={{ width: '100%', padding: '0.85rem', borderRadius: '10px' }}
            >
              <LogIn size={16} />
              <span>ERP Portal Login</span>
            </button>

            <a
              href="#admissions"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#admissions');
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', borderRadius: '10px' }}
            >
              <span>Apply for Admission 2026-27</span>
            </a>
          </div>

          {/* Quick Help in Mobile Drawer */}
          <div style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            <a href={`tel:${schoolInfo.primaryPhone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0f172a', fontWeight: 700 }}>
              <Phone size={14} color="#10b981" />
              <span>Call Campus</span>
            </a>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <a 
              href={`https://wa.me/${schoolInfo.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#16a34a', fontWeight: 700 }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Breakpoint CSS */}
      <style>{`
        /* Desktop nav link hover animation */
        .desktop-nav-link:hover {
          color: #059669 !important;
        }
        .desktop-nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: #059669;
          transition: width 0.2s ease;
        }
        .desktop-nav-link:hover::after {
          width: 100%;
        }

        /* Large screens */
        @media (min-width: 1101px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .header-mobile-toggle {
            display: none !important;
          }
          .header-portal-btn {
            display: inline-flex !important;
          }
          .header-apply-btn {
            display: inline-flex !important;
          }
        }

        /* Tablet & Mobile Screens */
        @media (max-width: 1100px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .header-mobile-toggle {
            display: flex !important;
          }
          .header-brand-title {
            font-size: 1.05rem !important;
          }
        }

        /* Mobile specific adjustments (<= 640px) */
        @media (max-width: 640px) {
          .top-darpan {
            display: none !important;
          }
          .top-email {
            display: none !important;
          }
          .header-apply-btn {
            display: none !important;
          }
          .header-brand-title {
            font-size: 0.875rem !important;
            line-height: 1.15 !important;
            white-space: normal !important;
            max-width: 165px;
          }
          .header-brand-sub {
            font-size: 0.675rem !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
