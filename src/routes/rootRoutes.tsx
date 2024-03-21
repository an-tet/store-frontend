import { Navigate, RouteObject } from 'react-router-dom';
import { RootPage } from '../components/pages';
import { productRoutes } from './productRoutes';
import { homeRoutes } from './homeRoutes';

export const rootRoutes: RouteObject = {
  path: '',
  element: <RootPage />,
  children: [
    homeRoutes,
    productRoutes,
    { path: '*', element: <Navigate to='' /> },
  ],
};
