/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: ESG Compliance Desk - Simulates RAG generation of legal ISSB and EU-ETS emission disclosure PDFs.
 * Version: 1.0.0
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React, { useState } from 'react';
import { FileCheck, ShieldAlert, Cpu, DownloadCloud, PieChart, Activity, Fingerprint } from 'lucide-react';
import { siteHierarchy } from '../data/mockData';

const EsgReports = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setDownloadReady(true);
    }, 2500);
  };

  const auditHistory = [
    { id: "REP-ISSB-Jan", type: "ISSB S2 (Climate)", date: "2026-01-31", status: "Verified", auditor: "S. Connor" },
    { id: "REP-EU-ETS-Q4", type: "EU-ETS Carbon Audit", date: "2025-12-31", status: "Verified", auditor: "Ext. KPMG" },
    { id: "REP-SCOPE3-Dec", type: "Scope 3 Supply Chain", date: "2025-12-15", status: "Draft", auditor: "Auto-AI" }
  ];

  return (
    <div className="dashboard-container fade-in" style={{ padding: '1.5rem 2rem', maxWidth: '1600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--success)', marginBottom: '0.5rem' }}>ESG & Compliance Desk</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Autogeneration of ISSB, EU-ETS, and Scope 1-3 regulatory disclosures.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem' }}>
        
        {/* Core Generator Module */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Action Header */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
            <div style={{ textAlign: 'center' }}>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Generate March 2026 Disclosures</h3>
               <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Utilizing RAG logic to ingest {siteHierarchy[0].name} telemetry and output legally-formatted PDF frameworks.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
              <select className="btn btn-outline" style={{ padding: '0.75rem 1rem', width: '250px', background: 'rgba(255,255,255,0.03)' }}>
                <option>EU-ETS Standard Draft 2.4</option>
                <option>ISSB S1/S2 Final</option>
                <option>SEBI BRSR (India)</option>
                <option>SEC Climate Rule</option>
              </select>
              
              {!downloadReady ? (
                <button 
                  onClick={handleGenerateReport} 
                  disabled={isGenerating}
                  className="btn btn-primary" 
                  style={{ padding: '0.75rem 2rem', background: 'var(--success)', border: 'none', color: '#000', minWidth: '180px' }}
                >
                  {isGenerating ? 'Compiling AI Output...' : 'Generate Legal PDF'}
                </button>
              ) : (
                <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', background: 'var(--brand)', border: 'none', minWidth: '180px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <DownloadCloud size={18} /> Download Asset
                </button>
              )}
            </div>
            
            {isGenerating && (
              <div style={{ width: '450px', maxWidth: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <span>Querying LangGraph Models...</span>
                  <span>78%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                   <div style={{ width: '78%', height: '100%', background: 'var(--brand)', transition: 'width 2s ease' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Audit History */}
           <div className="table-card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <Fingerprint size={18} color="var(--text-muted)" /> Compliance Audit Trail
            </h3>
            <table className="custom-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.75rem' }}>Trace ID</th>
                  <th style={{ padding: '0.75rem' }}>Framework Type</th>
                  <th style={{ padding: '0.75rem' }}>Date Issued</th>
                  <th style={{ padding: '0.75rem' }}>Status</th>
                  <th style={{ padding: '0.75rem' }}>Signed By</th>
                </tr>
              </thead>
              <tbody>
                {auditHistory.map((log, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600, fontSize: '0.85rem' }}>{log.id}</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.85rem' }}>{log.type}</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.85rem' }}>{log.date}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span className="badge" style={{ 
                        background: log.status === 'Verified' ? 'rgba(52, 211, 153, 0.1)' : 'rgba(251, 191, 36, 0.1)', 
                        color: log.status === 'Verified' ? 'var(--success)' : 'var(--warning)', 
                        padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem' 
                      }}>{log.status}</span>
                    </td>
                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{log.auditor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-time KPI Tracker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
           <div className="glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                 <PieChart size={18} color="var(--brand)" /> 
                 <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Carbon Equivalent YoY</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}><span>Scope 1 (Direct Machinery)</span> <span>1,240 MT</span></div>
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px' }}><div style={{ width: '65%', background: 'var(--accent)', height: '100%', borderRadius: '4px' }}></div></div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}><span>Scope 2 (Purchased Energy)</span> <span>890 MT</span></div>
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px' }}><div style={{ width: '42%', background: 'var(--warning)', height: '100%', borderRadius: '4px' }}></div></div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}><span>Scope 3 (Supply Chain)</span> <span>15,400 MT</span></div>
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px' }}><div style={{ width: '92%', background: 'var(--brand)', height: '100%', borderRadius: '4px' }}></div></div>
                </div>
              </div>
           </div>

           <div className="glass" style={{ padding: '1.5rem', borderLeft: '3px solid var(--success)' }}>
              <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Carbon Credits Accrued</h3>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>14,250 <span style={{ fontSize: '1rem', color: 'var(--success)', fontWeight: 'normal' }}>MT CO2e</span></div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Generated through GenAI optimized predictive maintenance reducing total factory idle hours by 18% YoY.</p>
           </div>

        </div>

      </div>
    </div>
  );
};

export default EsgReports;
