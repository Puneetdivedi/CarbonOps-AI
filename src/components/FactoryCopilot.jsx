/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Generative Chat Interface - Connects to the LLM agent for natural language querying of the factory dataset.
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: GenAI / Low Code Data Pipeline (Streaming)
 * Owner: Puneet Divedi
 */
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Network, Loader2 } from 'lucide-react';
import { LangGraphService } from '../services/langGraphService';

const FactoryCopilot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "I'm your Factory Copilot. Ask me about emissions, risky assets, or anomaly diagnosis.", sender: "ai" }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;

    // Add user message
    const userMsg = input;
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
    setInput('');
    setIsStreaming(true);

    // Initial empty message to hold the stream
    const steamMsgId = Date.now() + 1;
    setMessages(prev => [...prev, { id: steamMsgId, text: '', sender: 'ai', isStreaming: true }]);

    // Genuine Update: Invoke the real LangGraph service to simulate standard Server-Sent Event (SSE) token LLM streaming
    LangGraphService.streamCopilotResponse(userMsg, ({ token, done }) => {
      if (!done) {
        setMessages(prev => prev.map(msg => 
          msg.id === steamMsgId ? { ...msg, text: msg.text + token } : msg
        ));
      } else {
        setIsStreaming(false);
        setMessages(prev => prev.map(msg => 
          msg.id === steamMsgId ? { ...msg, isStreaming: false } : msg
        ));
      }
    });

  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="btn btn-ai" 
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', borderRadius: '50px', padding: '1rem', zIndex: 100, boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)' }}
      >
        <Network size={24} />
      </button>

      {open && (
        <div className="glass-panel" style={{ position: 'fixed', bottom: '6rem', right: '2rem', width: '380px', height: '500px', display: 'flex', flexDirection: 'column', zIndex: 100, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={20} color="var(--brand)" />
              <strong style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>FACTORY COPILOT (Generative)</strong>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><X size={20} /></button>
          </div>

          {/* Chat Window */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map(m => (
              <div key={m.id} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{ 
                  background: m.sender === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.15)', 
                  border: m.sender === 'user' ? '1px solid var(--glass-border)' : '1px solid rgba(99,102,241,0.3)',
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  fontSize: '0.85rem',
                  lineHeight: '1.4',
                  color: m.sender === 'user' ? '#fff' : 'var(--brand)'
                }}>
                  {m.isStreaming && !m.text && <Loader2 size={14} className="spinner" />}
                  {m.text}
                  {m.isStreaming && m.text && <span style={{display: 'inline-block', width: '6px', height: '12px', background: 'var(--brand)', marginLeft: '4px', animation: 'blink 1s infinite'}}></span>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about assets or anomalies..."
              disabled={isStreaming}
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', padding: '0.5rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem' }}
            />
            <button onClick={handleSend} disabled={isStreaming} className="btn btn-primary" style={{ padding: '0.5rem' }}><Send size={16} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default FactoryCopilot;
