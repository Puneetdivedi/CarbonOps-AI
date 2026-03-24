import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';

const EmissionsChart = ({ data }) => {
  return (
    <div className="glass chart-card">
      <div className="chart-header">
        <div className="chart-title">
          <span className="status-indicator active"></span>
          <h3>Live Real-time Emissions (ppm)</h3>
        </div>
        <div className="metric-trend trend-up" style={{ color: 'var(--text-muted)' }}>Last 2 Hours</div>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
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
                // Approximate dynamic coloring by threshold
                return "var(--primary)";
              }}
              fill="url(#colorCO2)"
              strokeWidth={2}
              activeDot={{ r: 6, fill: "var(--bg-dark)", stroke: "var(--primary)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmissionsChart;
