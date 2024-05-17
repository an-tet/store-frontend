import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { CreateUserPage, ListUserPage, UpdateProductPage } from '../pages';

export const UserRoutes: RouteObject = {
  path: 'user',
  element: <Outlet />,
  children: [
    { path: '', element: <Navigate to='list' /> },
    { index: true, path: 'list', element: <ListUserPage /> },
    { path: 'create', element: <CreateUserPage /> },
    { path: 'update/:id', element: <UpdateProductPage /> },
  ],
};
