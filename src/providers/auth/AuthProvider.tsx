// src/providers/AuthProvider.tsx
import React, { useState } from 'react';
import AuthContext from './AuthContext';
export interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  function login(username: string) {
    setUser(username);
  }

  function logout() {
    setUser(null);
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
