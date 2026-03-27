/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: IAM Authentication Interface
 * Version: 1.0.0
 * Architecture: Auth Guard Node
 * Owner: Puneet Divedi
 */
import React, { useState } from 'react';
import { Target, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [role, setRole] = useState('Plant Manager');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Native invocation of Context instead of Prop drilling

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(role); // Connects to the Global Context Layer
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)' }}>
      <div className="glass-panel" style={{ width: '400px', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <div style={{ background: 'var(--brand)', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)' }}>
            <Target size={32} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.8rem', margin: 0, color: '#fff' }}>CarbonOps AI</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Universal Industrial OS</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>SSO Identity Provider</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '8px', fontSize: '0.95rem', cursor: 'pointer', appearance: 'none' }}
              >
                <option value="Plant Manager">Plant Manager (Full Access)</option>
                <option value="Maintenance Engineer">Maintenance Engineer</option>
                <option value="ESG Officer">ESG Officer (Read-Only)</option>
                <option value="Admin">Global System Admin</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Security Token</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="password" 
                value="••••••••••••••••" 
                readOnly
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', borderRadius: '8px', fontSize: '0.95rem' }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1rem' }} disabled={loading}>
            {loading ? 'Authenticating with IAM...' : 'Authenticate & Connect'}
          </button>
        </form>

        <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Secured by RSA Endpoint Security
        </div>
      </div>
    </div>
  );
};

export default Login;
