import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
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
