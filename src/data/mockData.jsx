import React from 'react';
import { Activity, Search, Cpu, Wrench, FileText, AlertTriangle } from 'lucide-react';

export const agentsMonologue = [
  {
    id: 1,
    agent: 'Monitor',
    type: 'agent-monitor',
    icon: <Activity size={20} />,
    message: "Scanning live data streams. 98% sensors active.",
    time: "10:30 AM"
  },
  {
    id: 2,
    agent: 'Monitor',
    type: 'agent-monitor',
    icon: <AlertTriangle size={20} />,
    message: "ALERT: Sudden CO2 emission spike detected from Boiler #3. Current output: 182 ppm (Limit: 150 ppm).",
    time: "10:35 AM"
  },
  {
    id: 3,
    agent: 'Diagnosis',
    type: 'agent-diagnosis',
    icon: <Search size={20} />,
    message: "Running RAG on equipment manual & past incident logs. Analyzing...",
    time: "10:36 AM"
  },
  {
    id: 4,
    agent: 'Diagnosis',
    type: 'agent-diagnosis',
    icon: <Cpu size={20} />,
    message: "Root cause identified: Boiler 3 running at 112% load. Potential valve leak causing incomplete combustion.",
    time: "10:37 AM"
  },
  {
    id: 5,
    agent: 'Action',
    type: 'agent-action',
    icon: <Wrench size={20} />,
    message: "Scheduling corrective work order for Maintenance Team. Adjusting Boiler 3 load to 85% temporarily.",
    time: "10:38 AM"
  },
  {
    id: 6,
    agent: 'Action',
    type: 'agent-action',
    icon: <FileText size={20} />,
    message: "Drafting anomaly event for automated ESG compliance report. Logging to EU ETS registry format.",
    time: "10:39 AM"
  }
];

export const incidents = [
  { id: "INC-9011", equipment: "Boiler 3", issue: "Load Exceeded (112%)", status: "Critical", time: "10:35 AM" },
  { id: "INC-9010", equipment: "Ventilation B", issue: "Filter Clogged", status: "Warning", time: "08:14 AM" },
  { id: "INC-9009", equipment: "Generator 1", issue: "Routine Maintenance", status: "Resolved", time: "Yesterday" },
];
