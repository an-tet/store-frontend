import { Navigate } from 'react-router-dom';
import { RootPage } from '../../pages';
import { useAppDispatch } from '../../store';
import { logout } from '../../store/slices/auth/auth.slice';

const ProtectedRoutes = () => {
  const dispatch = useAppDispatch();
  const localStorageToken = localStorage.getItem('token');

  if (localStorageToken) return <RootPage />;
  else {
    dispatch(logout());
    return <Navigate to='/auth/login' replace />;
  }
};

export default ProtectedRoutes;
