import React, { useState } from 'react';
import { 
  GraduationCap, 
  Code2, 
  Network, 
  Database, 
  Users, 
  Building2, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PREP_CATEGORIES } from '../data/prepData';

export default function Preparation() {
  const [selectedCatId, setSelectedCatId] = useState('dsa');
  const [completedTopicIds, setCompletedTopicIds] = useState([]);
  const [expandedTopicId, setExpandedTopicId] = useState('dsa-1');

  const activeCategory = PREP_CATEGORIES.find(c => c.id === selectedCatId) || PREP_CATEGORIES[0];

  const toggleTopicComplete = (id) => {
    setCompletedTopicIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'Network': return <Network size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Users': return <Users size={20} />;
      case 'Building2': return <Building2 size={20} />;
      default: return <BookOpen size={20} />;
    }
  };

  return (
    <div>
      {/* Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          color: 'white',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ maxWidth: '750px' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(196, 181, 253, 0.2)', 
              border: '1px solid rgba(196, 181, 253, 0.4)',
              padding: '0.35rem 0.85rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.8rem', 
              fontWeight: '600',
              color: '#ddd6fe',
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={14} />
            <span>Structured Interview & Placement Curriculum</span>
          </div>

          <h1 style={{ fontSize: '1.9rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: 800 }}>
            Placement Preparation & Cheat Sheets
          </h1>
          <p style={{ color: '#c4b5fd', fontSize: '0.95rem' }}>
            Master DSA patterns, System Design architecture, Core CS fundamentals (OS, DBMS, Networks), and company-specific coding rounds.
          </p>
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        {PREP_CATEGORIES.map(cat => {
          const isActive = cat.id === selectedCatId;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.1rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                background: isActive ? 'var(--brand-primary)' : 'var(--bg-card)',
                color: isActive ? 'white' : 'var(--text-primary)',
                borderColor: isActive ? 'var(--brand-primary)' : 'var(--border-light)'
              }}
            >
              {getIcon(cat.icon)}
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Category Card */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{activeCategory.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{activeCategory.description}</p>
          </div>

          {/* Category Progress Bar */}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
              Progress: {completedTopicIds.filter(id => activeCategory.topics.some(t => t.id === id)).length} / {activeCategory.topics.length} Completed
            </span>
          </div>
        </div>

        {/* Topics Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activeCategory.topics.map(topic => {
            const isCompleted = completedTopicIds.includes(topic.id);
            const isExpanded = expandedTopicId === topic.id;

            return (
              <div 
                key={topic.id}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  background: isCompleted ? 'var(--accent-success-bg)' : 'var(--bg-secondary)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Topic Header Row */}
                <div 
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                  onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleTopicComplete(topic.id); }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: isCompleted ? '#10b981' : 'var(--border-subtle)'
                      }}
                      title={isCompleted ? "Mark Incomplete" : "Mark Complete"}
                    >
                      <CheckCircle2 size={24} />
                    </button>

                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, textDecoration: isCompleted ? 'line-through' : 'none', color: isCompleted ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                        {topic.name}
                      </h3>
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.2rem' }}>
                        <span className="badge badge-active" style={{ fontSize: '0.7rem' }}>{topic.difficulty}</span>
                        <span className="badge badge-stipend" style={{ fontSize: '0.7rem' }}>{topic.questionsCount} Standard Problems</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <a 
                      href={topic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-auth"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', textDecoration: 'none' }}
                    >
                      <span>Practice Source</span>
                      <ExternalLink size={14} />
                    </a>

                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Topic Expanded Details */}
                {isExpanded && (
                  <div style={{ padding: '1rem 1.25rem 1.25rem 3.5rem', borderTop: '1px solid var(--border-light)', background: 'var(--bg-tertiary)' }}>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Core Sub-topics & Question Checklist:</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1rem' }}>
                      {topic.resources.map((res, idx) => (
                        <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                          <strong>{res}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
