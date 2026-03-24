import React from 'react';

const IncidentsTable = ({ incidents }) => {
  return (
    <div className="glass table-card">
      <div className="table-header">
        <h3>Recent Incidents & Actions</h3>
        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>View All</button>
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
              <td style={{ fontWeight: 600 }}>{inc.id}</td>
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
  );
};

export default IncidentsTable;
