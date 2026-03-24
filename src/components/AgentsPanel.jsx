import React from 'react';

const AgentsPanel = ({ logs }) => {
  return (
    <div className="agents-panel" style={{ height: '350px', display: 'flex', flexDirection: 'column' }}>
      <div className="agents-feed" style={{ padding: '1rem', flex: 1, overflowY: 'auto' }}>
        {logs.map((log) => (
          <div key={log.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', marginBottom: '0.75rem', border: '1px solid var(--glass-border)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {log.icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{log.agent}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{log.time}</span>
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{log.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsPanel;
