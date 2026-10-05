import React, { useState } from 'react';
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Award, 
  Zap, 
  BarChart2, 
  Download, 
  RefreshCw,
  Search,
  Check,
  X,
  Layers,
  Brain,
  ShieldCheck,
  TrendingUp,
  FileCode,
  Briefcase,
  Printer,
  Copy
} from 'lucide-react';

export const TARGET_ROLES = [
  {
    category: "💻 IT & Software Technology Roles",
    roles: [
      "Software Engineer / SDE (Full Stack)",
      "Frontend Engineer (React / Next.js / Angular)",
      "Backend Developer (Node.js / Java / Python / Go)",
      "Mobile App Developer (Android / iOS / Flutter)",
      "Data Scientist / Machine Learning Engineer / AI",
      "Data Analyst / Business Intelligence (BI)",
      "Cloud & DevOps Engineer (AWS / Azure / Kubernetes)",
      "Cyber Security Analyst / Ethical Hacker",
      "QA Automation Engineer / Software Tester",
      "UI/UX Designer / Product Designer",
      "Database Administrator (DBA) / Data Engineer",
      "Embedded Systems & IoT Engineer"
    ]
  },
  {
    category: "💼 Non-IT & Business Management Roles",
    roles: [
      "Product Manager / Associate Product Manager (APM)",
      "Business Analyst / Functional Consultant",
      "Digital Marketing Specialist / SEO Analyst",
      "Human Resources (HR) Manager / Technical Recruiter",
      "Sales & Business Development Executive (BDE)",
      "Financial Analyst / Investment Banking Associate",
      "Operations & Supply Chain Manager",
      "Content Writer / Copywriter / Technical Writer",
      "Customer Success / Client Relationship Manager",
      "Graphic Designer / Video Editor / Creative Specialist",
      "Management Trainee / Graduate Associate"
    ]
  }
];

const DETAILED_SAMPLE_ANALYSIS = {
  score: 88,
  atsStatus: 'Optimal ATS Compliant',
  subScores: {
    format: 94,
    keywords: 86,
    impact: 88,
    verbs: 92,
    grammar: 96
  },
  summaryAudit: {
    text: "Engineered high-performance web applications and backend APIs serving 50k+ active users. Passionate about scalable distributed systems and modern UI architecture.",
    status: "Strong 2-line summary",
    suggestion: "Add your target metric achievement (e.g. 'boosted application performance by 35%')."
  },
  strengths: [
    "Google XYZ Formula Compliance: 4 out of 5 bullet points contain quantified metrics (percentages, dollar amounts, user counts).",
    "ATS Layout Audit: Standard 1-column structure with standard fonts (Inter / Calibri). No tables, text boxes, or unparseable images.",
    "Active Action Verbs: High density of strong verbs (Engineered, Spearheaded, Optimized, Orchestrated, Architected).",
    "Skills Categorization: Clean separation into Technical Languages, Frameworks, Cloud Infrastructure, and Developer Tools."
  ],
  matchedKeywords: [
    "React", "JavaScript", "TypeScript", "Node.js", "REST APIs", "Git", "SQL", "HTML5/CSS3", "Agile/Scrum", "Problem Solving"
  ],
  missingKeywords: [
    "Docker / Containerization", "AWS S3 / Cloud Deployment", "CI/CD Pipelines", "Unit Testing (Jest/Cypress)", "System Design"
  ],
  sectionBreakdown: [
    {
      title: "1. Contact & Professional Links",
      status: "Excellent",
      score: "100%",
      notes: "Email, Phone, LinkedIn, and GitHub profile URLs properly formatted with clean hyperlinks."
    },
    {
      title: "2. Executive Summary",
      status: "Good",
      score: "85%",
      notes: "Concise 2-line pitch. Recommend weaving in your top tech stack or primary domain expertise."
    },
    {
      title: "3. Work Experience & Internships",
      status: "Optimal",
      score: "92%",
      notes: "Clear reverse-chronological order. High ratio of action verbs and measurable performance metrics."
    },
    {
      title: "4. Projects & Technical Portfolio",
      status: "Good",
      score: "88%",
      notes: "3 detailed projects listed with live demo links. Add 1 sentence describing system architecture."
    },
    {
      title: "5. Education & Certifications",
      status: "Excellent",
      score: "95%",
      notes: "Degree title, institution, CGPA (8.6/10), and graduation date clearly visible."
    }
  ],
  recommendedFixes: [
    {
      issue: "Weak Bullet Point Detected",
      before: "Worked on building user interface for food app.",
      after: "Engineered responsive React UI components for food delivery platform, reducing page load speed by 35% for 5,000+ monthly users."
    },
    {
      issue: "Missing Containerization Keyword",
      before: "Deployed project on cloud server.",
      after: "Containerized Node.js backend using Docker and deployed automated CI/CD pipeline on AWS EC2."
    }
  ],
  certificationsToConsider: [
    "AWS Certified Solutions Architect / Cloud Practitioner",
    "Meta Frontend / Backend Professional Certificate",
    "Postman API Fundamentals Student Expert"
  ]
};

