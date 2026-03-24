import React from 'react';
import { Network, Search, Cpu, Wrench, ShieldAlert, Zap, RadioTower } from 'lucide-react';

export const agentsMonologue = [
  {
    id: 1,
    agent: 'Omni-Monitor',
    type: 'agent-monitor',
    icon: <RadioTower size={20} />,
    message: "Initializing universal protocols. Syncing 1,402 IoT sensors across Thermal, Pressure, & Bio-nodes. Integrity 100%.",
    time: "10:30:12 AM"
  },
  {
    id: 2,
    agent: 'Omni-Monitor',
    type: 'agent-monitor',
    icon: <ShieldAlert size={20} color="var(--accent)" />,
    message: "CRITICAL ANOMALY: Cascade failure detected. Temp spiking (732°C), Pressure surging (105 PSI). Correlated CO2 burst incoming.",
    time: "10:35:04 AM"
  },
  {
    id: 3,
    agent: 'Deep-Diagnosis',
    type: 'agent-diagnosis',
    icon: <Search size={20} color="var(--secondary)" />,
    message: "Intercepting datastream. Engaging Hyper-RAG across 4.2M technical schematics universally. Isolating multivariate vectors...",
    time: "10:35:11 AM"
  },
  {
    id: 4,
    agent: 'Deep-Diagnosis',
    type: 'agent-diagnosis',
    icon: <Network size={20} color="var(--secondary)" />,
    message: "ROOT CAUSE FOUND (99.8% Confidence): Synchronous failure in Turbine Alpha micro-valve array causing fuel-air mixture dislocation. Cascading to thermal runaway.",
    time: "10:35:45 AM"
  },
  {
    id: 5,
    agent: 'Global-Action',
    type: 'agent-action',
    icon: <Cpu size={20} color="var(--primary)" />,
    message: "Executing autonomous hard-override. Throttling Turbine Alpha fuel cells by 40%. Engaging secondary cooling loops universally.",
    time: "10:36:02 AM"
  },
  {
    id: 6,
    agent: 'Global-Action',
    type: 'agent-action',
    icon: <Wrench size={20} color="var(--primary)" />,
    message: "Stabilization achieved. Auto-generating preemptive maintenance strike vector for engineering corps. ESG + safety logs locked and vaulted cryptographically.",
    time: "10:36:40 AM"
  }
];

export const incidents = [
  { id: "SYS-OMNI-001", equipment: "Turbine Alpha", issue: "Micro-valve thermal runaway", status: "Auto-Terminated", time: "10:36 AM", severity: "CRITICAL" },
  { id: "SYS-GEO-442", equipment: "Grid Interconnect B", issue: "Phase misalignment", status: "Diagnosing", time: "09:22 AM", severity: "HIGH" },
  { id: "SYS-BIO-110", equipment: "Ventilation Array", issue: "Particulate filter dense", status: "Resolved", time: "Yesterday", severity: "PREVENTATIVE" },
];
