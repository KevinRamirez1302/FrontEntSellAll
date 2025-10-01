import { UseAuth } from '../context/AuthContext.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import { CircularProgress } from '@chakra-ui/react';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = UseAuth();
  console.log(loading, isAuthenticated);
  if (loading)
    return (
      <div className="flex items-center justify-center h-[100vhl]">
        <CircularProgress isIndeterminate color="purple.300" />
      </div>
    );
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