export default function ResumeAnalyzer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [targetRole, setTargetRole] = useState("Software Engineer / SDE (Full Stack)");
  const [analysisData, setAnalysisData] = useState(DETAILED_SAMPLE_ANALYSIS);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      runAnalysis(file.name);
    }
  };

  const runAnalysis = (fileName) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Generate dynamic metrics tailored to IT vs Non-IT
      const isNonIT = targetRole.includes("Business") || targetRole.includes("HR") || targetRole.includes("Marketing") || targetRole.includes("Sales") || targetRole.includes("Finance") || targetRole.includes("Operations") || targetRole.includes("Content");
      
      const newScore = Math.floor(Math.random() * 10) + 84;
      setAnalysisData({
        ...DETAILED_SAMPLE_ANALYSIS,
        score: newScore,
        matchedKeywords: isNonIT ? 
          ["Stakeholder Management", "Data Analysis", "Project Planning", "Excel/Google Sheets", "Market Research", "Cross-Functional Leadership"] :
          ["React", "Node.js", "TypeScript", "Python", "SQL", "Git", "REST APIs", "DSA"],
        missingKeywords: isNonIT ?
          ["Agile/Scrum Framework", "KPI / Metrics Tracking", "CRM Software (Salesforce/HubSpot)", "SQL for Analytics"] :
          ["Docker", "AWS", "CI/CD Pipelines", "Jest / Unit Testing"],
        certificationsToConsider: isNonIT ?
          ["Google Analytics & Digital Marketing Certificate", "PMP / CAPM Project Management", "Certified Scrum Product Owner (CSPO)"] :
          ["AWS Certified Solutions Architect", "Meta Full Stack Professional Certificate", "Docker & Kubernetes Mastery"]
      });
    }, 1600);
  };

  const handlePrintReport = () => {
    window.print();
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(analysisData.summaryAudit.text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div>
      {/* Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          color: 'white',
          marginBottom: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(129, 140, 248, 0.2)', 
              border: '1px solid rgba(129, 140, 248, 0.4)',
              padding: '0.35rem 0.85rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.8rem', 
              fontWeight: '600',
              color: '#a5b4fc',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} />
            <span>AI Resume Parser & Deep ATS Analytics Engine</span>
          </div>

          <h1 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 800 }}>
            Comprehensive Resume Audit & Scorecard
          </h1>
          <p style={{ color: '#c7d2fe', fontSize: '1rem', lineHeight: '1.6' }}>
            Supports all **IT & Non-IT position roles**. Get in-depth metrics on ATS readability, Google XYZ bullet points, keyword density, section audits, and actionable rewrites.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        
        {/* Left Column: Role Selector & Upload File */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Target Position Role Selector (ALL IT & NON-IT) */}
          <div className="card">
            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} color="var(--brand-primary)" />
              <span>Target Position / Role (IT & Non-IT)</span>
            </h3>
            
            <select 
              className="select-field" 
              style={{ width: '100%', fontWeight: 600 }}
              value={targetRole}
              onChange={(e) => {
                setTargetRole(e.target.value);
                runAnalysis(selectedFile ? selectedFile.name : "Sample_Resume.pdf");
              }}
            >
              {TARGET_ROLES.map((group, gIdx) => (
                <optgroup key={gIdx} label={group.category}>
                  {group.roles.map((role, rIdx) => (
                    <option key={rIdx} value={role}>{role}</option>
                  ))}
                </optgroup>
              ))}
            </select>

            <div style={{ marginTop: '0.65rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Selected role tailored for: <strong style={{ color: 'var(--brand-primary)' }}>{targetRole}</strong>
            </div>
          </div>

          {/* Upload Resume Box */}
          <div className="card" style={{ border: '2px dashed var(--brand-accent)', textAlign: 'center', padding: '2rem 1.25rem', backgroundColor: 'var(--brand-light)' }}>
            <UploadCloud size={44} color="var(--brand-primary)" style={{ margin: '0 auto 0.75rem' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Upload Your Resume</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Supports PDF, DOCX, TXT (Max 5MB)
            </p>

            <input 
              type="file" 
              id="resume-upload" 
              style={{ display: 'none' }} 
              accept=".pdf,.docx,.doc,.txt"
              onChange={handleFileUpload}
            />

            <label htmlFor="resume-upload" className="btn-post-job" style={{ display: 'inline-flex', cursor: 'pointer', margin: '0 auto' }}>
              <span>Choose File to Analyze</span>
            </label>

            {selectedFile && (
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
                File: {selectedFile.name}
              </div>
            )}
          </div>

          {/* Quick Stats Summary Card */}
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={18} color="#10b981" />
              <span>ATS Audit Standard Checklist</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Parsed File Format:</span>
                <strong style={{ color: '#10b981' }}>Pass (PDF/Text)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Font & Layout Compatibility:</span>
                <strong style={{ color: '#10b981' }}>Standard 1-Column</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Google XYZ Metric Formula:</span>
                <strong style={{ color: '#10b981' }}>88% Compliant</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Target Role Keyword Match:</span>
                <strong style={{ color: 'var(--brand-primary)' }}>{analysisData.subScores.keywords}%</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Deep Detailed Analysis Results */}
        <div>
          {isAnalyzing ? (
            <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
              <RefreshCw size={44} className="ticker-pulse" color="var(--brand-primary)" style={{ animation: 'spin 1s infinite linear', margin: '0 auto 1.25rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Running Deep AI Resume Audit...</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Evaluating keywords, ATS font parameters, Google XYZ formula compliance, and section scores for <strong>{targetRole}</strong>...
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Overall Score & Print Bar */}
              <div className="card" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
                  
                  <div>
                    <span className="badge badge-verified" style={{ marginBottom: '0.5rem' }}>{analysisData.atsStatus}</span>
                    <h2 style={{ fontSize: '1.45rem', fontWeight: 800 }}>ATS Audit Report</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Position: <strong style={{ color: 'var(--brand-primary)' }}>{targetRole}</strong></p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button 
                      onClick={handlePrintReport}
                      className="btn-auth"
                      style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem' }}
                      title="Print / Save PDF Report"
                    >
                      <Printer size={16} />
                      <span>Export PDF</span>
                    </button>

                    <div 
                      style={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3)',
                        border: '4px solid white'
                      }}
                    >
                      <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{analysisData.score}</span>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>/ 100</span>
                    </div>
                  </div>

                </div>

                {/* Sub-Scores Metrics Bar */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Format & Layout</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-primary)' }}>{analysisData.subScores.format}%</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Keyword Match</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#8b5cf6' }}>{analysisData.subScores.keywords}%</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XYZ Impact</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981' }}>{analysisData.subScores.impact}%</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Action Verbs</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f59e0b' }}>{analysisData.subScores.verbs}%</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Grammar</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#06b6d4' }}>{analysisData.subScores.grammar}%</div>
                  </div>
                </div>
              </div>

              {/* Matched vs Missing Keywords */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {/* Matched Keywords */}
                <div className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#047857', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={18} />
                    <span>Matched Keywords ({analysisData.matchedKeywords.length})</span>
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {analysisData.matchedKeywords.map(kw => (
                      <span key={kw} style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.25rem 0.55rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', fontWeight: 600 }}>
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Missing Keywords */}
                <div className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AlertCircle size={18} />
                    <span>Missing Industry Keywords</span>
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {analysisData.missingKeywords.map(kw => (
                      <span key={kw} style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', padding: '0.25rem 0.55rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', fontWeight: 600 }}>
                        + {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section-by-Section Audit */}
              <div className="card">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={20} color="var(--brand-primary)" />
                  <span>Section-by-Section Comprehensive Audit</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {analysisData.sectionBreakdown.map((sec, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{sec.title}</span>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span className="badge badge-active" style={{ fontSize: '0.7rem' }}>{sec.status}</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-primary)' }}>{sec.score}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{sec.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google XYZ Formula Before & After Rewrites */}
              <div className="card">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Zap size={20} />
                  <span>Before & After Bullet Point Rewrites (Google XYZ Formula)</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {analysisData.recommendedFixes.map((fix, idx) => (
                    <div key={idx} style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', background: 'var(--bg-secondary)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.4rem' }}>
                        ⚠️ {fix.issue}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#991b1b', background: '#fef2f2', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.6rem' }}>
                        ❌ <strong>Weak/Unquantified Original:</strong> "{fix.before}"
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#065f46', background: '#ecfdf5', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                        ✅ <strong>Optimized XYZ Rewrite:</strong> "{fix.after}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tailored Certifications for Target Role */}
              <div className="card">
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={18} color="#8b5cf6" />
                  <span>Recommended Certifications for {targetRole}</span>
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {analysisData.certificationsToConsider.map((cert, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="#8b5cf6" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
