import React, { useState } from 'react';
import { 
  MessageSquareCode, 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  Trash2, 
  Copy, 
  Check, 
  Zap 
} from 'lucide-react';
import { QUICK_PROMPTS, INITIAL_CHAT_MESSAGES, KNOWLEDGE_BASE_RESPONSES } from '../data/coachPrompts';

export default function CareerCoach() {
  const [messages, setMessages] = useState(INITIAL_CHAT_MESSAGES);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputPrompt;
    if (!query.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: 'Just now',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      // Find matching knowledge response
      const lowerQuery = query.toLowerCase();
      let matchedResponse = null;

      for (const item of KNOWLEDGE_BASE_RESPONSES) {
        if (item.keywords.some(kw => lowerQuery.includes(kw))) {
          matchedResponse = item.response;
          break;
        }
      }

      if (!matchedResponse) {
        matchedResponse = `That is a great career query! Here is my advice on **${query}**:

1. **Structured Preparation**: Focus on foundational problem-solving, clean code principles, and real-world projects.
2. **Resume & Portfolio Alignment**: Ensure your GitHub projects demonstrate end-to-end functionality with live links.
3. **Targeted Applications**: Use the **Internships & Jobs** menu on Opportune Hub to apply directly to active hiring posts!`;
      }

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        timestamp: 'Just now',
        text: matchedResponse
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      {/* Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 1.5rem',
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
              background: 'rgba(16, 185, 129, 0.2)', 
              border: '1px solid rgba(16, 185, 129, 0.4)',
              padding: '0.35rem 0.85rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.8rem', 
              fontWeight: '600',
              color: '#6ee7b7',
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={14} />
            <span>24/7 AI Placement & Interview Coach</span>
          </div>

          <h1 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: 800 }}>
            Interactive AI Career Assistant
          </h1>
          <p style={{ color: '#a7f3d0', fontSize: '0.95rem' }}>
            Ask anything about interview preparation, salary negotiation strategies, resume formatting, or tech stack career roadmaps.
          </p>
        </div>
      </div>

      {/* Suggested Prompt Chips */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Zap size={15} color="var(--brand-primary)" />
          <span>Recommended Discussion Topics:</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {QUICK_PROMPTS.map(p => (
            <button 
              key={p.id}
              onClick={() => handleSendMessage(p.text)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-primary)'; e.currentTarget.style.color = 'var(--brand-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              ⚡ {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window Container */}
      <div 
        className="card" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '520px', 
          padding: '0', 
          overflow: 'hidden' 
        }}
      >
        {/* Chat Header */}
        <div 
          style={{ 
            padding: '0.85rem 1.25rem', 
            background: 'var(--bg-tertiary)', 
            borderBottom: '1px solid var(--border-light)', 
            display: 'flex', 
            justify: 'space-between', 
            alignItems: 'center' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--brand-primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Bot size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Opportune AI Coach</div>
              <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                Online & Ready
              </div>
            </div>
          </div>

          <button 
            onClick={() => setMessages(INITIAL_CHAT_MESSAGES)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}
            title="Clear Conversation"
          >
            <Trash2 size={15} />
            <span>Reset Chat</span>
          </button>
        </div>

        {/* Message Log */}
        <div 
          style={{ 
            flex: 1, 
            padding: '1.25rem', 
            overflowY: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            background: 'var(--bg-secondary)' 
          }}
        >
          {messages.map(msg => (
            <div 
              key={msg.id} 
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%'
              }}
            >
              {msg.sender === 'ai' && (
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--brand-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Bot size={16} />
                </div>
              )}

              <div 
                style={{
                  background: msg.sender === 'user' ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                  padding: '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                  position: 'relative',
                  border: msg.sender === 'ai' ? '1px solid var(--border-light)' : 'none'
                }}
              >
                {msg.text}

                {msg.sender === 'ai' && (
                  <button 
                    onClick={() => handleCopy(msg.id, msg.text)}
                    style={{
                      position: 'absolute',
                      bottom: '0.4rem',
                      right: '0.5rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer'
                    }}
                    title="Copy text"
                  >
                    {copiedId === msg.id ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                )}
              </div>

              {msg.sender === 'user' && (
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--border-subtle)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <User size={16} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
              <Bot size={16} color="var(--brand-primary)" />
              <span>AI Coach is typing advice...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-light)' }}>
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{ display: 'flex', gap: '0.5rem' }}
          >
            <input 
              type="text"
              className="input-field"
              style={{ paddingLeft: '1rem' }}
              placeholder="Ask a question about interviews, salary, resume or roadmaps..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
            />
            <button type="submit" className="btn-post-job">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
