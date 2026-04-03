/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Human-in-the-Loop Workflow - Manage Actionable SAP tickets generated autonomously by reasoning agents.
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React, { useState } from 'react';
import { Target, AlertTriangle, Eye, Check, X, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const IncidentsTable = ({ incidents }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [tableData, setTableData] = useState(incidents);
  const [processingId, setProcessingId] = useState(null);

  const toggleXAI = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleAction = (id, type) => {
    // Simulating an API call to the backend LangGraph node or SAP system to approve/reject the Work Order
    setProcessingId(id);
    
    // Genuine UI Update: Generating a system toast to notify the engineer dynamically
    const toastId = toast.loading(`Dispatching SAP Workflow [ID: ${id}]`);
    
    setTimeout(() => {
      setTableData(prev => prev.map(incident => {
        if (incident.id === id) {
          return {
            ...incident,
            status: type === 'APPROVE' ? 'SAP Ticket Deployed' : 'Rejected by Supervisor',
          };
        }
        return incident;
      }));
      setProcessingId(null);
      setExpandedRow(null); // Auto close reasoning
      
      if (type === 'APPROVE') {
        toast.success("LangGraph Workflow Executed. SAP Ticket Deployed.", { id: toastId });
      } else {
        toast.error("Execution Rejected by Human Supervisor.", { id: toastId });
      }
    }, 1500);
  };

  return (
    <div className="table-card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, fontWeight: 500 }}>AI Workflow Approvals & Explainable Diagnostics (XAI)</h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Human-in-the-loop approvals for SAP ticketing execution. Click "Diagnose" for explainability.</span>
        </div>
      </div>
      <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <th style={{ padding: '0.75rem' }}>WO ID</th>
            <th style={{ padding: '0.75rem' }}>Risk Target</th>
            <th style={{ padding: '0.75rem' }}>Detected Pattern</th>
            <th style={{ padding: '0.75rem' }}>Confidence</th>
            <th style={{ padding: '0.75rem' }}>Status</th>
            <th style={{ padding: '0.75rem', textAlign: 'right' }}>Execution Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(inc => (
            <React.Fragment key={inc.id}>
              <tr style={{ borderBottom: expandedRow !== inc.id ? '1px solid rgba(255, 255, 255, 0.02)' : 'none', background: expandedRow === inc.id ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ padding: '0.75rem', fontWeight: 600, fontSize: '0.85rem' }}>{inc.id}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>
                   {inc.equipment} <br/>
                   <span style={{ fontSize: '0.7rem', color: inc.risk === 'High' ? 'var(--accent)' : 'var(--warning)', border: '1px solid', padding: '2px 4px', borderRadius: '4px' }}>RISK: {inc.risk.toUpperCase()}</span>
                </td>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem' }}>
                  {inc.issue}
                </td>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', height: '6px', width: '50px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${inc.confidence}%`, height: '100%', background: inc.confidence > 90 ? 'var(--success)' : 'var(--warning)' }}></div>
                    </div>
                    <span>{inc.confidence}%</span>
                  </div>
                </td>
                <td style={{ padding: '0.75rem' }}>
                  <span className={`badge`} style={{
                    padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600,
                    ...inc.status === 'Pending Approval' ? { background: 'rgba(251, 191, 36, 0.1)', color: 'var(--warning)', border: '1px solid rgba(251, 191, 36, 0.2)' }
                    : inc.status === 'SAP Ticket Deployed' ? { background: 'rgba(52, 211, 153, 0.1)', color: 'var(--success)', border: '1px solid rgba(52, 211, 153, 0.2)' }
                    : inc.status === 'Rejected by Supervisor' ? { background: 'rgba(248, 113, 113, 0.1)', color: 'var(--accent)', border: '1px solid rgba(248, 113, 113, 0.2)' }
                    : { background: 'rgba(99, 102, 241, 0.1)', color: 'var(--brand)', border: '1px solid rgba(99, 102, 241, 0.2)' }
                  }}>
                    {processingId === inc.id ? <Loader2 className="spinner" size={12} style={{ display: 'inline', marginRight: '4px' }} /> : null}
                    {processingId === inc.id ? 'Processing API...' : inc.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    
                    <button onClick={() => toggleXAI(inc.id)} className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                      <Eye size={14} /> Diagnose (XAI)
                    </button>
                    
                    {inc.status === 'Pending Approval' && processingId !== inc.id && (
                      <div style={{ display: 'flex', gap: '0.25rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '0.5rem' }}>
                        <button onClick={() => handleAction(inc.id, 'APPROVE')} className="btn" style={{ padding: '0.3rem', width: '32px', display: 'flex', justifyContent: 'center', background: 'rgba(52, 211, 153, 0.15)', color: 'var(--success)', border: '1px solid rgba(52,211,153,0.3)' }} title="Approve Execution"><Check size={16} /></button>
                        <button onClick={() => handleAction(inc.id, 'REJECT')} className="btn" style={{ padding: '0.3rem', width: '32px', display: 'flex', justifyContent: 'center', background: 'rgba(248, 113, 113, 0.15)', color: 'var(--accent)', border: '1px solid rgba(248,113,113,0.3)' }} title="Reject & Discard"><X size={16} /></button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
              {expandedRow === inc.id && (
                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td colSpan="6" style={{ padding: '1.5rem', paddingLeft: '3rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '6px', borderLeft: '2px solid var(--brand)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>What Happened? (XAI)</div>
                        <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{inc.xai.what}</div>
                      </div>
                      <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '6px', borderLeft: '2px solid var(--warning)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Root Cause Prediction</div>
                        <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>{inc.xai.why}</div>
                      </div>
                      <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '6px', borderLeft: '2px solid var(--success)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Supporting Signals (Vector Matching)</div>
                        <ul style={{ fontSize: '0.8rem', marginTop: '0.5rem', paddingLeft: '1rem', color: 'var(--text-muted)' }}>
                          {inc.xai.signals.map((sig, i) => <li key={i}>{sig}</li>)}
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentsTable;
