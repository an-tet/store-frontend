import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage, RecoveryPage } from '../components/pages';

export const routes = createBrowserRouter([
  {
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'recovery', element: <RecoveryPage /> },
    ],
  },
  { path: '/', element: <App /> },
]);
