import  { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Loading from '../Loading/Loading';
import { Navigate } from 'react-router-dom';

const EmailVerification = () => {
  const { user, loading } = useAuth();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleResendEmail = async () => {
    try {
      if (!auth.currentUser) return;
      
      await sendEmailVerification(auth.currentUser);
      setMessage('Email de verificação reenviado! Verifique sua caixa de entrada.');
      setError('');
      
      // Disable resend button for 60 seconds
      setResendDisabled(true);
      setTimeout(() => setResendDisabled(false), 60000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setMessage('');
      }
    }
  };

  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Verificação de Email</h2>
        <p>
          Um email de verificação foi enviado para {user.email}.
          Por favor, verifique sua caixa de entrada e spam.
        </p>
        
        <button 
          onClick={handleResendEmail} 
          disabled={resendDisabled}
        >
          {resendDisabled ? 'Aguarde 60s...' : 'Reenviar Email'}
        </button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="auth-links">
          <a href="/login">Voltar para o Login</a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification; 