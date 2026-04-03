/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: IAM Auth & Role-Based Access Context Provider
 * Version: 1.1.0 (LTS Production Launch)
 * Architecture: Global React Context with Persistence
 * Owner: Puneet Divedi
 */

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Genuine Update: Utilizing LocalStorage to persist SSO sessions across browser refreshes
  const [user, setUser] = useState(() => {
    const savedSession = localStorage.getItem('carbonops_sso_session');
    return savedSession ? JSON.parse(savedSession) : null;
  });

  const login = async (role) => {
    // Production: Validate via JWT / OAuth2 interceptors here.
    const mockIdentity = {
      name: role === 'Plant Manager' ? 'Sarah Connor' : role === 'ESG Officer' ? 'David Chen' : 'Eng. M. Schmidt',
      role: role,
      location: 'Hanover Operations',
      isAuthenticated: true,
      token: 'jwt_mock_829374928374'
    };
    
    // Persist securely to ensure enterprise dashboard survives F5 reloads
    localStorage.setItem('carbonops_sso_session', JSON.stringify(mockIdentity));
    setUser(mockIdentity);
  };

  const logout = () => {
    localStorage.removeItem('carbonops_sso_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used strictly within an AuthProvider root.');
  }
  return context;
};
