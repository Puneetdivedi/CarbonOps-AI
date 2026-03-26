import React, { useState, useEffect } from 'react';
import { Network, Database, BrainCircuit, Activity, Hammer, ArrowRight, Server, Terminal, Share2, Layers } from 'lucide-react';

const AiStudio = () => {
  const [activeNode, setActiveNode] = useState(1);

  useEffect(() => {
    // Simulate a LangGraph orchestration pulse moving through the nodes constantly
    const interval = setInterval(() => {
      setActiveNode(prev => (prev >= 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (nodeId) => {
    if (activeNode === nodeId) return 'var(--brand)';
    if (activeNode > nodeId) return 'var(--success)';
    return 'var(--glass-border)';
  };

  const getStatusText = (nodeId) => {
    if (activeNode === nodeId) return 'PROCESSING...';
    if (activeNode > nodeId) return 'COMPLETE';
    return 'STANDBY';
  };

  return (
    <div className="dashboard-container fade-in" style={{ padding: '1.5rem 2rem', maxWidth: '1600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--brand)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BrainCircuit size={28} /> Multi-Agent AI Studio
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Live LangGraph Orchestration & Embedded Pipeline Visualization</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
             <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Pinecone Vector DB</span>
             <span style={{ color: '#fff', fontWeight: 'bold' }}>Connected: 14ms ping</span>
          </div>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}><Settings size={16}/> Settings</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr)', gap: '2rem' }}>
        
        {/* LangGraph Visualization Map */}
        <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Agent Pipeline Trace</h3>
             <span className="badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--brand)' }}>LangChain Framework</span>
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 1rem', position: 'relative' }}>
             
             {/* Invisible connection line behind nodes */}
             <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', background: 'var(--glass-border)', zIndex: 0, transform: 'translateY(-50%)' }}></div>

             {/* Node 1: Ingestion */}
             <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '20%' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: `2px solid ${getStatusColor(1)}`,
                  boxShadow: activeNode === 1 ? '0 0 20px rgba(99,102,241,0.5)' : 'none', transition: 'all 0.5s ease'
                }}>
                   <Database size={24} color={getStatusColor(1)} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Ingestion AI</div>
                  <div style={{ fontSize: '0.7rem', color: getStatusColor(1), marginTop: '0.25rem' }}>{getStatusText(1)}</div>
                </div>
             </div>

             {/* Node 2: Anomaly Engine */}
             <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '20%' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: `2px solid ${getStatusColor(2)}`,
                  boxShadow: activeNode === 2 ? '0 0 20px rgba(99,102,241,0.5)' : 'none', transition: 'all 0.5s ease'
                }}>
                   <Activity size={24} color={getStatusColor(2)} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Anomaly Engine</div>
                  <div style={{ fontSize: '0.7rem', color: getStatusColor(2), marginTop: '0.25rem' }}>{getStatusText(2)}</div>
                </div>
             </div>

             {/* Node 3: RAG Diagnosis */}
             <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '20%' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: `2px solid ${getStatusColor(3)}`,
                  boxShadow: activeNode === 3 ? '0 0 20px rgba(99,102,241,0.5)' : 'none', transition: 'all 0.5s ease'
                }}>
                   <Share2 size={24} color={getStatusColor(3)} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>RAG Diagnostics</div>
                  <div style={{ fontSize: '0.7rem', color: getStatusColor(3), marginTop: '0.25rem' }}>{getStatusText(3)}</div>
                </div>
             </div>

             {/* Node 4: Action Planner */}
             <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '20%' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: `2px solid ${getStatusColor(4)}`,
                  boxShadow: activeNode === 4 ? '0 0 20px rgba(99,102,241,0.5)' : 'none', transition: 'all 0.5s ease'
                }}>
                   <Hammer size={24} color={getStatusColor(4)} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Action Planner</div>
                  <div style={{ fontSize: '0.7rem', color: getStatusColor(4), marginTop: '0.25rem' }}>{getStatusText(4)}</div>
                </div>
             </div>

          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '2rem' }}>
             <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Terminal size={14} /> LIVE LLM EXECUTION TRACE
             </div>
             <pre style={{ fontSize: '0.85rem', color: 'var(--success)', margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{activeNode === 1 && "> [Data] Fetching OPC-UA blocks from Modbus registers...\n> Interpolating missing temporal gaps...\n> Normalization complete."}
{activeNode === 2 && "> [LLM] Executing sliding window threshold check against baseline tensor...\n> WARNING: Spike detected in feature matrix (id: m-turbine-1).\n> Forwarding telemetry payload to RAG node."}
{activeNode === 3 && "> [RAG] Generating vector embedding for event signature...\n> Querying Pinecone...\n> Retrieved 4 relevant historical context documents (Cosine Sim > 0.88).\n> Extracting root cause analysis."}
{activeNode === 4 && "> [Action] Synthesizing human-readable explanation template.\n> Drafting SAP generic payload XML.\n> Submitting to user interface for approval execution."}
             </pre>
          </div>
        </div>

        {/* Model Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Server size={16} /> Compute Metrics
              </h3>
              
              <div>
                 <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>LLM Tokens Processed (24h)</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>1.4M <span style={{fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--success)'}}>Within Rate Limit</span></div>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '0.5rem 0' }} />
              <div>
                 <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Total Cost Estimate</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>$4.20 <span style={{fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-muted)'}}>Using Auto-Tier</span></div>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '0.5rem 0' }} />
              <div>
                 <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>RAG Latency (avg)</div>
                 <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)' }}>842ms <span style={{fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-muted)'}}>High Load</span></div>
              </div>
           </div>

           <div className="glass" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Layers size={16} /> Active Models
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Main Synthesizer</span>
                    <span style={{ color: 'var(--brand)' }}>GPT-4 Turbo</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Embedding Engine</span>
                    <span style={{ color: 'var(--brand)' }}>text-embedding-3</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Telemetry Anomaly</span>
                    <span style={{ color: 'var(--brand)' }}>RandomForest v2.4</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AiStudio;
