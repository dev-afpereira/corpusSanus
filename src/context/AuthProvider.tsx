import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

interface User {
  email: string;
  role: 'admin' | 'doctor' | 'patient';
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const ADMIN_USER = {
    email: 'admin@corpussanos.com',
    password: 'admin123',
    role: 'admin' as const
  };

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Simula verificação inicial de autenticação
    setLoading(false);
  }, []);

  // ... implementação dos métodos ...

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        error,
        isVerified,
        role,
        signIn: async () => {},
        signUp: async () => {},
        login: async (email, password) => {
          try {
            if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
              setUser({ email: ADMIN_USER.email, role: ADMIN_USER.role });
              setRole('admin');
              setIsVerified(true);
              setError(null);
              return;
            }
            setError('Credenciais inválidas');
          } catch (err) {
            console.error('Erro ao fazer login:', err);
            setError('Erro ao fazer login');
          }
        },
        logout: async () => {
          setUser(null);
          setRole(null);
          setIsVerified(false);
          setError(null);
        },
        clearError: () => setError(null),
        resetPassword: async () => {},
        updateProfile: async () => {},
        signInWithGoogle: async () => {},
        signInWithFacebook: async () => {},
        signInWithGithub: async () => {}
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 