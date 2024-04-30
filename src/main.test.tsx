import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AuthRoutes } from './routes/AuthRoutes';
import { RootRoutes } from './routes/RootRoutes';
describe('App tests', () => {
  beforeEach(() => {
    const router = createMemoryRouter([AuthRoutes, RootRoutes], {
      initialEntries: ['/auth/login'],
    });
    render(<RouterProvider router={router} />);
  });

  it('should render the title', () => {
    expect(screen.getByText('Inicio de sesión')).toBeInTheDocument();
  });
});
