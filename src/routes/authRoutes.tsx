import { Navigate, RouteObject } from 'react-router-dom';
import { LoginPage, RecoveryPage } from '../components/pages';

export const authRoutes: RouteObject = {
  path: 'auth',
  children: [
    { path: '', element: <Navigate to='login' /> },
    { index: true, path: 'login', element: <LoginPage /> },
    { path: 'recovery', element: <RecoveryPage /> },
  ],
};
