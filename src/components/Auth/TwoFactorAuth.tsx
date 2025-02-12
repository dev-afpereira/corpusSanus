import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { auth } from '../../services/firebase';
import { 
  PhoneAuthProvider, 
  PhoneMultiFactorGenerator, 
  multiFactor, 
  RecaptchaVerifier 
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import Loading from '../Loading/Loading';

const TwoFactorAuth = () => {
  const { user, loading } = useAuth();
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [isEnabling, setIsEnabling] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
    }
    return () => {
      window.recaptchaVerifier?.clear();
    };
  }, []);

  const handleEnable2FA = async () => {
    if (!user?.phoneNumber) {
      setError('Número de telefone não configurado');
      return;
    }

    try {
      setIsEnabling(true);
      setError('');
      
      const phoneProvider = new PhoneAuthProvider(auth);
      const verId = await phoneProvider.verifyPhoneNumber(
        user.phoneNumber,
        window.recaptchaVerifier
      );
      
      setVerificationId(verId);
    } catch (err) {
      setError('Erro ao enviar código de verificação');
      console.error(err);
    } finally {
      setIsEnabling(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationId || !verificationCode) return;

    try {
      setIsEnabling(true);
      setError('');

      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(credential);
      
      await multiFactor(auth.currentUser!).enroll(multiFactorAssertion, 'Phone Auth');
      await updateDoc(doc(db, 'users', user!.uid), {
        twoFactorEnabled: true
      });

      setVerificationCode('');
      setVerificationId('');
    } catch (err) {
      setError('Código inválido ou expirado');
      console.error(err);
    } finally {
      setIsEnabling(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="two-factor-auth">
      <div id="recaptcha-container"></div>
      <h3>Autenticação em Duas Etapas</h3>
      
      {user?.twoFactorEnabled ? (
        <div className="auth-status enabled">
          <p>✓ Proteção ativada</p>
        </div>
      ) : (
        <div className="auth-status disabled">
          <p>Proteção desativada</p>
          <button 
            onClick={handleEnable2FA} 
            disabled={isEnabling || !user?.phoneNumber}
          >
            {isEnabling ? 'Enviando...' : 'Ativar 2FA'}
          </button>

          {verificationId && (
            <div className="verification-input">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Código de verificação"
                maxLength={6}
              />
              <button 
                onClick={handleVerifyCode}
                disabled={isEnabling || !verificationCode}
              >
                Verificar
              </button>
            </div>
          )}
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TwoFactorAuth; 