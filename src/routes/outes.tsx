import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './uthRoutes';
import { RootRoutes } from './ootRoutes';

export const Routes = createBrowserRouter([AuthRoutes, RootRoutes]);
