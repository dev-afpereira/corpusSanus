import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

type PrivateRouteProps = {
  allowedRoles: Array<'patient' | 'doctor' | 'admin'>;
  requireVerified?: boolean;
};

const PrivateRoute = ({ allowedRoles, requireVerified = true }: PrivateRouteProps) => {
  const { user, role, loading, isVerified } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requireVerified && !isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute; 