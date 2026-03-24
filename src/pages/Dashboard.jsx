import React, { useState, useEffect } from 'react';
import { Activity, BarChart3, ShieldAlert, CheckCircle, FileText } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import EmissionsChart from '../components/EmissionsChart';
import AgentsPanel from '../components/AgentsPanel';
import IncidentsTable from '../components/IncidentsTable';
import { generateRealtimeEmissions } from '../utils/dataGenerators';
import { agentsMonologue, incidents } from '../data/mockData';

const Dashboard = () => {
  const [data, setData] = useState(generateRealtimeEmissions());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1)];
        const lastCO2 = parseFloat(prev[prev.length - 1].co2);
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        newData.push({
          time,
          co2: ((lastCO2 + (Math.random() - 0.5) * 10)).toFixed(1),
          threshold: 150
        });
        return newData;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h2>Site Overview</h2>
          <p>Plant Alpha • Mumbai, India</p>
        </div>
        <button className="btn btn-primary">
          <FileText size={18} />
          Generate Compliance Report
        </button>
      </div>

      <div className="metrics-grid">
        <MetricCard
          title="Total CO2 Emitted"
          icon={<BarChart3 size={18} />}
          value="42.8"
          unit="tons"
          trend="↓ 3.2% from last week"
          trendUp={true}
        />
        <MetricCard
          title="Live Sensor Status"
          icon={<Activity size={18} />}
          value="98.5"
          unit="%"
          trend="All critical nodes online"
          trendUp={true}
        />
        <MetricCard
          title="Active Anomalies"
          icon={<ShieldAlert size={18} />}
          value="1"
          unit="critical"
          trend="Boiler 3 needs attention"
          trendUp={false}
          borderColor="rgba(255, 61, 0, 0.3)"
        />
        <MetricCard
          title="ESG Compliance Score"
          icon={<CheckCircle size={18} />}
          value="A"
          unit="Tier"
          trend="Ready for EU ETS audit"
          trendUp={true}
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
