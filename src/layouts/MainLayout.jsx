/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Primary Flex Wrapper - Governs the persistent UI shell (Sidebar, Header, Footer) injecting user context.
 * Version: 1.0.0
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = ({ user, onLogout }) => {
  return (
    <div className="app-container">
      <Sidebar user={user} onLogout={onLogout} />
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header user={user} />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        
        {/* Footer */}
        <footer style={{ 
          padding: '1.5rem', 
          borderTop: '1px solid var(--glass-border)', 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)' 
        }}>
          CarbonOps AI Studio • Powered by GenAI, RAG & LLM Agents • Designed & Developed by <strong style={{ color: 'var(--primary)' }}>Puneet Divedi</strong>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;
