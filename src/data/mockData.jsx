import React from 'react';
import { Bot, Link, Cpu, Wrench, ShieldAlert, Sparkles } from 'lucide-react';

export const agentsMonologue = [
  {
    id: 1,
    agent: 'Ingestion AI',
    type: 'agent-monitor',
    icon: <Link size={16} />,
    message: "Connected to Siemens MindSphere API. Receiving mapped telemetry for 4 boiler assets. Normalizing to standardized schema.",
    time: "Just now"
  },
  {
    id: 2,
    agent: 'Rule Engine',
    type: 'agent-monitor',
    icon: <ShieldAlert size={16} color="var(--accent)" />,
    message: "Trigger hit: Asset #A-201 emissions spiked 15% above historical baseline (Block ID: CO2-Limit-Check).",
    time: "1m ago"
  },
  {
    id: 3,
    agent: 'Diagnostic AI',
    type: 'agent-diagnosis',
    icon: <Sparkles size={16} color="var(--brand)" />,
    message: "RAG lookup triggered. Assessing 'Boiler Maintenance Manual PDF' and past JIRA tickets. Issue isolated: O2 trim failure.",
    time: "2m ago"
  },
  {
    id: 4,
    agent: 'Action AI',
    type: 'agent-action',
    icon: <Wrench size={16} color="var(--success)" />,
    message: "Action node executed. Created Work Order #844 in SAP. Drafted anomaly incident report per EU-ETS Chapter 3 guidelines.",
    time: "3m ago"
  }
];

export const incidents = [
  { id: "INC-291", equipment: "Asset #A-201", issue: "O2 Trim Failure -> Emission Spike", status: "Work Order Created", time: "1m ago", severity: "HIGH" },
  { id: "INC-290", equipment: "HVAC Unit 4", issue: "Energy Consumption +8% anomaly", status: "Diagnosing", time: "2h ago", severity: "MEDIUM" },
  { id: "INC-289", equipment: "Generator B", issue: "Missing baseline telemetry data", status: "Resolved", time: "Yesterday", severity: "LOW" },
];
