import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, Cpu, Zap, Thermometer, Gauge, Wind } from 'lucide-react';
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
        
        let newTemp = parseFloat(last.temp) + (Math.random() - 0.5) * 8;
        let newPressure = parseFloat(last.pressure) + (Math.random() - 0.5) * 2;
        let newCO2 = parseFloat(last.co2) + (Math.random() - 0.5) * 5;

        newData.push({
          time,
          temp: newTemp.toFixed(1),
          pressure: newPressure.toFixed(1),
          co2: newCO2.toFixed(1),
          vibration: (parseFloat(last.vibration) + (Math.random() - 0.5) * 0.1).toFixed(2),
          co2Threshold: 150,
          tempThreshold: 720
        });
        return newData;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-header" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
        <div className="dashboard-title">
          <h2 style={{ fontSize: '2rem', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)', color: 'var(--primary)' }}>
            UNIVERSAL SYSTEM HYPER-VISOR
          </h2>
          <p className="mono-text" style={{ color: 'var(--secondary)' }}>Global Operations Network • Omni-Node Active</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
            <ShieldAlert size={18} /> OVERRIDE
          </button>
          <button className="btn btn-ai">
            <Cpu size={18} /> DEPLOY AI TASK FORCE
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <MetricCard
          title="CORE THERMAL"
          icon={<Thermometer size={18} />}
          value={data[data.length-1].temp}
          unit="°C"
          trend="Critical Zone Approaching"
          trendUp={false}
          borderColor={data[data.length-1].temp > 720 ? "var(--accent)" : "var(--primary)"}
        />
        <MetricCard
          title="SYSTEM PRESSURE"
          icon={<Gauge size={18} />}
          value={data[data.length-1].pressure}
          unit="PSI"
          trend="High Volatility"
          trendUp={false}
          borderColor={data[data.length-1].pressure > 100 ? "var(--warning)" : "var(--primary)"}
        />
        <MetricCard
          title="EMISSIONS (CO2 EQ)"
          icon={<Wind size={18} />}
          value={data[data.length-1].co2}
          unit="ppm"
          trend="Correlated with Thermal Spike"
          trendUp={false}
          borderColor={data[data.length-1].co2 > 150 ? "var(--accent)" : "var(--primary)"}
        />
        <MetricCard
          title="NETWORK INTEGRITY"
          icon={<Activity size={18} />}
          value="99.9"
          unit="%"
          trend="LangGraph Synced"
          trendUp={true}
          borderColor="var(--success)"
        />
      </div>

      <div className="main-grid">
        <EmissionsChart data={data} />
        <AgentsPanel logs={agentsMonologue} />
      </div>

      <div className="bottom-grid">
        <IncidentsTable incidents={incidents} />
      </div>
    </div>
  );
};

export default Dashboard;
