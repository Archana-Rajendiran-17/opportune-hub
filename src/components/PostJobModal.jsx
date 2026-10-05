import React, { useState } from 'react';
import { PlusCircle, Building, DollarSign, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function PostJobModal({ onClose, onAddJob }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: 'Internship',
    stipend: '₹45,000 / month',
    location: 'Bangalore / Remote',
    batch: '2025 / 2026',
    skills: 'React, Node.js, Python, DSA',
    applyUrl: '',
    description: '',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: `custom-job-${Date.now()}`,
      title: formData.title,
      company: formData.company,
      logoBg: '#2563eb',
      type: formData.type,
      stipend: formData.stipend,
      location: formData.location,
      batch: formData.batch,
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
      postedDate: 'Posted Just Now',
      deadline: 'Nov 30, 2026',
      status: 'Actively Hiring',
      isFeatured: true,
      applyUrl: formData.applyUrl.startsWith('http') ? formData.applyUrl : `https://${formData.applyUrl || 'careers.google.com'}`,
      description: formData.description || 'Live hiring opportunity posted by recruiter.',
      requirements: formData.requirements ? formData.requirements.split('\n').filter(Boolean) : ['Pursuing Degree in Computer Science / IT.', 'Solid command of coding fundamentals.'],
      rounds: ['Online Assessment', 'Technical Coding Interview', 'HR Final Round']
    };

    onAddJob(newJob);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.25rem' }}>
          Post a Live Hiring Opportunity
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
          Share active internship or full-time job openings with 10,000+ candidate applicants.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="var(--accent-success)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Posting Published!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Your live opportunity for <strong>{formData.title}</strong> at <strong>{formData.company}</strong> is now active on the Opportune Hub menu!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Job / Internship Title *</label>
              <input 
                type="text"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="e.g. Software Engineering Intern - 2026 Batch"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Company Name *</label>
              <input 
                type="text"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="e.g. Google, Swiggy, Startup"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Opportunity Type *</label>
              <select 
                className="select-field" 
                style={{ width: '100%' }}
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="Internship">Internship</option>
                <option value="Full-time Job">Full-time Job</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Stipend / Salary *</label>
              <input 
                type="text"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="e.g. ₹50,000 / month or ₹12 LPA"
                required
                value={formData.stipend}
                onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Location *</label>
              <input 
                type="text"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="e.g. Bangalore / Remote"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Official Application Link (URL) *</label>
              <input 
                type="url"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="https://company.com/careers/apply"
                required
                value={formData.applyUrl}
                onChange={(e) => setFormData({ ...formData, applyUrl: e.target.value })}
              />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Required Skills (comma separated)</label>
              <input 
                type="text"
                className="input-field"
                style={{ paddingLeft: '1rem' }}
                placeholder="React, Node.js, Python, DSA"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>Role Description</label>
              <textarea 
                className="input-field"
                style={{ paddingLeft: '1rem', minHeight: '70px', fontFamily: 'inherit' }}
                placeholder="Brief summary of duties and responsibilities..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button type="button" className="btn-auth" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn-post-job">
                <PlusCircle size={16} />
                <span>Publish Hiring Opportunity</span>
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
