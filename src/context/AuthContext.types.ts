import { createContext } from 'react';

interface ProfileData {
  name?: string;
  email?: string;
  phone?: string;
  role?: 'admin' | 'doctor' | 'patient';
}

export interface AuthContextType {
  user: {
    email: string;
    role: 'admin' | 'doctor' | 'patient';
  } | null;
  loading: boolean;
  error: string | null;
  isVerified: boolean;
  role: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: ProfileData) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null); 