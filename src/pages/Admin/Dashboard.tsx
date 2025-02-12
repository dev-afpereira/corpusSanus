import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import DoctorsList from '../../components/Admin/DoctorsList/DoctorsList';
import DoctorForm from '../../components/Admin/DoctorForm/DoctorForm';
import './Dashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('doctors');
  const [showDoctorForm, setShowDoctorForm] = useState(false);
  const { user } = useAuth();

  const handleAddDoctor = () => {
    setShowDoctorForm(true);
  };

  return (
    <div className="admin-dashboard">
      <aside className="dashboard-sidebar">
        <div className="admin-info">
          <h3>Admin Panel</h3>
          <p>{user?.email}</p>
        </div>
        <nav className="dashboard-nav">
          <button 
            className={activeTab === 'doctors' ? 'active' : ''} 
            onClick={() => setActiveTab('doctors')}
          >
            Médicos
          </button>
          <button 
            className={activeTab === 'patients' ? 'active' : ''} 
            onClick={() => setActiveTab('patients')}
          >
            Pacientes
          </button>
          <button 
            className={activeTab === 'settings' ? 'active' : ''} 
            onClick={() => setActiveTab('settings')}
          >
            Configurações
          </button>
        </nav>
      </aside>

      <main className="dashboard-content">
        {activeTab === 'doctors' && (
          <div className="doctors-section">
            {showDoctorForm ? (
              <>
                <button 
                  className="back-button"
                  onClick={() => setShowDoctorForm(false)}
                >
                  Voltar para lista
                </button>
                <DoctorForm onSuccess={() => setShowDoctorForm(false)} />
              </>
            ) : (
              <DoctorsList onAddClick={handleAddDoctor} />
            )}
          </div>
        )}
        {activeTab === 'patients' && (
          <div className="patients-section">
            <h2>Gerenciar Pacientes</h2>
            {/* Implementaremos em seguida */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="settings-section">
            <h2>Configurações</h2>
            {/* Implementaremos em seguida */}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard; 