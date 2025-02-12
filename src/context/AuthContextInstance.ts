import { createContext } from 'react';
import { AuthContextType } from './AuthContext.types';

export const AuthContext = createContext<AuthContextType | null>(null); 