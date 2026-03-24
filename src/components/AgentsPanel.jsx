import React from 'react';
import { Cpu } from 'lucide-react';

const AgentsPanel = ({ logs }) => {
  return (
    <div className="glass agents-panel">
      <div className="agents-header">
        <Cpu size={20} color="var(--secondary)" />
        <h3>AI Brain Activity</h3>
        <span className="status-indicator active" style={{ marginLeft: 'auto' }}></span>
      </div>
      <div className="agents-feed">
        {logs.map((log) => (
          <div key={log.id} className="agent-message">
            <div className={`agent-avatar ${log.type}`}>
              {log.icon}
            </div>
            <div className="message-content">
              <div className="message-header">
                <span className="agent-name">{log.agent} Agent</span>
                <span className="message-time">{log.time}</span>
              </div>
              <span className="message-text">{log.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsPanel;
