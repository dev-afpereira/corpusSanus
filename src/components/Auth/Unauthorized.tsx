
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Acesso Não Autorizado</h2>
        <p>Você não tem permissão para acessar esta página.</p>
        <div className="auth-actions">
          <button onClick={() => navigate(-1)}>Voltar</button>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized; 