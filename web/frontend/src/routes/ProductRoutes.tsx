import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import {
  CreateProductPage,
  ListProductPage,
  UpdateProductPage,
} from '../pages';
import RoleRoutesProtection from './components/role-routes-protection.component';
import { roleEnum } from '../enum';

const allowedRoles = [roleEnum.admin, roleEnum.seller];
export const ProductRoutes: RouteObject = {
  path: 'product',
  element: <RoleRoutesProtection roles={allowedRoles} component={<Outlet />} />,
  children: [
    { path: '', element: <Navigate to='list' /> },
    { index: true, path: 'list', element: <ListProductPage /> },
    { path: 'create', element: <CreateProductPage /> },
    { path: 'edit/:id', element: <UpdateProductPage /> },
  ],
};
