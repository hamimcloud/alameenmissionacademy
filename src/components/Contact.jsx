import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Contact({ onOpenLoginModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>CONNECT WITH US</span>
          </div>
          <h2 className="section-title">
            Visit Our Campus in <span className="highlight">Howly Town</span>
          </h2>
          <p className="section-subtitle">
            We welcome parents, prospective students, and guardians for campus tours, admission inquiries, and faculty interactions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Address Card */}
            <div className="card-modern" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                flexShrink: 0
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.25rem' }}>
                  Academy Location
                </h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  {schoolInfo.address}
                </p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>
                  Barpeta District, Assam, India • PIN: 781316
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="card-modern" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706',
                flexShrink: 0
              }}>
                <Phone size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.25rem' }}>
                  Helpline Numbers
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a 
                    href={`tel:${schoolInfo.primaryPhone}`} 
                    style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f274a' }}
                  >
                    {schoolInfo.primaryPhone}
                  </a>
                  <a 
                    href={`tel:${schoolInfo.secondaryPhone}`} 
                    style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f274a' }}
                  >
                    {schoolInfo.secondaryPhone}
                  </a>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href={`https://wa.me/${schoolInfo.whatsappNumber}?text=Hello%20Al-Ameen%20Mission%20Academy,%20I%20would%20like%20information%20regarding%20admissions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: '#25d366',
                      color: '#ffffff',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    <MessageCircle size={15} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-modern" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                flexShrink: 0
              }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.25rem' }}>
                  Official Email
                </h4>
                <a 
                  href={`mailto:${schoolInfo.email}`} 
                  style={{ fontSize: '0.95rem', fontWeight: 600, color: '#059669' }}
                >
                  {schoolInfo.email}
                </a>
                <div style={{ marginTop: '0.35rem', fontSize: '0.8rem', color: '#64748b' }}>
                  For general administration, admission inquiries & credentials support
                </div>
              </div>
            </div>

            {/* Portal Banner */}
            <div style={{
              background: '#0a192f',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fbbf24' }}>
                  Student / Staff Portal
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  http://alameenmissionacademy.in/authentication
                </div>
              </div>
              <button
                onClick={onOpenLoginModal}
                className="btn btn-portal btn-sm"
              >
                <span>Login</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="card-modern" style={{ padding: '2.25rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle size={48} color="#059669" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.5rem' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. Our administration office will respond promptly to your query.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setContactForm({ name: '', phone: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.25rem' }}>
                  Send a Direct Message
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. Rahul / Ahmed"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="e.g. Admission Inquiry for Class XI Science"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="How can we assist you?"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', borderRadius: '10px', padding: '0.875rem' }}
                >
                  <Send size={16} />
                  <span>Send Message to Academy</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div style={{
          marginTop: '3.5rem',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid #e2e8f0',
          height: '340px',
          background: '#e2e8f0'
        }}>
          <iframe
            title="Al-Ameen Mission Academy Location Map"
            src="https://maps.google.com/maps?q=Howly,%20Barpeta,%20Assam,%20781316&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
