
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';
import '../../styles/Dashboard.css';

const DashboardLayout = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) return <Loading />;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Bem-vindo, {user?.name}</h1>
          <div className="header-actions">
            <button className="profile-button" onClick={() => navigate('/profile')}>
              Perfil
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout; 