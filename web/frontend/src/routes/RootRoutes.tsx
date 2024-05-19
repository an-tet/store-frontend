import { Navigate, RouteObject } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { UserRoutes } from './UserRoutes';
import { ProductRoutes } from './ProductRoutes';
import { CustomerRoutes } from './CustomerRoutes';
import AuthRoutesProtection from './components/auth-routes-protection.component';

export const RootRoutes: RouteObject = {
  path: '',
  element: <AuthRoutesProtection />,
  children: [
    HomeRoutes,
    UserRoutes,
    CustomerRoutes,
    ProductRoutes,
    { path: '*', element: <Navigate to='' /> },
  ],
};
