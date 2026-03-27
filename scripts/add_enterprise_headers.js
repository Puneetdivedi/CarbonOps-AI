const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Map describing the specific enterprise capability of every file
const fileContexts = {
  'App.jsx': 'App Router - Enforces Single Sign-On (SSO) & Role-Based Access Control (RBAC) encapsulating all modules.',
  'main.jsx': 'Application Entry Point - Boots React 18 Concurrent Mode for high-performance DOM manipulation.',
  'index.css': 'Global Design System - Declares Glassmorphism variables, dark mode SCADA themes, and generic grid utilities.',
  'App.css': 'Core Layout Styling - Handles primary flexbox wrappers and routing transitions.',
  
  // Pages
  'Dashboard.jsx': 'Executive Dashboard - Simulates live IoT telemetry, LangGraph Workflow tracking, and OEE metrics display.',
  'AiStudio.jsx': 'Multi-Agent AI Studio - Visualizes the generative backend orchestrator utilizing LangChain models.',
  'AssetsView.jsx': 'SCADA Asset Map - Hierarchical drill-down of industrial machinery (Site > Plant > Line > Machine).',
  'EsgReports.jsx': 'ESG Compliance Desk - Simulates RAG generation of legal ISSB and EU-ETS emission disclosure PDFs.',
  'Login.jsx': 'IAM Simulator - Blocks unauthorized access and establishes active user context (Plant Manager, ESG Officer, etc).',
  
  // Components
  'AgentsPanel.jsx': 'Agent Trace Viewer - Displays the monologue logs of Ingestion, Analysis, and RAG agents.',
  'EmissionsChart.jsx': 'Hardware Telemetry Renderer - Handles Recharts visualization mapping of high-frequency time-series data.',
  'FactoryCopilot.jsx': 'Generative Chat Interface - Connects to the LLM agent for natural language querying of the factory dataset.',
  'Header.jsx': 'Global Control Head - Manages contextual search elements and rapid global navigation utilities.',
  'IncidentsTable.jsx': 'Human-in-the-Loop Workflow - Manage Actionable SAP tickets generated autonomously by reasoning agents.',
  'MetricCard.jsx': 'Universal KPI Card - A hyper-reusable component rendering dynamic threshold data and status icons.',
  'Sidebar.jsx': 'Navigation Matrix - Defines hierarchical module access aligned with organizational roles.',
  
  // Layouts & Architecture
  'MainLayout.jsx': 'Primary Flex Wrapper - Governs the persistent UI shell (Sidebar, Header, Footer) injecting user context.',
  'dataGenerators.js': 'Digital Twin Engine - Pure functions utilizing Kalmann noise to simulate normal operation and fault spikes.',
  'mockData.jsx': 'Offline Backend - Declares structural SCADA topologies, historical RAG incidents, and agent behaviors.',
};

const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(file);
      if (['.jsx', '.js', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const filename = path.basename(file);

        // Don't duplicate headers
        if (content.includes('CarbonOps Enterprise Industrial OS')) {
          continue;
        }

        const exactContext = fileContexts[filename] || 'Generic Module - Part of the CarbonOps Clean Code architecture.';

        // Enterprise Header Template
        const header = `/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: ${exactContext}
 * Version: 1.0.0
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */\n\n`;

        fs.writeFileSync(fullPath, header + content);
        console.log(`Updated ${filename} with enterprise header.`);
      }
    }
  }
};

processDirectory(srcDir);
console.log('All files deeply documented and standardized.');
