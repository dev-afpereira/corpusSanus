
import { useAuth } from '../../hooks/useAuth';
import Loading from '../../components/Loading/Loading';

const PatientDashboard = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <div className="patient-dashboard">
      <h2>Meu Acompanhamento</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Próxima Consulta</h3>
          <p>Não agendada</p>
        </div>
        <div className="stat-card">
          <h3>Progresso</h3>
          <p>0%</p>
        </div>
        <div className="stat-card">
          <h3>Tarefas Pendentes</h3>
          <p>0</p>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Histórico Recente</h3>
        <p>Nenhuma atividade recente</p>
      </div>
    </div>
  );
};

export default PatientDashboard; 