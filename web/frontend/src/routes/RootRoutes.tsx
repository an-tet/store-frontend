import { Navigate, RouteObject } from 'react-router-dom';
import { RootPage } from '../pages';
import { HomeRoutes } from './HomeRoutes';
import { UserRoutes } from './UserRoutes';
import { ProductRoutes } from './ProductRoutes';
import { CustomerRoutes } from './CustomerRoutes';

export const RootRoutes: RouteObject = {
  path: '',
  element: <RootPage />,
  children: [
    HomeRoutes,
    UserRoutes,
    CustomerRoutes,
    ProductRoutes,
    { path: '*', element: <Navigate to='' /> },
  ],
};
