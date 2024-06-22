import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { NavigationComponent } from '../../../mocks/navigation.mock';

describe('should test sidebar component on core behavior', () => {
  test('should render sidebar component', () => {
    render(<NavigationComponent />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should render sidebar component expanded', () => {
    render(<NavigationComponent />);
    const sidebar = screen.getByTestId('sidebar');
    const buttonMenu = screen.getByTestId('menu-button');

    expect(sidebar).toHaveStyle({
      width: 0,
    });

    act(() => fireEvent.click(buttonMenu));

    expect(sidebar).toHaveStyle({
      width: 'calc(56px + 1px)',
    });
  });

  test('should render sidebar component with menu items', () => {
    render(<NavigationComponent initialState={false} />);
    const menuItems = screen.getAllByRole('link');

    expect(menuItems).toHaveLength(4);
    expect(menuItems[0]).toHaveTextContent('Principal');
    expect(menuItems[1]).toHaveTextContent('Usuarios');
    expect(menuItems[2]).toHaveTextContent('Clientes');
    expect(menuItems[3]).toHaveTextContent('Productos');
  });

  test('should logout and redirect to login route', async () => {
    render(<NavigationComponent initialState={false} />);
    const logoutButton = screen.getByTestId('logout-button');

    act(() => fireEvent.click(logoutButton));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/auth/login');
    });
  });
});
