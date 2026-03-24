import React, { useState, useEffect } from 'react';
import { 
  Activity, BarChart3, Settings, ShieldAlert, Cpu, 
  Zap, Bell, Search, LayoutDashboard, Database, LogOut,
  AlertTriangle, CheckCircle, FileText, Wrench
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import './App.css';

const generateData = () => {
  const data = [];
  let currentCO2 = 120;
  for (let i = 0; i < 20; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (20 - i) * 5);
    // Introduce a spike
    if (i === 15 || i === 16 || i === 17) {
      currentCO2 = currentCO2 + 40 + Math.random() * 20;
    } else {
      currentCO2 = 110 + Math.random() * 20;
    }
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      co2: currentCO2.toFixed(1),
      threshold: 150
    });
  }
  return data;
};

const agentsMonologue = [
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

const incidents = [
  { id: "INC-9011", equipment: "Boiler 3", issue: "Load Exceeded (112%)", status: "Critical", time: "10:35 AM" },
  { id: "INC-9010", equipment: "Ventilation B", issue: "Filter Clogged", status: "Warning", time: "08:14 AM" },
  { id: "INC-9009", equipment: "Generator 1", issue: "Routine Maintenance", status: "Resolved", time: "Yesterday" },
];

function App() {
  const [data, setData] = useState(generateData());
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setData(prev => {
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
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <Zap size={24} />
          </div>
          <h1>CarbonOps AI</h1>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Live Dashboard</span>
          </li>
          <li className="nav-item">
            <Activity size={20} />
            <span>Agent Console</span>
          </li>
          <li className="nav-item">
            <FileText size={20} />
            <span>ESG Reporting</span>
          </li>
          <li className="nav-item">
            <Database size={20} />
            <span>Knowledge Base</span>
          </li>
          <li className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="nav-item">
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-search">
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Query AI assistant or search metrics..." />
          </div>
          <div className="header-actions">
            <div className="action-btn">
              <Bell size={18} />
              <span className="notification-badge"></span>
            </div>
            <div className="action-btn">
              <UserCircle size={18} />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
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
            <div className="glass metric-card">
              <div className="metric-header">
                <span className="metric-title">Total CO2 Emitted</span>
                <BarChart3 size={18} className="metric-icon" />
              </div>
              <div className="metric-value-container">
                <span className="metric-value">42.8</span>
                <span className="metric-unit">tons</span>
              </div>
              <span className="metric-trend trend-down">↓ 3.2% from last week</span>
            </div>
            
            <div className="glass metric-card">
              <div className="metric-header">
                <span className="metric-title">Live Sensor Status</span>
                <Activity size={18} className="metric-icon" />
              </div>
              <div className="metric-value-container">
                <span className="metric-value">98.5</span>
                <span className="metric-unit">%</span>
              </div>
              <span className="metric-trend trend-up" style={{color: 'var(--primary)'}}>All critical nodes online</span>
            </div>

            <div className="glass metric-card" style={{borderColor: 'rgba(255, 61, 0, 0.3)'}}>
              <div className="metric-header">
                <span className="metric-title">Active Anomalies</span>
                <ShieldAlert size={18} className="metric-icon" style={{color: 'var(--accent)'}} />
              </div>
              <div className="metric-value-container">
                <span className="metric-value" style={{color: 'var(--accent)'}}>1</span>
                <span className="metric-unit">critical</span>
              </div>
              <span className="metric-trend trend-up">Boiler 3 needs attention</span>
            </div>
            
            <div className="glass metric-card">
              <div className="metric-header">
                <span className="metric-title">ESG Compliance Score</span>
                <CheckCircle size={18} className="metric-icon" />
              </div>
              <div className="metric-value-container">
                <span className="metric-value">A</span>
                <span className="metric-unit">Tier</span>
              </div>
              <span className="metric-trend trend-up" style={{color: 'var(--primary)'}}>Ready for EU ETS audit</span>
            </div>
          </div>

          <div className="main-grid">
            {/* Chart */}
            <div className="glass chart-card">
              <div className="chart-header">
                <div className="chart-title">
                  <span className="status-indicator active"></span>
                  <h3>Live Real-time Emissions (ppm)</h3>
                </div>
                <div className="metric-trend trend-up" style={{color: 'var(--text-muted)'}}>Last 2 Hours</div>
              </div>
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAlert" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--glass-border)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="threshold" stroke="var(--accent)" strokeWidth={1} strokeDasharray="5 5" dot={false} />
                    <Area 
                      type="monotone" 
                      dataKey="co2" 
                      stroke={(props) => {
                        const last = data[data.length-1].co2;
                        return last > 150 ? "var(--accent)" : "var(--primary)";
                      }} 
                      fill="url(#colorCO2)" 
                      strokeWidth={2}
                      activeDot={{ r: 6, fill: "var(--bg-dark)", stroke: "var(--primary)", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Agents Monologue */}
            <div className="glass agents-panel">
              <div className="agents-header">
                <Cpu size={20} color="var(--secondary)" />
                <h3>AI Brain Activity</h3>
                <span className="status-indicator active" style={{marginLeft: 'auto'}}></span>
              </div>
              <div className="agents-feed">
                {agentsMonologue.map((log) => (
                  <div key={log.id} className="agent-message">
                    <div className={`agent-avatar ${log.type}`}>
                      {log.icon}
                    </div>
                    <div className="message-content">
                      <div className="message-header">
                        <span className="agent-name">{log.agent} Agent</span>
                        <span className="message-time">{log.time}</span>
                      </div>
                      <span className="message-text">{log.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bottom-grid">
            <div className="glass table-card">
              <div className="table-header">
                <h3>Recent Incidents & Actions</h3>
                <button className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.85rem'}}>View All</button>
              </div>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Incident ID</th>
                    <th>Equipment</th>
                    <th>Issue Detected</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map(inc => (
                    <tr key={inc.id}>
                      <td style={{fontWeight: 600}}>{inc.id}</td>
                      <td>{inc.equipment}</td>
                      <td>{inc.issue}</td>
                      <td>{inc.time}</td>
                      <td>
                        <span className={`badge ${
                          inc.status === 'Critical' ? 'badge-critical' :
                          inc.status === 'Warning' ? 'badge-warning' : 'badge-success'
                        }`}>
                          {inc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
