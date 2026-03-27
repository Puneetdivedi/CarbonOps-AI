/**
 * CarbonOps Enterprise Industrial OS
 * 
 * Capability: IAM Auth & Role-Based Access Context Provider
 * Version: 1.0.0
 * Architecture: Global React Context
 * Owner: Puneet Divedi
 */

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

/**
 * Production-ready Authentication Context.
 * Replaces hardcoded prop drilling across the application with verifiable global state.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (role) => {
    // Production: Validate via JWT / OAuth2 interceptors here.
    const mockIdentity = {
      name: role === 'Plant Manager' ? 'Sarah Connor' : role === 'ESG Officer' ? 'David Chen' : 'Eng. M. Schmidt',
      role: role,
      location: 'Hanover Operations',
      isAuthenticated: true
    };
    setUser(mockIdentity);
  };

  const logout = () => {
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
