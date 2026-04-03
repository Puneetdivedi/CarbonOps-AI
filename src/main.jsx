/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Application Entry Point - Boots React 18 Concurrent Mode for high-performance DOM manipulation.
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
