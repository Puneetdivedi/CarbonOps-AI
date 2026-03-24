import React from 'react';
import { Search, Bell, Grid, Plus, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="header" style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px' }} className="btn-outline">
          <Grid size={16} />
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Global Manufacturing Inc.</span>
          <ChevronDown size={14} color="var(--text-muted)" />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="header-search" style={{ width: '300px', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>
          <Search size={14} color="var(--text-muted)" />
          <input type="text" placeholder="Search facilities, sensors, or compliance docs..." style={{ fontSize: '0.85rem' }} />
        </div>
        
        <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
          <Plus size={16} /> Deploy New Agent
        </button>
        
        <div className="action-btn" style={{ width: '32px', height: '32px' }}>
          <Bell size={16} />
          <span className="notification-badge" style={{ background: 'var(--accent)', right: 8, top: 8, width: 6, height: 6 }}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
