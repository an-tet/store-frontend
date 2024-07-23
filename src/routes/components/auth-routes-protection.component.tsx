import { Navigate } from 'react-router-dom';
import { RootPage } from '../../pages';
import { useAppDispatch } from '../../store';
import { login, logout } from '../../store/slices/auth/auth.slice';
import { AuthModel } from '../../models/auth/auth.model';
import { MessageErrorException } from '../../exceptions/message-error.exception';

const AuthRoutesProtection = () => {
  const dispatch = useAppDispatch();
  const authStored = localStorage.getItem('user');
  if (authStored !== null) {
    const auth: AuthModel = JSON.parse(authStored);
    dispatch(login(auth));

    if (auth.token) return <RootPage />;
    else return CloseSession();
  }
  return CloseSession();
};

const CloseSession = () => {
  const dispatch = useAppDispatch();
  dispatch(logout());
  MessageErrorException('Sesión cerrada, inicie sesión nuevamente');
  return <Navigate to='/auth/login' replace />;
};
export default AuthRoutesProtection;
