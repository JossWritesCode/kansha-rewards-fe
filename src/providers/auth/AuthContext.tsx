// src/providers/AuthContext.ts
import { createContext } from 'react';
import type { AuthContextType } from './AuthProvider';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
