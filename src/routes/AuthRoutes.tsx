import { Navigate, RouteObject } from 'react-router-dom';
import { LoginPage, RecoveryPage } from '../pages';

export const AuthRoutes: RouteObject = {
  path: 'auth',
  children: [
    { path: '', element: <Navigate to='login' /> },
    { index: true, path: 'login', element: <LoginPage /> },
    { path: 'recovery', element: <RecoveryPage /> },
  ],
};
