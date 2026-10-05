import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  Building, 
  Sparkles, 
  Layers, 
  Filter, 
  ArrowUpRight, 
  Send, 
  Check, 
  Clock, 
  Briefcase 
} from 'lucide-react';
import { LOCATIONS_LIST, SKILLS_LIST } from '../data/jobsData';

export default function InternshipsJobs({ jobs, savedJobIds, onToggleSaveJob, onOpenPostJob }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Selected Job for Detailed View Modal
  const [activeModalJob, setActiveModalJob] = useState(null);

  // Quick Apply Modal State
  const [quickApplyJob, setQuickApplyJob] = useState(null);
  const [applicantForm, setApplicantForm] = useState({ name: '', email: '', phone: '', resumeName: '' });
  const [applySuccess, setApplySuccess] = useState(false);

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Saved Only Filter
      if (showSavedOnly && !savedJobIds.includes(job.id)) return false;

      // Type Filter
      if (selectedType === 'Internship' && job.type !== 'Internship') return false;
      if (selectedType === 'Full-time' && job.type !== 'Full-time Job') return false;

      // Location Filter
      if (selectedLocation !== 'All Locations' && !job.location.toLowerCase().includes(selectedLocation.toLowerCase().split('/')[0].trim())) {
        return false;
      }

      // Skill Filter
      if (selectedSkill !== 'All Skills' && !job.skills.some(s => s.toLowerCase() === selectedSkill.toLowerCase())) {
        return false;
      }

      // Search Query Filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesCompany = job.company.toLowerCase().includes(query);
        const matchesSkills = job.skills.some(s => s.toLowerCase().includes(query));
        const matchesLoc = job.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCompany && !matchesSkills && !matchesLoc) return false;
      }

      return true;
    });
  }, [jobs, savedJobIds, showSavedOnly, selectedType, selectedLocation, selectedSkill, searchTerm]);

  const handleQuickApplySubmit = (e) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setQuickApplyJob(null);
      setApplicantForm({ name: '', email: '', phone: '', resumeName: '' });
    }, 2000);
  };

  return (
    <div>
      {/* Banner / Hero Header */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          color: 'white',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(59, 130, 246, 0.2)', 
              border: '1px solid rgba(59, 130, 246, 0.4)',
              padding: '0.35rem 0.85rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.8rem', 
              fontWeight: '600',
              color: '#60a5fa',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} />
            <span>Verified Live Hiring Portal 2026</span>
          </div>

          <h1 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 800 }}>
            Current Hiring Internships & Job Opportunities
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            Browse active hiring posts from Google, Microsoft, Swiggy, Amazon, NVIDIA, Razorpay & top startups. Apply directly through official career portals or submit quick applications.
          </p>

          {/* Key Stats Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem' }}>
            <div><strong style={{ color: '#60a5fa', fontSize: '1.1rem' }}>{jobs.length}+</strong> Active Opportunities</div>
            <div><strong style={{ color: '#34d399', fontSize: '1.1rem' }}>₹45K - ₹1L/mo</strong> Avg. Stipend</div>
            <div><strong style={{ color: '#fbbf24', fontSize: '1.1rem' }}>2024, 2025, 2026</strong> Batches Eligible</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="filter-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          {/* Search Field */}
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              className="input-field" 
              placeholder="Search by company, role (e.g. SDE, Frontend, AI), or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Location Filter */}
          <select 
            className="select-field"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {LOCATIONS_LIST.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          {/* Skill Filter */}
          <select 
            className="select-field"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            {SKILLS_LIST.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>

        {/* Filter Pills & Toggles */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Type:</span>
            <button 
              onClick={() => setSelectedType('All')}
              className={`badge ${selectedType === 'All' ? 'badge-active' : ''}`}
              style={{ cursor: 'pointer', background: selectedType === 'All' ? 'var(--brand-primary)' : 'var(--bg-tertiary)', color: selectedType === 'All' ? 'white' : 'var(--text-secondary)' }}
            >
              All Openings
            </button>
            <button 
              onClick={() => setSelectedType('Internship')}
              className={`badge ${selectedType === 'Internship' ? 'badge-active' : ''}`}
              style={{ cursor: 'pointer', background: selectedType === 'Internship' ? 'var(--brand-primary)' : 'var(--bg-tertiary)', color: selectedType === 'Internship' ? 'white' : 'var(--text-secondary)' }}
            >
              Internships Only
            </button>
            <button 
              onClick={() => setSelectedType('Full-time')}
              className={`badge ${selectedType === 'Full-time' ? 'badge-active' : ''}`}
              style={{ cursor: 'pointer', background: selectedType === 'Full-time' ? 'var(--brand-primary)' : 'var(--bg-tertiary)', color: selectedType === 'Full-time' ? 'white' : 'var(--text-secondary)' }}
            >
              Full-time Jobs
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid var(--border-light)',
                background: showSavedOnly ? 'var(--brand-light)' : 'var(--bg-secondary)',
                color: showSavedOnly ? 'var(--brand-primary)' : 'var(--text-secondary)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {showSavedOnly ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              <span>Saved Jobs ({savedJobIds.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
          {showSavedOnly ? 'Your Bookmarked Jobs' : 'Current Hiring Posts'} 
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '0.5rem' }}>
            ({filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} available)
          </span>
        </h2>

        <button 
          onClick={onOpenPostJob}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--brand-primary)',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}
        >
          <span>Know a live opening? Post it here</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Jobs Grid Display */}
      {filteredJobs.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <Briefcase size={48} color="var(--text-light)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No hiring posts match your filters</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Try resetting your search query, location, or skill filters to see all active job opportunities.
          </p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedType('All'); setSelectedLocation('All Locations'); setSelectedSkill('All Skills'); setShowSavedOnly(false); }}
            className="btn-auth"
            style={{ margin: '0 auto' }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map(job => {
            const isSaved = savedJobIds.includes(job.id);
            return (
              <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', position: 'relative' }}>
                
                {/* Card Top: Badges & Bookmark */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span className={`badge ${job.status === 'Actively Hiring' ? 'badge-active' : job.status === 'Urgent' ? 'badge-urgent' : 'badge-verified'}`}>
                        {job.status}
                      </span>
                      <span className="badge badge-stipend" style={{ background: job.type === 'Internship' ? '#f5f3ff' : '#ecfdf5', color: job.type === 'Internship' ? '#6d28d9' : '#047857' }}>
                        {job.type}
                      </span>
                    </div>

                    <button 
                      onClick={() => onToggleSaveJob(job.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: isSaved ? 'var(--brand-primary)' : 'var(--text-light)',
                        padding: '0.2rem'
                      }}
                      title={isSaved ? "Remove Bookmark" : "Save Job"}
                    >
                      {isSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                    </button>
                  </div>

                  {/* Company & Role Title */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        background: job.logoBg || 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      {job.logo ? (
                        <img src={job.logo} alt={job.company} style={{ width: '26px', height: '26px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                      ) : (
                        <Building size={22} color="var(--brand-primary)" />
                      )}
                    </div>

                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: '1.3', marginBottom: '0.2rem' }}>
                        {job.title}
                      </h3>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {job.company}
                      </div>
                    </div>
                  </div>

                  {/* Compensation & Location */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                      <DollarSign size={16} />
                      <span>{job.stipend}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={15} color="var(--text-muted)" />
                      <span>{job.location}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={15} color="var(--text-muted)" />
                      <span>Eligible Batches: <strong>{job.batch}</strong></span>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    {job.skills.map(skill => (
                      <span 
                        key={skill} 
                        style={{
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-light)' }}>
                  <button 
                    className="btn-auth" 
                    onClick={() => setActiveModalJob(job)}
                    style={{ fontSize: '0.8rem', justifyContent: 'center' }}
                  >
                    Details & Rounds
                  </button>

                  <a 
                    href={job.applyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-post-job"
                    style={{ fontSize: '0.8rem', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <span>Apply Live</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* JOB DETAILS MODAL */}
      {activeModalJob && (
        <div className="modal-overlay" onClick={() => setActiveModalJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalJob(null)}>✕</button>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  background: activeModalJob.logoBg || 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-light)'
                }}
              >
                {activeModalJob.logo ? (
                  <img src={activeModalJob.logo} alt={activeModalJob.company} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                ) : (
                  <Building size={28} color="var(--brand-primary)" />
                )}
              </div>

              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{activeModalJob.title}</h2>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--brand-primary)' }}>{activeModalJob.company}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pay / Stipend</span>
                <div style={{ fontWeight: 700, color: 'var(--accent-success)' }}>{activeModalJob.stipend}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</span>
                <div style={{ fontWeight: 600 }}>{activeModalJob.location}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Batch</span>
                <div style={{ fontWeight: 600 }}>{activeModalJob.batch}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Deadline</span>
                <div style={{ fontWeight: 600 }}>{activeModalJob.deadline}</div>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Role Overview</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {activeModalJob.description}
              </p>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Key Requirements & Eligibility</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {activeModalJob.requirements.map((req, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>{req}</li>
                ))}
              </ul>
            </div>

            {activeModalJob.rounds && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Selection Process & Interview Rounds</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeModalJob.rounds.map((rnd, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', background: 'var(--bg-card)', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                      <span style={{ background: 'var(--brand-primary)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                        {idx + 1}
                      </span>
                      <span>{rnd}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <button 
                className="btn-auth" 
                onClick={() => { setQuickApplyJob(activeModalJob); setActiveModalJob(null); }}
              >
                Quick Submit Resume
              </button>
              <a 
                href={activeModalJob.applyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-post-job"
                style={{ textDecoration: 'none' }}
              >
                <span>Apply on Official Website</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* QUICK SUBMIT RESUME MODAL */}
      {quickApplyJob && (
        <div className="modal-overlay" onClick={() => setQuickApplyJob(null)}>
          <div className="modal-content" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setQuickApplyJob(null)}>✕</button>

            <h2 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>Quick Apply</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              Submitting application for <strong>{quickApplyJob.title}</strong> at <strong>{quickApplyJob.company}</strong>
            </p>

            {applySuccess ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--accent-success)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Your profile and resume have been recorded for {quickApplyJob.company}. Check your email for next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Full Name *</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    style={{ paddingLeft: '1rem' }}
                    required 
                    placeholder="e.g. Rahul Sharma"
                    value={applicantForm.name}
                    onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Email Address *</label>
                  <input 
                    type="email" 
                    className="input-field" 
                    style={{ paddingLeft: '1rem' }}
                    required 
                    placeholder="rahul@example.com"
                    value={applicantForm.email}
                    onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    className="input-field" 
                    style={{ paddingLeft: '1rem' }}
                    required 
                    placeholder="+91 98765 43210"
                    value={applicantForm.phone}
                    onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Resume File (PDF/DOCX)</label>
                  <input 
                    type="file" 
                    accept=".pdf,.docx,.doc"
                    onChange={(e) => setApplicantForm({ ...applicantForm, resumeName: e.target.files[0]?.name || '' })}
                    style={{ fontSize: '0.85rem' }}
                  />
                </div>

                <button type="submit" className="btn-post-job" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
