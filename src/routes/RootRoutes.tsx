import { Navigate, RouteObject } from 'react-router-dom';
import { RootPage } from '../pages';
import { HomeRoutes } from './HomeRoutes';
import { ProductRoutes } from './roductRoutes';
import { UserRoutes } from './UserRoutes';

export const RootRoutes: RouteObject = {
  path: '',
  element: <RootPage />,
  children: [
    HomeRoutes,
    UserRoutes,
    ProductRoutes,
    { path: '*', element: <Navigate to='' /> },
  ],
};
