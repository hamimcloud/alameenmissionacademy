import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AdmissionForm({ prefilledProgram }) {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    email: '',
    stream: 'English Medium: Class XI - XII Science (CBSE/NEET)',
    boardingType: 'Hostel Required (Boys)',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (!prefilledProgram) return;
    const programMap = {
      'English Medium Stream': 'English Medium: Class XI - XII Science (CBSE/NEET)',
      'Assamese Medium Stream': 'Assamese Medium: Class VI to X (Residential)',
      'Mission 30 (M3 Elite Batch)': 'Mission 30 (NEET & JEE Super Batch)'
    };
    setFormData((prev) => ({
      ...prev,
      stream: programMap[prefilledProgram] || prefilledProgram
    }));
  }, [prefilledProgram]);

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.guardianName.trim()) errs.guardianName = 'Guardian name is required';
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.address.trim()) errs.address = 'Address / Town is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setRefId('AMA-' + Math.floor(100000 + Math.random() * 900000));
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      guardianName: '',
      phone: '',
      email: '',
      stream: 'English Medium: Class XI - XII Science (CBSE/NEET)',
      boardingType: 'Hostel Required (Boys)',
      address: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="admissions" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <Sparkles size={15} />
            <span>SESSION {schoolInfo.admissionSession}</span>
          </div>
          <h2 className="section-title">
            Online <span className="highlight">Admission Inquiry</span>
          </h2>
          <p className="section-subtitle">
            Merit-based admission across English Medium, Assamese Medium, and Mission 30.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Left Column: Concise Steps & Scholarship */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="admission-guide-card" style={{
              background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '1.75rem',
              boxShadow: '0 18px 36px rgba(10, 25, 47, 0.14)'
            }}>
              <span style={{
                color: '#fbbf24',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.35rem'
              }}>
                How It Works
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.15rem' }}>
                3-Step Admission Process
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { step: '1', title: 'Submit Inquiry', desc: 'Fill in student and guardian details online or at our Howly office.' },
                  { step: '2', title: 'Entrance Test', desc: 'Appear for our merit test in Maths, Science, and Language.' },
                  { step: '3', title: 'Enrollment & Hostel', desc: 'Merit selection, document verification, and hostel allocation.' }
                ].map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#f59e0b',
                      color: '#061224',
                      fontWeight: 900,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {s.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff' }}>{s.title}</div>
                      <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#ecfdf5',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              display: 'flex',
              gap: '0.85rem',
              alignItems: 'flex-start'
            }}>
              <ShieldCheck size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065f46', margin: '0 0 0.2rem 0' }}>
                  Scholarships for Meritorious Students
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#047857', margin: 0, lineHeight: 1.5 }}>
                  Special fee concessions are available for talented students from financially weaker backgrounds.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="card-modern admission-form-card" style={{ padding: '2rem' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                <div style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.4rem' }}>
                  Inquiry Submitted!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.1rem' }}>
                  Your registration reference number:
                </p>
                <div style={{
                  display: 'inline-block',
                  background: '#f8fafc',
                  border: '2px dashed #059669',
                  color: '#059669',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '10px',
                  marginBottom: '1.25rem',
                  fontFamily: 'monospace'
                }}>
                  {refId}
                </div>
                <p style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  We will contact you on <strong>{formData.phone}</strong> regarding the entrance test schedule.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button onClick={resetForm} className="btn btn-secondary btn-sm">
                    Submit Another
                  </button>
                  <a href={`tel:${schoolInfo.primaryPhone}`} className="btn btn-primary btn-sm">
                    <Phone size={15} />
                    <span>Call Office</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.25rem' }}>
                  Candidate Registration Form
                </h3>

                <div className="grid-form-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <label className="form-label">Student Full Name *</label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student's full name"
                      className="form-input"
                      style={{ borderColor: errors.studentName ? '#ef4444' : undefined }}
                    />
                    {errors.studentName && <span style={{ fontSize: '0.74rem', color: '#ef4444' }}>{errors.studentName}</span>}
                  </div>

                  <div>
                    <label className="form-label">Father / Guardian Name *</label>
                    <input
                      type="text"
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      placeholder="Parent/guardian name"
                      className="form-input"
                      style={{ borderColor: errors.guardianName ? '#ef4444' : undefined }}
                    />
                    {errors.guardianName && <span style={{ fontSize: '0.74rem', color: '#ef4444' }}>{errors.guardianName}</span>}
                  </div>
                </div>

                <div className="grid-form-2" style={{ marginBottom: '1rem' }}>
                  <div>
                    <label className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="form-input"
                      style={{ borderColor: errors.phone ? '#ef4444' : undefined }}
                    />
                    {errors.phone && <span style={{ fontSize: '0.74rem', color: '#ef4444' }}>{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="form-label">Email (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="candidate@gmail.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Course & Stream *</label>
                  <select
                    value={formData.stream}
                    onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                    className="form-input"
                  >
                    <option value="English Medium: Nursery to KG">English Medium: Nursery to KG</option>
                    <option value="English Medium: Class I to V">English Medium: Class I to V</option>
                    <option value="English Medium: Class VI to X">English Medium: Class VI to X (CBSE Pattern)</option>
                    <option value="English Medium: Class XI - XII Science (CBSE/NEET)">English Medium: Class XI - XII Science (CBSE / NEET)</option>
                    <option value="Assamese Medium: Class VI to X (Residential)">Assamese Medium: Class VI to X (Residential)</option>
                    <option value="Assamese Medium: Class XI - XII Science (Residential)">Assamese Medium: Class XI - XII Science (Residential)</option>
                    <option value="Mission 30 (NEET & JEE Super Batch)">Mission 30 (NEET & JEE Super Batch)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="form-label">Accommodation *</label>
                  <div className="grid-form-3">
                    {[
                      'Hostel Required (Boys)',
                      'Hostel Required (Girls)',
                      'Day Scholar (Non-Hostel)'
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, boardingType: opt })}
                        style={{
                          padding: '0.6rem 0.5rem',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: formData.boardingType === opt ? 700 : 500,
                          background: formData.boardingType === opt ? '#0f274a' : '#f8fafc',
                          color: formData.boardingType === opt ? '#fbbf24' : '#475569',
                          border: formData.boardingType === opt ? '1px solid #0f274a' : '1px solid #e2e8f0'
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label">Residential Address / District *</label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Village/Town, District, Assam, PIN"
                    className="form-input"
                    style={{ borderColor: errors.address ? '#ef4444' : undefined }}
                  />
                  {errors.address && <span style={{ fontSize: '0.74rem', color: '#ef4444' }}>{errors.address}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', borderRadius: '12px' }}
                >
                  <Send size={17} />
                  <span>Submit Registration</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admission-guide-card,
          .admission-form-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
