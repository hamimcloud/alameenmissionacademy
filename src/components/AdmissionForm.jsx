import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Phone, 
  AlertCircle, 
  Download, 
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function AdmissionForm({ prefilledProgram }) {
  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    alternatePhone: '',
    email: '',
    stream: 'English Medium: Class XI - XII Science (CBSE/NEET)',
    boardingType: 'Hostel Required (Boys)',
    previousClass: '',
    previousMarks: '',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({
        ...prev,
        stream: prefilledProgram
      }));
    }
  }, [prefilledProgram]);

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = "Student name is required";
    if (!formData.guardianName.trim()) errs.guardianName = "Guardian name is required";
    
    // Validate phone
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Valid 10-digit phone number is required";
    }

    if (!formData.address.trim()) errs.address = "Address / Town is required";

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
    // Generate a unique registration reference ID
    const randomId = "AMA-" + Math.floor(100000 + Math.random() * 900000);
    setRefId(randomId);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      guardianName: '',
      phone: '',
      alternatePhone: '',
      email: '',
      stream: 'English Medium: Class XI - XII Science (CBSE/NEET)',
      boardingType: 'Hostel Required (Boys)',
      previousClass: '',
      previousMarks: '',
      address: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="admissions" className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge gold">
            <Sparkles size={15} />
            <span>SESSION {schoolInfo.admissionSession}</span>
          </div>
          <h2 className="section-title">
            Online <span className="highlight">Admission Inquiry</span> & Registration
          </h2>
          <p className="section-subtitle">
            Secure your child's seat at Assam's leading residential academy. Applications are screened strictly on merit through our entrance examination and academic assessment.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Admission Guidelines & Help */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #0a192f 0%, #153766 100%)',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '2.25rem',
              boxShadow: '0 20px 40px rgba(10, 25, 47, 0.15)',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Admission Roadmap
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                How the Admission Process Works
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    step: "1",
                    title: "Submit Online Inquiry",
                    desc: "Fill in the candidate and guardian details in this form or visit the academy office in Howly."
                  },
                  {
                    step: "2",
                    title: "Entrance Assessment",
                    desc: "Shortlisted candidates appear for a merit test covering Mathematics, Science, and Language aptitude."
                  },
                  {
                    step: "3",
                    title: "Counseling & Hostel Allocation",
                    desc: "Merit list publication, verification of past marksheets, and allocation of hostel rooms (Boys/Girls)."
                  }
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#f59e0b',
                      color: '#061224',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {s.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>{s.title}</div>
                      <div style={{ fontSize: '0.825rem', color: '#cbd5e1' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Scholarship Banner */}
            <div style={{
              background: '#ecfdf5',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <ShieldCheck size={26} color="#059669" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#065f46', margin: '0 0 0.25rem 0' }}>
                  Special Provision for Poor Meritorious Students
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#047857', margin: 0, lineHeight: 1.5 }}>
                  Financial constraints will never obstruct true merit. Special fee waivers and sponsorship quotas are available upon document verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: 'var(--shadow-lg)',
            padding: '2.5rem'
          }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.5rem' }}>
                  Inquiry Submitted Successfully!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you for applying. Your registration reference number is:
                </p>
                <div style={{
                  display: 'inline-block',
                  background: '#f8fafc',
                  border: '2px dashed #059669',
                  color: '#059669',
                  fontWeight: 900,
                  fontSize: '1.35rem',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  fontFamily: 'monospace'
                }}>
                  {refId}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '2rem' }}>
                  Our admission office will contact you on <strong>{formData.phone}</strong> shortly to guide you regarding the entrance schedule and syllabus.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={resetForm} className="btn btn-secondary">
                    Submit Another Application
                  </button>
                  <a href={`tel:${schoolInfo.primaryPhone}`} className="btn btn-primary">
                    <Phone size={16} />
                    <span>Call Admission Desk</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a192f', marginBottom: '1.5rem' }}>
                  Candidate Admission Form
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Enter student's full name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: errors.studentName ? '1px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {errors.studentName && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.studentName}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Father / Guardian Name *
                    </label>
                    <input
                      type="text"
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      placeholder="Enter parent/guardian name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: errors.guardianName ? '1px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {errors.guardianName && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.guardianName}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: errors.phone ? '1px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {errors.phone && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.phone}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. candidate@gmail.com"
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
                </div>

                {/* Desired Stream / Program Selection */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Select Course & Academic Stream *
                  </label>
                  <select
                    value={formData.stream}
                    onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
                  >
                    <option value="English Medium: Nursery to KG">English Medium: Nursery to KG</option>
                    <option value="English Medium: Class I to V">English Medium: Class I to V</option>
                    <option value="English Medium: Class VI to X">English Medium: Class VI to X (CBSE Pattern)</option>
                    <option value="English Medium: Class XI - XII Science (CBSE/NEET)">English Medium: Class XI - XII Science (CBSE Pattern / NEET)</option>
                    <option value="Assamese Medium: Class VI to X (Residential)">Assamese Medium: Class VI to X (Separate Residential Campus)</option>
                    <option value="Assamese Medium: Class XI - XII Science (Residential)">Assamese Medium: Class XI - XII Science (Residential)</option>
                    <option value="Mission 30 (NEET & JEE Super Batch)">Mission 30 (NEET & JEE Super Batch - Complete Residential)</option>
                  </select>
                </div>

                {/* Residential Preference */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Accommodation Preference *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
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
                          padding: '0.65rem 0.5rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
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

                {/* Address & Town */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Full Residential Address / District *
                  </label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Village/Town, District, Assam, PIN Code"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: errors.address ? '1px solid #ef4444' : '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.address && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.address}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', borderRadius: '12px' }}
                >
                  <Send size={18} />
                  <span>Submit Admission Registration</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
