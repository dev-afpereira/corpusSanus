import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';
import '../../styles/Auth.css';
import { AuthContext as AuthContextInstance } from '../../context/AuthContextInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loading } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="auth-links">
          <a href="/forgot-password">Esqueceu a senha?</a>
          <a href="/register">Criar nova conta</a>
        </div>
      </div>
    </div>
  );
};

export default Login; 