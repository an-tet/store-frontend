import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './uthRoutes';
import { RootRoutes } from './RootRoutes';

export const Routes = createBrowserRouter([AuthRoutes, RootRoutes]);
