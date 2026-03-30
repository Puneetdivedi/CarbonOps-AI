/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Global Control Head - Manages contextual search elements and rapid global navigation utilities.
 * Version: 1.0.0
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React, { useState } from 'react';
import { Search, Bell, Grid, Plus, ChevronDown, Download, Server } from 'lucide-react';
import toast from 'react-hot-toast';

const Header = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportSystemAuditCSV = () => {
    setIsExporting(true);
    const toastId = toast.loading('Compiling Global Audit Trail (CSV)...');
    
    setTimeout(() => {
      // Mock Data Payload for enterprise CSV Export
      const headers = ['Timestamp', 'System Module', 'Agent Status', 'Threat Level'];
      const rows = [
        ['2026-03-30T10:00:00Z', 'Auth Node', 'Nominal', 'Low'],
        ['2026-03-30T10:15:00Z', 'Pinecone Vector DB', 'Connected', 'Low'],
        ['2026-03-30T10:30:22Z', 'Anomaly Engine', 'Triggered', 'High'],
        ['2026-03-30T10:31:05Z', 'LangGraph Planner', 'Executed', 'Medium']
      ];
      
      let csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n" 
        + rows.map(e => e.join(",")).join("\n");
        
      // Native Blob Download Trigger
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "carbonops_audit_export_2026.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('Audit CSV Generated & Downloaded!', { id: toastId });
      setIsExporting(false);
    }, 1200);
  };

  return (
    <header className="header" style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px' }} className="btn-outline">
          <Grid size={16} />
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Global Manufacturing Inc.</span>
          <ChevronDown size={14} color="var(--text-muted)" />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        
        {/* Real-time System Health Pulse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(52, 211, 153, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '50px', border: '1px solid rgba(52, 211, 153, 0.2)' }}>
           <Server size={14} color="var(--success)" />
           <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>API Connected (14ms)</span>
           <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', boxShadow: '0 0 10px var(--success)', animation: 'blink 1.5s infinite ease-in-out' }}></span>
        </div>

        <div className="header-search" style={{ width: '280px', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>
          <Search size={14} color="var(--text-muted)" />
          <input type="text" placeholder="Search facilities, sensors, or compliance docs..." style={{ fontSize: '0.85rem' }} />
        </div>
        
        <button className="btn btn-outline" onClick={exportSystemAuditCSV} disabled={isExporting} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Download size={14} /> {isExporting ? 'Exporting...' : 'Export Audit (CSV)'}
        </button>

        <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
          <Plus size={16} /> Deploy New Agent
        </button>
        
        <div className="action-btn" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
          <Bell size={16} />
          <span className="notification-badge" style={{ background: 'var(--accent)', right: 8, top: 8, width: 6, height: 6 }}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
