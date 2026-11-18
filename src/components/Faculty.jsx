import React, { useState } from 'react';
import { Users, GraduationCap, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { facultyData } from '../data/schoolData';

export default function Faculty() {
  const [activeDept, setActiveDept] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const departments = ['All', 'Chemistry', 'Biology', 'Physics', 'Mathematics', 'Languages'];

  const filteredFaculty = facultyData.filter((member) => {
    if (activeDept === 'All') return true;
    if (activeDept === 'Languages') {
      return member.department === 'English' || member.department === 'Assamese';
    }
    return member.department.toLowerCase() === activeDept.toLowerCase();
  });

  const visibleFaculty =
    activeDept === 'All' && !showAll ? filteredFaculty.slice(0, 6) : filteredFaculty;

  return (
    <section id="faculty" className="section-py" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Users size={15} />
            <span>FACULTY</span>
          </div>
          <h2 className="section-title">
            Our <span className="highlight">Subject Mentors</span>
          </h2>
          <p className="section-subtitle">
            Dedicated educators and NEET/JEE specialists guiding students every day.
          </p>
        </div>

        {/* Department Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          {departments.map((dept) => {
            const isActive = activeDept === dept;
            return (
              <button
                key={dept}
                onClick={() => {
                  setActiveDept(dept);
                  setShowAll(false);
                }}
                style={{
                  padding: '0.5rem 1.05rem',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  background: isActive ? '#059669' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#475569',
                  boxShadow: isActive ? '0 4px 12px rgba(5, 150, 105, 0.22)' : 'none'
                }}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Faculty Grid */}
        <div className="grid-cards">
          {visibleFaculty.map((teacher, index) => {
            const isLeadership = teacher.designation === 'Principal';
            return (
              <div
                key={index}
                className="card-modern"
                style={{
                  padding: '1.35rem',
                  borderTop: isLeadership ? '4px solid #f59e0b' : '4px solid #059669'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: isLeadership ? '#b45309' : '#059669',
                    background: isLeadership ? '#fffbeb' : '#ecfdf5',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px'
                  }}>
                    {teacher.department}
                  </span>

                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#64748b' }}>
                    {teacher.designation}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0a192f', marginBottom: '0.4rem' }}>
                  {teacher.name}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#334155', fontSize: '0.84rem', marginBottom: '0.25rem' }}>
                  <GraduationCap size={15} color="#059669" style={{ flexShrink: 0 }} />
                  <span>{teacher.qualification}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#64748b', fontSize: '0.82rem' }}>
                  <Briefcase size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <span>{teacher.experience}</span>
                </div>
              </div>
            );
          })}
        </div>

        {activeDept === 'All' && filteredFaculty.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-secondary btn-sm"
              style={{ borderRadius: '999px', padding: '0.6rem 1.35rem' }}
            >
              <span>{showAll ? 'Show Less' : `View All Faculty (${filteredFaculty.length})`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
