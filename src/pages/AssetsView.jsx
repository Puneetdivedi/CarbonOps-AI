/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: SCADA Asset Map - Hierarchical drill-down of industrial machinery (Site > Plant > Line > Machine).
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: GenAI / Low Code Data Pipeline
 * Owner: Puneet Divedi
 */

import React from 'react';
import { Network, Database, Settings, ShieldAlert, CheckCircle, Search, Cpu } from 'lucide-react';
import { siteHierarchy } from '../data/mockData';

const AssetsView = () => {
  const currentPlant = siteHierarchy[0].plants[0];

  return (
    <div className="dashboard-container fade-in" style={{ padding: '1.5rem 2rem', maxWidth: '1600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Industrial Asset Matrix</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real-time topology and telemetry bridging for {siteHierarchy[0].name}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div className="header-search" style={{ width: '250px', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>
            <Search size={14} color="var(--text-muted)" />
            <input type="text" placeholder="Search asset ID..." style={{ fontSize: '0.85rem' }} />
          </div>
          <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}><Network size={16}/> Sync OPC-UA</button>
        </div>
      </div>

      {/* Organizational Topology */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr)', gap: '2rem' }}>
        
        {/* Tree List */}
        <div className="glass" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={16} /> Asset Topology
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem', marginLeft: '0.5rem' }}>
            {siteHierarchy[0].plants.map(plant => (
              <div key={plant.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ width: '12px', height: '1px', background: 'var(--glass-border)', marginLeft: '-1rem' }}></span>
                  {plant.name}
                </div>
                {plant.lines.map(line => (
                  <div key={line.id} style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '1rem', marginLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '12px', height: '1px', background: 'rgba(255,255,255,0.05)', marginLeft: '-1rem' }}></span>
                      {line.name}
                    </div>
                    {line.machines.map(machine => (
                      <div key={machine.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.4rem 0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', cursor: 'pointer' }}>
                        <Cpu size={14} color="var(--brand)" />
                        <span style={{ color: machine.status === 'ERROR' ? 'var(--accent)' : machine.status === 'WARNING' ? 'var(--warning)' : '#fff' }}>{machine.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Asset Details */}
        <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>Gas Turbine Alpha</h2>
                <span className="badge" style={{ background: 'rgba(248, 113, 113, 0.1)', color: 'var(--accent)', border: '1px solid rgba(248, 113, 113, 0.3)', padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}>CRITICAL ANOMALY</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '1rem' }}>
                <span><strong>ID:</strong> m-turbine-1</span>
                <span><strong>Vendor:</strong> GE Industrial</span>
                <span><strong>Type:</strong> Combustion Turbine</span>
              </p>
            </div>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}><Settings2 size={16}/> Edit Metadata</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Risk Target Score</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent)' }}>98 / 100</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Telemetry Nodes</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>14 Active</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px' }}>
               <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Last Maintenance</div>
               <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>14 Days Ago</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px' }}>
               <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Connectivity</div>
               <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--success)' }}>12ms Ping</div>
            </div>
          </div>

          <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
             <ShieldAlert size={48} color="rgba(248, 113, 113, 0.4)" style={{ marginBottom: '1rem' }} />
             <h3 style={{ color: '#fff' }}>Machine Quarantine Active</h3>
             <p style={{ textAlign: 'center', maxWidth: '400px', fontSize: '0.9rem', marginTop: '0.5rem' }}>Live telemetry visualization is suspended while the asset is under critical AI anomaly review. Refer to standard diagnostic dashboard.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssetsView;
