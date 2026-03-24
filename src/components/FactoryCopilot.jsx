import React, { useState } from 'react';
import { Bot, X, Send, Network } from 'lucide-react';

const FactoryCopilot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "I'm your Factory Copilot. Ask me about emissions, risky assets, or anomaly diagnosis.", sender: "ai" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }]);

    // Mock AI Response based on keywords
    let responseText = "Analyzing industrial telemetry and RAG knowledge base...";
    if (input.toLowerCase().includes("why did") || input.toLowerCase().includes("fail")) {
      responseText = "Based on the LangGraph diagnosis, Machine m-turbine-1 failed because vibration signatures matched a historical bearing wear template. Approving Work Order 9042 is recommended.";
    } else if (input.toLowerCase().includes("risky") || input.toLowerCase().includes("risk")) {
      responseText = "The highest risk asset currently is Gas Turbine Alpha (Risk Score: 98/100) due to cascading thermal anomalies.";
    } else if (input.toLowerCase().includes("emissions") || input.toLowerCase().includes("trend")) {
      responseText = "Emissions at Hanover Operations are down 12% YoY, saving approximately $142,500 in potential penalties, though Plant C is currently 28% over baseline.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'ai' }]);
    }, 1000);

    setInput('');
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
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about assets or anomalies..."
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', padding: '0.5rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem' }}
            />
            <button onClick={handleSend} className="btn btn-primary" style={{ padding: '0.5rem' }}><Send size={16} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default FactoryCopilot;
