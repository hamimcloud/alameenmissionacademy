import React, { useState } from 'react';
import { LogIn, ExternalLink, ShieldCheck, UserCheck, GraduationCap, Users, X, HelpCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('student');

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(6, 18, 36, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem',
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '540px',
        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
          color: '#ffffff',
          padding: '1.75rem 2rem',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'background 0.2s'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
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
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                fontSize: '0.725rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginBottom: '0.25rem'
              }}>
                <ShieldCheck size={13} /> SECURE ERP GATEWAY
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                Academy Portal Authentication
              </h3>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
            Official portal for students, faculty & administrative personnel
          </p>
        </div>

        {/* User Role Selector */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          background: '#f8fafc',
          padding: '0.5rem 1rem 0 1rem',
          gap: '0.5rem'
        }}>
          {[
            { id: 'student', label: 'Student / Boarder', icon: GraduationCap },
            { id: 'faculty', label: 'Faculty / Staff', icon: UserCheck },
            { id: 'parent', label: 'Parent Access', icon: Users }
          ].map(tab => {
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
                  gap: '0.5rem',
                  padding: '0.75rem 0.5rem',
                  fontSize: '0.85rem',
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
                <Icon size={16} color={isActive ? '#10b981' : '#94a3b8'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          <div style={{
            background: '#f1f5f9',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              {activeTab === 'student' && 'Student & Residential Portal Access'}
              {activeTab === 'faculty' && 'Faculty & Teaching Staff Login'}
              {activeTab === 'parent' && 'Parent / Guardian Academic Monitor'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55 }}>
              {activeTab === 'student' && 'Access your academic records, Mission 30 test scores, attendance registers, digital learning materials, and leave applications.'}
              {activeTab === 'faculty' && 'Enter marks, record student daily attendance, upload homework assignments, and manage academic curriculum schedules.'}
              {activeTab === 'parent' && 'View your child\'s performance reports, fee receipts, hostel health updates, and scheduled parent-teacher meeting notices.'}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.875rem 1rem',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '10px',
            marginBottom: '1.75rem'
          }}>
            <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.8125rem', color: '#065f46' }}>
              <strong>Portal Endpoint:</strong> <span style={{ fontFamily: 'monospace' }}>http://alameenmissionacademy.in/authentication</span>
            </div>
          </div>

          {/* Direct External Link Button */}
          <a
            href={schoolInfo.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.625rem',
              textDecoration: 'none'
            }}
          >
            <LogIn size={20} />
            <span>Open Official Login Portal</span>
            <ExternalLink size={16} />
          </a>

          {/* Credentials Assistance */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.625rem'
          }}>
            <HelpCircle size={18} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
              Need login credentials or password assistance? Please contact the Academy Admin Office at{' '}
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
