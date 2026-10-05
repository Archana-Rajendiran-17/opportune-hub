import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InternshipsJobs from './components/InternshipsJobs';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import CareerCoach from './components/CareerCoach';
import Preparation from './components/Preparation';
import AuthModal from './components/AuthModal';
import PostJobModal from './components/PostJobModal';

import { INITIAL_JOBS } from './data/jobsData';
import { Sparkles, Heart, Globe, Code, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('internships');
  
  // Jobs state (preloaded with live listings + user added ones)
  const [jobs, setJobs] = useState(() => {
    const savedJobsJson = localStorage.getItem('opportune_jobs_list');
    if (savedJobsJson) {
      try { return JSON.parse(savedJobsJson); } catch (e) { return INITIAL_JOBS; }
    }
    return INITIAL_JOBS;
  });

  // Saved / Bookmarked Job IDs
  const [savedJobIds, setSavedJobIds] = useState(() => {
    const saved = localStorage.getItem('opportune_saved_job_ids');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return ['job-1', 'job-3']; }
    }
    return ['job-1', 'job-3'];
  });

  // User State
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('opportune_user');
    if (storedUser) {
      try { return JSON.parse(storedUser); } catch (e) { return null; }
    }
    return { name: 'Rahul Sharma', email: 'rahul.sharma@example.com' };
  });

  // Modal Visibility States
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('opportune_jobs_list', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('opportune_saved_job_ids', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('opportune_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('opportune_user');
    }
  }, [user]);

  const toggleSaveJob = (jobId) => {
    setSavedJobIds(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const handleAddJob = (newJob) => {
    setJobs(prev => [newJob, ...prev]);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app-container">
      {/* Top Header & Ticker Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        user={user}
        onOpenAuth={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        onOpenPostJob={() => setShowPostJobModal(true)}
      />

      {/* Main View Area */}
      <main className="main-content">
        {activeTab === 'internships' && (
          <InternshipsJobs 
            jobs={jobs} 
            savedJobIds={savedJobIds}
            onToggleSaveJob={toggleSaveJob}
            onOpenPostJob={() => setShowPostJobModal(true)}
          />
        )}

        {activeTab === 'resume' && (
          <ResumeAnalyzer />
        )}

        {activeTab === 'coach' && (
          <CareerCoach />
        )}

        {activeTab === 'prep' && (
          <Preparation />
        )}
      </main>

      {/* Modern Footer */}
      <footer 
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          borderTop: '1px solid var(--border-light)', 
          padding: '2rem 1rem', 
          marginTop: 'auto' 
        }}
      >
        <div 
          style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justify: 'space-between', 
            alignItems: 'center', 
            gap: '1rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <Sparkles size={18} color="var(--brand-primary)" />
            <span>Opportune Hub — Skills Gateway & Live Placement Portal</span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button onClick={() => setActiveTab('internships')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem' }}>
              Live Internships
            </button>
            <button onClick={() => setActiveTab('resume')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem' }}>
              Resume ATS Audit
            </button>
            <button onClick={() => setActiveTab('coach')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem' }}>
              AI Coach
            </button>
            <button onClick={() => setActiveTab('prep')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem' }}>
              Preparation
            </button>
          </div>

          <div style={{ fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Opportune Hub. Built for engineering & product candidates.
          </div>
        </div>
      </footer>

      {/* Modal Overlays */}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showPostJobModal && (
        <PostJobModal 
          onClose={() => setShowPostJobModal(false)}
          onAddJob={handleAddJob}
        />
      )}
    </div>
  );
}
