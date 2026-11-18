import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Contact() {
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
    <section id="contact" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>CONTACT US</span>
          </div>
          <h2 className="section-title">
            Visit Our Campus in <span className="highlight">Howly Town</span>
          </h2>
          <p className="section-subtitle">
            Reach out for campus visits, admissions, or general inquiries.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card-modern" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                flexShrink: 0
              }}>
                <MapPin size={22} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.2rem' }}>
                  Campus Address
                </h4>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                  {schoolInfo.address}
                </p>
              </div>
            </div>

            <div className="card-modern" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706',
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.25rem' }}>
                  Helpline Numbers
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href={`tel:${schoolInfo.primaryPhone}`} style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f274a' }}>
                    {schoolInfo.primaryPhone}
                  </a>
                  <a href={`tel:${schoolInfo.secondaryPhone}`} style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f274a' }}>
                    {schoolInfo.secondaryPhone}
                  </a>
                </div>
                <div style={{ marginTop: '0.65rem' }}>
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
                      padding: '0.38rem 0.85rem',
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

            <div className="card-modern" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.2rem' }}>
                  Email
                </h4>
                <a href={`mailto:${schoolInfo.email}`} style={{ fontSize: '0.92rem', fontWeight: 600, color: '#059669', wordBreak: 'break-all' }}>
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="card-modern contact-form-card" style={{ padding: '1.75rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.75rem 0.5rem' }}>
                <CheckCircle size={44} color="#059669" style={{ margin: '0 auto 0.85rem auto' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.4rem' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  Thank you for reaching out. Our office will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setContactForm({ name: '', phone: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.1rem' }}>
                  Send a Message
                </h3>

                <div className="grid-form-2" style={{ marginBottom: '0.9rem' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '0.9rem' }}>
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder="e.g. Admission Inquiry"
                    className="form-input"
                  />
                </div>

                <div style={{ marginBottom: '1.15rem' }}>
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="How can we assist you?"
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', borderRadius: '10px', padding: '0.85rem' }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map" style={{
          marginTop: '2.5rem',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid #e2e8f0',
          height: '320px',
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

      <style>{`
        @media (max-width: 768px) {
          .contact-form-card {
            padding: 1.25rem !important;
          }
          .contact-map {
            height: 250px !important;
            margin-top: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
