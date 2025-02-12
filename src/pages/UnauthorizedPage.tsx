import { useNavigate } from 'react-router-dom';
import './UnauthorizedPage.css';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-page">
      <h1>Acesso Não Autorizado</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <button onClick={() => navigate('/')}>
        Voltar para Home
      </button>
    </div>
  );
};

export default UnauthorizedPage; 