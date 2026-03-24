import React, { useState, useEffect } from 'react';
import { Leaf, FileCheck, CircleDollarSign, Plus, Settings2, PlugZap, Activity, LayoutGrid, Zap, ThermometerSnowflake, Hammer } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import EmissionsChart from '../components/EmissionsChart';
import AgentsPanel from '../components/AgentsPanel';
import IncidentsTable from '../components/IncidentsTable';
import { generateTelemetryStream, generateOEEMetrics, generateFinancialImpact } from '../utils/dataGenerators';
import { agentsMonologue, incidents, siteHierarchy, currentUser } from '../data/mockData';

const Dashboard = () => {
  const [simulationMode, setSimulationMode] = useState('NORMAL');
  const [data, setData] = useState(generateTelemetryStream('NORMAL'));
  const oee = generateOEEMetrics();
  const financials = generateFinancialImpact();

  useEffect(() => {
    // Refresh stream on simulation change to show immediate impact
    setData(generateTelemetryStream(simulationMode));
    
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)];
        const stream = generateTelemetryStream(simulationMode, 1);
        newData.push(stream[0]);
        return newData;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [simulationMode]);

  return (
    <div className="dashboard-container fade-in" style={{ padding: '1.5rem 2rem', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
      
      {/* Top Controls & Simulation Mode */}
      <div className="dashboard-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>CarbonOps AI Executive Terminal</h2>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{color: '#fff', fontWeight: 'bold'}}>{currentUser.location}</span> / {siteHierarchy[0].plants[1].name} / {siteHierarchy[0].plants[1].lines[0].name}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.5rem'}}>LIVE HARDWARE SIMULATOR:</span>
          <select 
            className="btn btn-outline" 
            style={{ padding: '0.4rem 1rem', background: simulationMode !== 'NORMAL' ? 'rgba(255, 61, 0, 0.1)' : 'transparent', borderColor: simulationMode !== 'NORMAL' ? 'var(--accent)' : 'var(--glass-border)' }}
            value={simulationMode}
            onChange={(e) => setSimulationMode(e.target.value)}
          >
            <option value="NORMAL">Normal Operation</option>
            <option value="BEARING_WEAR">Simulate Main Bearing Wear (Vibration+Temp)</option>
            <option value="PRESSURE_SPIKE">Simulate Instant Pressure Spike (Valve Block)</option>
            <option value="EMISSION_LEAK">Simulate Thermal Inefficiency (O2 Trim Fail)</option>
          </select>
        </div>
      </div>

      {/* Enterprise Impact Row (OEE & Financials) */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--brand)' }}>
            <Activity size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Overall Equipment Effectiveness (OEE)</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{oee.oeeScore}% <span style={{fontSize: '0.85rem', color: oee.oeeScore > 80 ? 'var(--success)' : 'var(--accent)'}}>(Ideal: {oee.availability}% Avail)</span></div>
          </div>
        </div>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--success)' }}>
            <CircleDollarSign size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Valid Cost Savings (YTD)</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>${(financials.totalSavingsYTD).toLocaleString()} <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>- KPI Tracker Active</span></div>
          </div>
        </div>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--accent)' }}>
            <Hammer size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Mean Time Between Failures (MTBF)</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{oee.mtbf} <span style={{fontSize: '0.85rem', color: 'var(--success)', fontWeight:'normal'}}>Hours ~ {(oee.mtbf/24).toFixed(0)} Days</span></div>
          </div>
        </div>
      </div>

      {/* Main Dynamic Grid */}
      <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* Customizable Chart Block */}
        <div className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LayoutGrid size={16} color="var(--text-muted)" />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 500 }}>Live Telemetry (Gas Turbine Alpha) </h3>
              {simulationMode !== 'NORMAL' && <span className="mono-text" style={{ background: 'rgba(255, 61, 0, 0.2)', color: 'var(--accent)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>FAULT INJECTED</span>}
            </div>
            <button className="btn btn-outline" style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>Configure Stream</button>
          </div>
          <div style={{ padding: '1rem', height: '350px' }}>
             <EmissionsChart data={data} />
          </div>
        </div>

        {/* AI Agents Workflow Block */}
        <div className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={16} color="var(--brand)" />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 500 }}>Multi-Agent Orchestration Flow</h3>
              <span className={`status-indicator ${simulationMode !== 'NORMAL' ? 'danger' : 'active'}`}></span>
            </div>
          </div>
          <div style={{ flex: 1, padding: '0' }}>
            <AgentsPanel logs={agentsMonologue} />
          </div>
        </div>
      </div>

      {/* Actionable Tables */}
      <div className="glass">
        <IncidentsTable incidents={incidents} />
      </div>

    </div>
  );
};

export default Dashboard;
