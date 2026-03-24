import React from 'react';
import { Search, Bell, UserCircle, Hexagon } from 'lucide-react';

const Header = () => {
  return (
    <header className="header" style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(0,255,255,0.1)' }}>
      <div className="header-search" style={{ 
        width: '500px', 
        background: 'rgba(0, 255, 255, 0.05)', 
        borderColor: 'rgba(0, 255, 255, 0.2)',
        boxShadow: '0 0 20px rgba(0,255,255,0.05)'
      }}>
        <Hexagon size={18} color="var(--primary)" />
        <input 
          type="text" 
          placeholder="ENTER AI COMMAND: [ e.g. /recalibrate_valves_3_to_9, /query_global_thermals ]" 
          className="mono-text"
          style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold' }}
        />
      </div>
      <div className="header-actions">
        <div className="action-btn" style={{ borderColor: 'var(--primary)' }}>
          <Bell size={18} color="var(--primary)" />
          <span className="notification-badge" style={{ background: 'var(--accent)' }}></span>
        </div>
        <div className="action-btn">
          <UserCircle size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
