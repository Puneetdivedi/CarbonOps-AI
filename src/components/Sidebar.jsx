import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, LayoutDashboard, Activity, FileText, Database, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Zap size={24} />
        </div>
        <h1>CarbonOps AI</h1>
      </div>
      
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <LayoutDashboard size={20} />
            <span>Live Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/agents" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Activity size={20} />
            <span>Agent Console</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <FileText size={20} />
            <span>ESG Reporting</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/kb" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Database size={20} />
            <span>Knowledge Base</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <button className="nav-item" style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
