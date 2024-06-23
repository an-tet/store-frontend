import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { NavigationComponentMock } from '../../../mocks/navigation.mock';

describe('should test navbar component on core behavior', () => {
  test('should render navbar component', () => {
    render(<NavigationComponentMock />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('should render navbar and expanded sidebar component', () => {
    render(<NavigationComponentMock />);
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
});
