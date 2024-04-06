import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import {
  CreateProductPage,
  ListProductPage,
  UpdateProductPage,
} from '../pages';

export const ProductRoutes: RouteObject = {
  path: 'product',
  element: <Outlet />,
  children: [
    { path: '', element: <Navigate to='list' /> },
    { index: true, path: 'list', element: <ListProductPage /> },
    { path: 'create', element: <CreateProductPage /> },
    { path: 'update/:id', element: <UpdateProductPage /> },
  ],
};
