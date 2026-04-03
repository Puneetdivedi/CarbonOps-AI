/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Offline Backend - Declares structural SCADA topologies, historical RAG incidents, and agent behaviors.
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React from 'react';
import { Database, TrendingUp, AlertTriangle, Hammer, Target, Shield, CheckCircle } from 'lucide-react';

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

export const benchmarking = [
  { plant: "Plant B (Energy)", oee: 92.4, emissions: "1,200 MT/y", downtime: "4.2h/mo", rank: "1 - Leader" },
  { plant: "Plant A (Assembly)", oee: 88.1, emissions: "840 MT/y", downtime: "12.5h/mo", rank: "2 - Stable" },
  { plant: "Plant C (Chem)", oee: 76.5, emissions: "4,500 MT/y", downtime: "28.0h/mo", rank: "3 - Needs Audit" },
];

export const agentsMonologue = [
  {
    id: 1,
    agent: 'Ingestion Module',
    type: 'agent-monitor',
    icon: <Database size={16} />,
    message: "[OPC-UA Connector] Synced 1.4TB telemetry. Missing data interpolated via Kalmann Filter.",
    time: "Just now"
  },
  {
    id: 2,
    agent: 'Anomaly Engine',
    type: 'agent-monitor',
    icon: <Target size={16} color="var(--warning)" />,
    message: "Deviation detected. Asset m-turbine-1 (Gas Turbine Alpha) vibration variance +4.2mm/s above baseline. Noise filtered.",
    time: "1m ago"
  },
  {
    id: 3,
    agent: 'Diagnostic RAG',
    type: 'agent-diagnosis',
    icon: <TrendingUp size={16} color="var(--brand)" />,
    message: "Retrieved 1,200 docs. Vibration spikes correlate with 2024 bearing failure signatures. Confidence: 94.2%.",
    time: "2m ago"
  },
  {
    id: 4,
    agent: 'Action Planner',
    type: 'agent-action',
    icon: <Hammer size={16} color="var(--success)" />,
    message: "[PENDING HUMAN APPROVAL] SAP Work Order #9042 generated. Suggested action: Replace main anterior bearing. Escalating to Plant Manager.",
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
    risk: "High",
    confidence: 94.2,
    assignee: "Eng. M. Schmidt",
    reasoning: "Vibration signature matched historical bearing failure template from Q4 2024.",
    xai: {
      what: "Vibration is steadily increasing alongside minute temperature rises.",
      why: "The anterior bearing is likely losing lubrication, increasing friction.",
      signals: ["Vibration at 4.5mm/s", "Temp at 760°C", "Load remains flat"]
    }
  },
  { 
    id: "WO-9041", 
    equipment: "Heavy Press Alpha", 
    issue: "Energy Inefficiency Anomaly", 
    status: "Diagnosing", 
    time: "2h ago", 
    severity: "MEDIUM",
    risk: "Medium",
    confidence: 82.1,
    assignee: "Auto-AI",
    reasoning: "Power draw 8% above expected load curve for current batch size.",
    xai: {
      what: "Machine is using more power than normal to produce the same goods.",
      why: "Likely a hydraulic fluid leak causing the pump to run 20% harder.",
      signals: ["Power draw at 112kW", "Pressure variance 4%"]
    }
  },
];

export const userRoles = ['Admin', 'Plant Manager', 'Maintenance Engineer', 'ESG Officer', 'Viewer'];
export const currentUser = { name: "Sarah Connor", role: "Plant Manager", location: "Hanover Operations" };
