import { render } from '@testing-library/react';
import { SidebarComponent } from '../../../../src/components/shared/sidebar/sidebar.component';

describe('NavbarComponent', () => {
  test('should render sidebar component', () => {
    const { getByTestId } = render(<SidebarComponent state={false} />);
    expect(getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should render sidebar component expanded', () => {
    const { getByTestId } = render(<SidebarComponent state={false} />);
    expect(getByTestId('sidebar')).toBeVisible();
  });

  test('should hide sidebar component', () => {
    const { getByTestId } = render(<SidebarComponent state={true} />);
    expect(getByTestId('sidebar')).not.toBeVisible();
  });
});
