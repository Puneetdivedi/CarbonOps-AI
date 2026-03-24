import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* Add more routes here as phase 2 progresses */}
          <Route path="agents" element={<div className="dashboard-container"><h2 style={{color: '#fff'}}>Agent Console (WIP)</h2></div>} />
          <Route path="reports" element={<div className="dashboard-container"><h2 style={{color: '#fff'}}>ESG Reporting (WIP)</h2></div>} />
          <Route path="kb" element={<div className="dashboard-container"><h2 style={{color: '#fff'}}>Knowledge Base (WIP)</h2></div>} />
          <Route path="settings" element={<div className="dashboard-container"><h2 style={{color: '#fff'}}>Settings (WIP)</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
