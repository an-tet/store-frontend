import { Outlet, RouteObject } from 'react-router-dom';
import { HomePage } from '../pages';

export const homeRoutes: RouteObject = {
  path: '',
  element: <Outlet />,
  children: [{ index: true, element: <HomePage /> }],
};
