import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword, loading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    await resetPassword(email);
    if (!error) {
      setMessage('Email de recuperação enviado! Verifique sua caixa de entrada.');
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit" disabled={loading}>
            Enviar Email de Recuperação
          </button>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </form>

        <div className="auth-links">
          <a href="/login">Voltar para o Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 