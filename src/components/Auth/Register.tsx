import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invitationCode, setInvitationCode] = useState('');
  const { user } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (user?.role === 'doctor') {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          role: 'patient',
          doctorId: user.uid,
          progress: 0,
          createdAt: new Date()
        });
      }
      
      await sendEmailVerification(userCredential.user);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{user?.role === 'doctor' ? 'Cadastrar Paciente' : 'Registro'}</h2>
        {!user && (
          <div className="form-group">
            <label>Código de convite</label>
            <input
              type="text"
              value={invitationCode}
              onChange={(e) => setInvitationCode(e.target.value)}
              placeholder="Código de convite"
            />
          </div>
        )}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </div>

          <button type="submit" className="auth-button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register; 