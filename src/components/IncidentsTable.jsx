import React from 'react';

const IncidentsTable = ({ incidents }) => {
  return (
    <div className="table-card" style={{ padding: '1.5rem' }}>
      <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, fontWeight: 500 }}>Generated Work Orders & Maintenance Escalations</h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI-orchestrated incident response and SAP ticketing synchronizer</span>
        </div>
        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>View Full Workflow</button>
      </div>
      <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <th style={{ padding: '1rem' }}>WO ID</th>
            <th style={{ padding: '1rem' }}>Asset</th>
            <th style={{ padding: '1rem' }}>Identified Anomaly</th>
            <th style={{ padding: '1rem' }}>AI RAG Reasoning Trace</th>
            <th style={{ padding: '1rem' }}>Assignee</th>
            <th style={{ padding: '1rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map(inc => (
            <tr key={inc.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
              <td style={{ padding: '1rem', fontWeight: 600, fontSize: '0.85rem' }}>{inc.id}</td>
              <td style={{ padding: '1rem', fontSize: '0.9rem' }}>{inc.equipment}</td>
              <td style={{ padding: '1rem', fontSize: '0.9rem', color: inc.severity === 'CRITICAL' ? 'var(--accent)' : 'inherit' }}>{inc.issue}</td>
              <td style={{ padding: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{inc.reasoning}</td>
              <td style={{ padding: '1rem', fontSize: '0.85rem' }}>{inc.assignee}</td>
              <td style={{ padding: '1rem' }}>
                <span className={`badge`} style={{
                  padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600,
                  ...inc.status === 'Pending Approval' ? { background: 'rgba(251, 191, 36, 0.1)', color: 'var(--warning)', border: '1px solid rgba(251, 191, 36, 0.2)' }
                  : inc.status === 'Diagnosing' ? { background: 'rgba(99, 102, 241, 0.1)', color: 'var(--brand)', border: '1px solid rgba(99, 102, 241, 0.2)' }
                  : { background: 'rgba(52, 211, 153, 0.1)', color: 'var(--success)', border: '1px solid rgba(52, 211, 153, 0.2)' }
                }}>
                  {inc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentsTable;
