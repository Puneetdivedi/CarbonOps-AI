import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';

const EmissionsChart = ({ data }) => {
  return (
    <div className="glass chart-card">
      <div className="chart-header">
        <div className="chart-title">
          <span className="status-indicator active"></span>
          <h3 className="mono-text" style={{letterSpacing: '2px', color: 'var(--primary)'}}>MULTI-METRIC STREAM </h3>
        </div>
        <div className="metric-trend trend-up" style={{ color: 'var(--secondary)' }}>LIVE FEED (1ms LTL)</div>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1 10" stroke="rgba(255,255,255,0.1)" vertical={true} />
            <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(5,5,10,0.9)', borderColor: 'var(--primary)', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}
              itemStyle={{ color: '#fff' }}
            />
            {/* Threshold lines */}
            <Line type="monotone" dataKey="tempThreshold" stroke="var(--accent)" strokeWidth={1} strokeDasharray="3 3" dot={false} />
            <Line type="monotone" dataKey="co2Threshold" stroke="var(--warning)" strokeWidth={1} strokeDasharray="3 3" dot={false} />
            
            {/* Data Streams */}
            <Area
              type="step"
              dataKey="temp"
              stroke="var(--accent)"
              fill="url(#colorTemp)"
              strokeWidth={2}
              activeDot={{ r: 4, fill: "var(--accent)", stroke: "#fff", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="co2"
              stroke="var(--primary)"
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
