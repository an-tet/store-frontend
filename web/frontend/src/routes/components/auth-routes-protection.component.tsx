import { Navigate } from 'react-router-dom';
import { RootPage } from '../../pages';
import { useAppDispatch } from '../../store';
import { login, logout } from '../../store/slices/auth/auth.slice';
import { AuthModel } from '../../models/auth/auth.model';

const AuthRoutesProtection = () => {
  const dispatch = useAppDispatch();
  const authStored = localStorage.getItem('user');
  const auth: AuthModel = JSON.parse(authStored || '{}');

  dispatch(login(auth));

  if (auth.token) return <RootPage />;
  else {
    dispatch(logout());
    return <Navigate to='/auth/login' replace />;
  }
};

export default AuthRoutesProtection;
