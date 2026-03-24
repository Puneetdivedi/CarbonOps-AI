import React from 'react';

const MetricCard = ({ title, icon, value, unit, trend, trendUp, borderColor }) => {
  return (
    <div className="glass metric-card" style={borderColor ? { borderColor } : {}}>
      <div className="metric-header">
        <span className="metric-title">{title}</span>
        {React.cloneElement(icon, { className: "metric-icon", style: borderColor ? { color: borderColor.replace('0.3', '1') } : {} })}
      </div>
      <div className="metric-value-container">
        <span className="metric-value" style={borderColor ? { color: borderColor.replace('rgba', 'rgb').replace(', 0.3)', ')') } : {}}>{value}</span>
        <span className="metric-unit">{unit}</span>
      </div>
      <span className={`metric-trend ${trendUp ? 'trend-up' : 'trend-down'}`} style={trendUp && !borderColor ? { color: 'var(--primary)' } : {}}>
        {trend}
      </span>
    </div>
  );
};

export default MetricCard;
