import { Outlet, createBrowserRouter } from 'react-router-dom';
import { LoginPage, RecoveryPage } from '../components/pages';
import { RootPage } from '../components/pages/dashboard/RootPage';
import { ProductPage } from '../components/pages/dashboard/product/ProductPage';
import { HomePage } from '../components/pages/dashboard/home/HomePage';

export const routes = createBrowserRouter([
  {
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'recovery', element: <RecoveryPage /> },
    ],
  },
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: 'home',
        element: <Outlet />,
        children: [{ index: true, element: <HomePage /> }],
      },
      { path: 'product', element: <ProductPage /> },
    ],
  },
]);
