import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BrainCircuit, Wrench, FileCheck, Target, Factory, History, Shield, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar" style={{ width: '280px', borderRight: '1px solid var(--glass-border)' }}>
      <div className="brand" style={{ marginBottom: '2rem' }}>
        <div className="brand-icon" style={{ background: 'var(--brand)', borderRadius: '6px' }}>
          <Target size={24} color="#fff" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '1.2rem', margin: 0 }}>CarbonOps AI</h1>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>Enterprise Edition</span>
        </div>
      </div>
      
      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Overview</div>
      <ul className="nav-menu" style={{ marginBottom: '1.5rem' }}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <LayoutDashboard size={18} />
            <span>Executive Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/assets" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Factory size={18} />
            <span>Industrial Assets</span>
          </NavLink>
        </li>
      </ul>

      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Operations</div>
      <ul className="nav-menu" style={{ marginBottom: '1.5rem' }}>
        <li>
          <NavLink to="/maintenance" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Wrench size={18} />
            <span>Maintenance & Work Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ai-studio" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <BrainCircuit size={18} />
            <span>Multi-Agent AI Studio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/esg" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <FileCheck size={18} />
            <span>ESG & Compliance Desk</span>
          </NavLink>
        </li>
      </ul>

      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>System</div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/history" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <History size={18} />
            <span>Audit Trail</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/security" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <Shield size={18} />
            <span>Access & Security</span>
          </NavLink>
        </li>
      </ul>

      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <button className="nav-item" style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          <LogOut size={18} />
          <span>Logout (Admin)</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
