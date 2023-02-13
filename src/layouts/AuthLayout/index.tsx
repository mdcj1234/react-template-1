import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { LayoutContainer } from './styles';

export function AuthLayout() {
  const { user } = useAuth();

  return user ? (
    <>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  ) : (
    <Navigate to={'/login'} replace />
  );
}
