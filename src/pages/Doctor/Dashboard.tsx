import { useAuth } from '../../hooks/useAuth';
import Loading from '../../components/Loading/Loading';

const DoctorDashboard = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <div className="doctor-dashboard">
      <h2>Painel do Médico</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Pacientes Ativos</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Consultas Hoje</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Pendências</h3>
          <p className="stat-number">0</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Atividade Recente</h3>
        <p>Nenhuma atividade recente</p>
      </div>
    </div>
  );
};

export default DoctorDashboard; 