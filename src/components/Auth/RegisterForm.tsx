import React, { useState } from 'react';

import '../../styles/AuthForms.css';
import  useAuth  from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    try {
      console.log('Registro com:', name, email, password);
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      onSuccess();
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro com Google:', error);
    }
  };

  return (
    <div className="modal-content">
      <button className="modal-close" onClick={onSuccess}>×</button>
      <h2>Registro</h2>
      
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirmar Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      
      <button className="login-button" onClick={handleSubmit}>
        Registrar
      </button>

      <div className="separator">ou</div>

      <button 
        type="button"
        className="google-login"
        onClick={handleGoogleRegister}
      >
        <img 
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
          alt="Google" 
          width="18" 
        />
        Continuar com Google
      </button>
    </div>
  );
};

export default RegisterForm; 