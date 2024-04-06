import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { RootRoutes } from './RootRoutes';

export const Routes = createBrowserRouter([AuthRoutes, RootRoutes]);
