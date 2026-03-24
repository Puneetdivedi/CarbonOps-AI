import React, { useState, useEffect } from 'react';
import { Leaf, FileCheck, CircleDollarSign, CloudRain, Plus, Settings2, PlugZap, Activity, LayoutGrid } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import EmissionsChart from '../components/EmissionsChart';
import AgentsPanel from '../components/AgentsPanel';
import IncidentsTable from '../components/IncidentsTable';
import { generateRealtimeMultiMetrics } from '../utils/dataGenerators';
import { agentsMonologue, incidents } from '../data/mockData';

const Dashboard = () => {
  const [data, setData] = useState(generateRealtimeMultiMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        newData.push({
          time,
          temp: (parseFloat(last.temp) + (Math.random() - 0.5) * 8).toFixed(1),
          pressure: (parseFloat(last.pressure) + (Math.random() - 0.5) * 2).toFixed(1),
          co2: (parseFloat(last.co2) + (Math.random() - 0.5) * 5).toFixed(1),
          vibration: 1.2,
          co2Threshold: 150,
          tempThreshold: 720
        });
        return newData;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container fade-in" style={{ padding: '1.5rem 2rem', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
      
      {/* Top Controls - Low Code Vibe */}
      <div className="dashboard-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>CarbonOps Studio</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px' }}>
            Build, deploy, and monitor specialized AI agents across your facilities. No coding required. Connect your IoT sensors, map to ESG frameworks, and the AI handles the rest.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-outline"><Settings2 size={16}/> Configure Dashboard</button>
          <button className="btn btn-primary"><PlugZap size={16}/> Connect Data Source</button>
        </div>
      </div>

      {/* Impact Row */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--success)' }}>
            <Leaf size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>CO2 Emitted (MT)</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>4,204.1 <span style={{fontSize: '0.85rem', color: 'var(--success)'}}>-12% vs LY</span></div>
          </div>
        </div>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--brand)' }}>
            <CircleDollarSign size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Estimated Cost Savings</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>$142,500 <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>YTD Validated</span></div>
          </div>
        </div>
        <div className="glass" style={{ flex: 1, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'rgba(248, 113, 113, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--accent)' }}>
            <FileCheck size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Active Frameworks</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>EU-ETS, ISSB <span style={{fontSize: '0.85rem', color: 'var(--success)', fontWeight:'normal'}}>Auto-sync ON</span></div>
          </div>
        </div>
        <button className="glass btn-dashed" style={{ flex: 0.2, minWidth: '120px', flexDirection: 'column', gap: '0.5rem', padding: '1.25rem' }}>
          <Plus size={20} />
          <span style={{ fontSize: '0.8rem' }}>Add Impact KPI</span>
        </button>
      </div>

      {/* Main Dynamic Grid */}
      <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
        
        {/* Customizable Chart Block */}
        <div className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LayoutGrid size={16} color="var(--text-muted)" />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 500 }}>Live Telemetry </h3>
              <span className="mono-text" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem' }}>Source: AWS IoT Core</span>
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
              <h3 style={{ fontSize: '0.95rem', fontWeight: 500 }}>AI Workflow Engine</h3>
              <span className="status-indicator active"></span>
            </div>
            <button className="btn btn-outline" style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>Edit Logic</button>
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
