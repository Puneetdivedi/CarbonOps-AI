/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: Hardware Telemetry Renderer - Handles Recharts visualization mapping of high-frequency time-series data.
 * Version: 1.0.0
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';

const EmissionsChart = ({ data }) => {
  return (
    <div className="chart-wrapper" style={{ height: '100%', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', borderColor: 'var(--glass-border)', borderRadius: '6px', fontSize: '0.85rem' }}
            itemStyle={{ color: '#fff' }}
          />
          <Line type="monotone" dataKey="co2Threshold" stroke="var(--accent)" strokeWidth={1} strokeDasharray="4 4" dot={false} />
          <Area
            type="monotone"
            dataKey="co2"
            stroke="#fff"
            fill="url(#colorPrimary)"
            strokeWidth={2}
            activeDot={{ r: 4, fill: "var(--bg-dark)", stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsChart;
