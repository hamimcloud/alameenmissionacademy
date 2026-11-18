import React, { useState, useEffect } from 'react';
import { LogIn, ExternalLink, ShieldCheck, UserCheck, GraduationCap, Users, X, HelpCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('student');

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(6, 18, 36, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '500px',
          maxHeight: '92dvh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        {/* Header */}
        <div className="login-modal-header" style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
          color: '#ffffff',
          padding: '1.5rem',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingRight: '2.25rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: '#ffffff',
              padding: '2px',
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
              <span style={{
                background: 'rgba(245, 158, 11, 0.2)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#fbbf24',
                padding: '0.15rem 0.55rem',
                borderRadius: '999px',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginBottom: '0.25rem'
              }}>
                <ShieldCheck size={12} /> ERP PORTAL
              </span>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                Academy Portal Login
              </h3>
            </div>
          </div>
        </div>

        {/* Role Selector */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          background: '#f8fafc',
          padding: '0.5rem 0.75rem 0 0.75rem',
          gap: '0.35rem'
        }}>
          {[
            { id: 'student', label: 'Student', icon: GraduationCap },
            { id: 'faculty', label: 'Faculty', icon: UserCheck },
            { id: 'parent', label: 'Parent', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.65rem 0.35rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0f274a' : '#64748b',
                  background: isActive ? '#ffffff' : 'transparent',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  border: isActive ? '1px solid #e2e8f0' : '1px solid transparent',
                  borderBottom: isActive ? '2px solid #ffffff' : 'none',
                  marginBottom: isActive ? '-1px' : '0'
                }}
              >
                <Icon size={15} color={isActive ? '#10b981' : '#94a3b8'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="login-modal-body" style={{ padding: '1.5rem' }}>
          <div style={{
            background: '#f1f5f9',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.25rem',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
              {activeTab === 'student' && 'Student & Boarder Portal'}
              {activeTab === 'faculty' && 'Faculty & Staff Login'}
              {activeTab === 'parent' && 'Parent / Guardian Access'}
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
              {activeTab === 'student' && 'View test scores, attendance records, digital materials, and leave status.'}
              {activeTab === 'faculty' && 'Manage marks, daily student attendance, and curriculum assignments.'}
              {activeTab === 'parent' && 'Monitor academic progress, fee receipts, and hostel updates.'}
            </p>
          </div>

          <a
            href={schoolInfo.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.9rem',
              fontSize: '0.95rem',
              borderRadius: '12px',
              textDecoration: 'none'
            }}
          >
            <LogIn size={18} />
            <span>Open Official Login Portal</span>
            <ExternalLink size={15} />
          </a>

          <div style={{
            marginTop: '1.15rem',
            paddingTop: '1rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem'
          }}>
            <HelpCircle size={16} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>
              Need login help? Call{' '}
              <a href={`tel:${schoolInfo.primaryPhone}`} style={{ color: '#0f274a', fontWeight: 600 }}>
                {schoolInfo.primaryPhone}
              </a>{' '}
              or email{' '}
              <a href={`mailto:${schoolInfo.email}`} style={{ color: '#059669', fontWeight: 600 }}>
                {schoolInfo.email}
              </a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
