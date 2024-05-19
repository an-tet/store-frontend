import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import {
  CreateCustomerPage,
  ListCustomerPage,
  EditCustomerPage,
} from '../pages';
import { roleEnum } from '../enum';
import RoleRoutesProtection from './components/role-routes-protection.component';

const allowedRoles = [roleEnum.admin, roleEnum.seller];
export const CustomerRoutes: RouteObject = {
  path: 'customer',
  element: <RoleRoutesProtection roles={allowedRoles} component={<Outlet />} />,
  children: [
    { path: '', element: <Navigate to='list' /> },
    { index: true, path: 'list', element: <ListCustomerPage /> },
    { path: 'create', element: <CreateCustomerPage /> },
    { path: 'edit/:id', element: <EditCustomerPage /> },
  ],
};
