import React, { useState } from 'react';
import { Bell, ChevronDown, ChevronUp, HelpCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { noticesList, faqList, schoolInfo } from '../data/schoolData';

export default function NoticeBoard({ onOpenLoginModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="notices" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem'
        }}>
          {/* Left Column: Official Notices & Circulars */}
          <div>
            <div className="section-badge">
              <Bell size={14} />
              <span>CIRCULARS & NOTICES</span>
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.5rem' }}>
              Latest Academy Announcements
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {noticesList.map((notice, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  className="notice-item"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: notice.category === 'Portal' ? '#b45309' : '#059669',
                      background: notice.category === 'Portal' ? '#fef3c7' : '#ecfdf5',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px'
                    }}>
                      {notice.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {notice.date}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                    {notice.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {notice.text}
                  </p>

                  {notice.category === 'Portal' && (
                    <button
                      onClick={onOpenLoginModal}
                      style={{
                        marginTop: '0.75rem',
                        background: 'none',
                        border: 'none',
                        color: '#2563eb',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span>Open Authentication Portal</span>
                      <ExternalLink size={13} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div>
            <div className="section-badge gold">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.5rem' }}>
              Common Queries for Parents
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {faqList.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      overflow: 'hidden',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'transparent',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: isOpen ? '#059669' : '#0f172a'
                      }}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={18} color="#059669" /> : <ChevronDown size={18} color="#94a3b8" />}
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.25rem 1.15rem 1.25rem',
                        fontSize: '0.875rem',
                        color: '#475569',
                        lineHeight: 1.6
                      }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
