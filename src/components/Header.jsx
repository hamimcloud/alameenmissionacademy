import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  LogIn,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Header({ onOpenLoginModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Achievers', href: '#achievers' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Campus', href: '#campus' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: isScrolled ? '0 8px 24px rgba(10, 25, 47, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
      transition: 'box-shadow 0.25s ease'
    }}>
      {/* Top Info Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #061224 0%, #0a192f 50%, #0f274a 100%)',
        color: '#e2e8f0',
        fontSize: '0.78rem',
        padding: '0.4rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
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

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: '#34d399',
            fontSize: '0.72rem',
            fontWeight: 700,
            background: 'rgba(16, 185, 129, 0.15)',
            padding: '0.15rem 0.55rem',
            borderRadius: '999px',
            whiteSpace: 'nowrap'
          }}>
            <span className="pulse-dot"></span>
            <span>Admissions {schoolInfo.admissionSession}</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        padding: isScrolled ? '0.6rem 0' : '0.8rem 0',
        transition: 'padding 0.25s ease',
        background: '#ffffff'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              minWidth: 0
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#ffffff',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e2e8f0',
              flexShrink: 0
            }}>
              <img
                src="/logo.png"
                alt="Al-Ameen Mission Academy Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="header-brand-title" style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.08rem',
                letterSpacing: '-0.02em',
                color: '#0a192f',
                lineHeight: 1.15
              }}>
                AL-AMEEN MISSION ACADEMY
              </div>
              <div className="header-brand-sub" style={{
                fontSize: '0.7rem',
                color: '#64748b',
                fontWeight: 700,
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <span>HOWLY, ASSAM</span>
                <span style={{ color: '#cbd5e1' }}>•</span>
                <span style={{ color: '#059669', fontWeight: 800 }}>ESTD. 2014</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav-menu" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.15rem'
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
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#334155',
                  padding: '0.3rem 0',
                  position: 'relative',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button
              onClick={onOpenLoginModal}
              className="btn btn-portal btn-sm header-portal-btn"
              style={{ borderRadius: '8px', padding: '0.48rem 0.8rem', fontSize: '0.8rem' }}
            >
              <LogIn size={14} />
              <span>Portal</span>
            </button>

            <a
              href="#admissions"
              className="btn btn-primary btn-sm header-apply-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#admissions');
              }}
              style={{ borderRadius: '8px', padding: '0.48rem 0.9rem', fontSize: '0.8rem' }}
            >
              <span>Apply Now</span>
              <ChevronRight size={14} />
            </a>

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
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          boxShadow: '0 25px 35px -5px rgba(0,0,0,0.12)',
          padding: '1rem 1.25rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.15rem',
          maxHeight: 'calc(100vh - 96px)',
          overflowY: 'auto'
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
                color: '#1e293b',
                padding: '0.7rem 0.4rem',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} color="#94a3b8" />
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.85rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
              className="btn btn-portal"
              style={{ width: '100%', padding: '0.8rem', borderRadius: '10px' }}
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
              style={{ width: '100%', padding: '0.8rem', borderRadius: '10px' }}
            >
              <span>Apply for Admission {schoolInfo.admissionSession}</span>
            </a>
          </div>

          <div style={{
            marginTop: '0.85rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            fontSize: '0.8rem'
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

      <style>{`
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

        @media (max-width: 1080px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .header-mobile-toggle {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .top-darpan,
          .top-email {
            display: none !important;
          }
          .header-apply-btn {
            display: none !important;
          }
          .header-brand-title {
            font-size: 0.92rem !important;
          }
        }

        @media (max-width: 420px) {
          .header-portal-btn {
            display: none !important;
          }
          .header-brand-title {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </header>
  );
}
