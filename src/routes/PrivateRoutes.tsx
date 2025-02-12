import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AdminDashboard from '../pages/Admin/Dashboard';
import DoctorDashboard from '../pages/Doctor/Dashboard';
import PatientDashboard from '../pages/Patient/Dashboard';
import UnauthorizedPage from '../pages/UnauthorizedPage';

const PrivateRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      {/* Rotas do Admin */}
      <Route 
        path="/admin/*" 
        element={
          user.role === 'admin' 
            ? <AdminDashboard /> 
            : <Navigate to="/unauthorized" replace />
        } 
      />

      {/* Rotas do Médico */}
      <Route 
        path="/doctor/*" 
        element={
          user.role === 'doctor' 
            ? <DoctorDashboard /> 
            : <Navigate to="/unauthorized" replace />
        } 
      />

      {/* Rotas do Paciente */}
      <Route 
        path="/patient/*" 
        element={
          user.role === 'patient' 
            ? <PatientDashboard /> 
            : <Navigate to="/unauthorized" replace />
        } 
      />

      {/* Página de Não Autorizado */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};

export default PrivateRoutes; 