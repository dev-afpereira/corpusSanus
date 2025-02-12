import { createContext } from 'react';
import { AuthContextType } from './AuthContext.types';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  isVerified: false,
  role: null,
  signIn: async () => {},
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},
  resetPassword: async () => {},
  updateProfile: async () => {},
  signInWithGoogle: async () => {},
  signInWithFacebook: async () => {},
  signInWithGithub: async () => {},
  clearError: () => {}
}); 