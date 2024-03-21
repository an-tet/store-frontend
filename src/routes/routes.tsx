import { createBrowserRouter } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { rootRoutes } from './rootRoutes';

export const routes = createBrowserRouter([authRoutes, rootRoutes]);
