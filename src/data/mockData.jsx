import React from 'react';
import { Database, TrendingUp, AlertTriangle, Hammer, Target, Activity, CheckCircle, ShieldAlert } from 'lucide-react';

// Industrial Asset Hierarchy (Site -> Plant -> Line -> Machine)
export const siteHierarchy = [
  {
    id: "site-eu-01",
    name: "Hanover Operations (Germany)",
    plants: [
      {
        id: "plant-h-a",
        name: "Plant A (Final Assembly)",
        lines: [
          {
            id: "line-1",
            name: "Robotic Stamping Line 1",
            machines: [
              { id: "m-press-1", name: "Heavy Press Alpha", type: "Stamping Press", status: "RUNNING", criticality: "CRITICAL", vendor: "Schuler", riskScore: 12 },
              { id: "m-press-2", name: "Heavy Press Beta", type: "Stamping Press", status: "WARNING", criticality: "CRITICAL", vendor: "Schuler", riskScore: 84 },
            ]
          }
        ]
      },
      {
        id: "plant-h-b",
        name: "Plant B (Energy & Utilities)",
        lines: [
          {
            id: "line-boiler",
            name: "Steam Generation",
            machines: [
              { id: "m-boiler-1", name: "Boiler System 1", type: "Boiler", status: "RUNNING", criticality: "HIGH", vendor: "Siemens", riskScore: 45 },
              { id: "m-turbine-1", name: "Gas Turbine Alpha", type: "Turbine", status: "ERROR", criticality: "CRITICAL", vendor: "GE", riskScore: 98 },
            ]
          }
        ]
      }
    ]
  }
];

export const agentsMonologue = [
  {
    id: 1,
    agent: 'Ingestion Module',
    type: 'agent-monitor',
    icon: <Database size={16} />,
    message: "[OPC-UA Connector] Synced 1.4TB telemetry from Siemens MindSphere. Scrubbing outliers...",
    time: "Just now"
  },
  {
    id: 2,
    agent: 'Anomaly Engine',
    type: 'agent-monitor',
    icon: <Target size={16} color="var(--warning)" />,
    message: "Threshold deviation detected. Asset m-turbine-1 (Gas Turbine Alpha) vibration variance +4.2mm/s above baseline.",
    time: "1m ago"
  },
  {
    id: 3,
    agent: 'Diagnostic RAG',
    type: 'agent-diagnosis',
    icon: <TrendingUp size={16} color="var(--brand)" />,
    message: "Analyzing temporal correlation. Vibration spikes match 2024 bearing failure signatures (Confidence: 94.2%). Risk of catastrophic failure in 14h.",
    time: "2m ago"
  },
  {
    id: 4,
    agent: 'Action Planner',
    type: 'agent-action',
    icon: <Hammer size={16} color="var(--success)" />,
    message: "[PENDING APPROVAL] SAP Work Order #9042 created. Suggested action: Replace main anterior bearing. Estimated downtime: 45m. ROI impact: Prevents $12k loss.",
    time: "3m ago"
  }
];

export const incidents = [
  { 
    id: "WO-9042", 
    equipment: "Gas Turbine Alpha", 
    issue: "Bearing Wear Prediction", 
    status: "Pending Approval", 
    time: "1m ago", 
    severity: "CRITICAL",
    assignee: "Eng. M. Schmidt",
    reasoning: "Vibration signature matched historical bearing failure template."
  },
  { 
    id: "WO-9041", 
    equipment: "Heavy Press Alpha", 
    issue: "Energy Inefficiency Anomaly", 
    status: "Diagnosing", 
    time: "2h ago", 
    severity: "MEDIUM",
    assignee: "Auto-AI",
    reasoning: "Power draw 8% above expected load curve for current batch size." 
  },
  { 
    id: "WO-9040", 
    equipment: "Boiler System 1", 
    issue: "CO2 Emissions Baseline Exceeded", 
    status: "Resolved", 
    time: "Yesterday", 
    severity: "HIGH",
    assignee: "Eng. J. Doe",
    reasoning: "O2 trim calibration drift."
  },
];

export const userRoles = ['Admin', 'Plant Manager', 'Maintenance Engineer', 'ESG Officer', 'Viewer'];
export const currentUser = { name: "Sarah Connor", role: "Plant Manager", location: "Hanover Operations" };
