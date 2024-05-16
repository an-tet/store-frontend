import { Navigate, RouteObject } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { UserRoutes } from './UserRoutes';
import { ProductRoutes } from './ProductRoutes';
import { CustomerRoutes } from './CustomerRoutes';
import ProtectedRoutes from './components/protected-routes.component';

export const RootRoutes: RouteObject = {
  path: '',
  element: <ProtectedRoutes />,
  children: [
    HomeRoutes,
    UserRoutes,
    CustomerRoutes,
    ProductRoutes,
    { path: '*', element: <Navigate to='' /> },
  ],
};
