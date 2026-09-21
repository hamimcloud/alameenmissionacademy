import React, { useState } from 'react';
import { Users, GraduationCap, Award, BookOpen, Briefcase, ChevronRight } from 'lucide-react';
import { facultyData } from '../data/schoolData';

export default function Faculty() {
  const [activeDept, setActiveDept] = useState('All');

  const departments = ['All', 'Chemistry', 'Biology', 'Physics', 'Mathematics', 'Languages'];

  const filteredFaculty = facultyData.filter((member) => {
    if (activeDept === 'All') return true;
    if (activeDept === 'Languages') {
      return member.department.includes('English') || member.department.includes('Assamese');
    }
    return member.department.toLowerCase().includes(activeDept.toLowerCase());
  });

  return (
    <section id="faculty" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={15} />
            <span>EXPERT EDUCATORS</span>
          </div>
          <h2 className="section-title">
            Distinguished <span className="highlight">Faculty & Subject Mentors</span>
          </h2>
          <p className="section-subtitle">
            Our experienced postgraduates, B.Ed professionals, and competitive NEET/JEE mentors guide each student through personalized concept clarity and mentoring.
          </p>
        </div>

        {/* Department Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {departments.map((dept) => {
            const isActive = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: isActive ? '#059669' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#475569',
                  boxShadow: isActive ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none'
                }}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Faculty Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredFaculty.map((teacher, index) => {
            const isLeadership = teacher.designation === 'Principal';
            return (
              <div
                key={index}
                className="card-modern"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isLeadership ? '4px solid #f59e0b' : '4px solid #059669'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isLeadership ? '#b45309' : '#059669',
                      background: isLeadership ? '#fffbeb' : '#ecfdf5',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px'
                    }}>
                      {teacher.department}
                    </span>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#64748b'
                    }}>
                      {teacher.designation}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.35rem' }}>
                    {teacher.name}
                  </h4>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                    <GraduationCap size={16} color="#059669" />
                    <span><strong>Qualification:</strong> {teacher.qualification}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                    <Briefcase size={15} color="#f59e0b" />
                    <span>{teacher.experience}</span>
                  </div>
                </div>

                <div style={{
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  <span>Al-Ameen Mission Faculty</span>
                  <Award size={14} color="#059669" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
