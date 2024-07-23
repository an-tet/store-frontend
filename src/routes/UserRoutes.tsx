import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { CreateUserPage, ListUserPage, UpdateUserPage } from '../pages';
import RoleRoutesProtection from './components/role-routes-protection.component';
import { roleEnum } from '../enum';

const allowedRoles = [roleEnum.admin];
export const UserRoutes: RouteObject = {
  path: 'user',
  element: <RoleRoutesProtection roles={allowedRoles} component={<Outlet />} />,
  children: [
    { path: '', element: <Navigate to='list' /> },
    { index: true, path: 'list', element: <ListUserPage /> },
    { path: 'create', element: <CreateUserPage /> },
    { path: 'edit/:id', element: <UpdateUserPage /> },
  ],
};
