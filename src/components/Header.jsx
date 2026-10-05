import React from 'react';
import { 
  Briefcase, 
  FileText, 
  MessageSquareCode, 
  GraduationCap, 
  PlusCircle, 
  User, 
  LogOut, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  user, 
  onOpenAuth, 
  onLogout, 
  onOpenPostJob 
}) {
  return (
    <>
      {/* Live Hiring Alert Ticker */}
      <div className="ticker-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="ticker-pulse"></span>
          <strong style={{ color: '#60a5fa' }}>LIVE HIRING:</strong> 
          <span>Google, Microsoft, Swiggy, Amazon & 12+ top tech firms posted new internships & jobs today!</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9 }}>
          <Zap size={14} color="#f59e0b" />
          <span>Batch Eligibility: 2024, 2025, 2026 & 2027</span>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">
          {/* Logo Branding */}
          <div className="logo-container" onClick={() => setActiveTab('internships')}>
            <div className="logo-badge">
              <Sparkles size={24} />
            </div>
            <div className="logo-title">
              Opportune Hub
              <span className="logo-subtitle">Skills Gateway & Placement Portal</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'internships' ? 'active' : ''}`}
              onClick={() => setActiveTab('internships')}
            >
              <Briefcase size={18} />
              <span>Internships & Jobs</span>
            </button>

            <button 
              className={`nav-tab ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              <FileText size={18} />
              <span>Resume Analysis</span>
            </button>

            <button 
              className={`nav-tab ${activeTab === 'coach' ? 'active' : ''}`}
              onClick={() => setActiveTab('coach')}
            >
              <MessageSquareCode size={18} />
              <span>AI Career Coach</span>
            </button>

            <button 
              className={`nav-tab ${activeTab === 'prep' ? 'active' : ''}`}
              onClick={() => setActiveTab('prep')}
            >
              <GraduationCap size={18} />
              <span>Preparation</span>
            </button>
          </nav>

          {/* Action Buttons & User Menu */}
          <div className="user-controls">
            <button className="btn-post-job" onClick={onOpenPostJob}>
              <PlusCircle size={18} />
              <span>Post Internship</span>
            </button>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--bg-tertiary)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                >
                  <User size={16} color="var(--brand-primary)" />
                  <span>{user.name || user.email.split('@')[0]}</span>
                </div>
                <button 
                  className="btn-auth" 
                  onClick={onLogout} 
                  title="Logout"
                  style={{ padding: '0.5rem' }}
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button className="btn-auth" onClick={onOpenAuth}>
                <User size={18} />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
