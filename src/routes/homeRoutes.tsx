import { Outlet } from 'react-router-dom';
import { HomePage } from '../components/pages';

export const homeRoutes: RouteObject = {
  path: '',
  element: <Outlet />,
  children: [{ index: true, element: <HomePage /> }],
};
