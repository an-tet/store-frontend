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

  // test('should toggle sidebar state with click on navbar', async () => {
  //   const setOpen = vi.fn();
  //   const { getByTestId } = render(
  //     <MemoryRouter initialEntries={['']}>
  //       <NavbarComponent setOpen={setOpen} state={false} />
  //       <SidebarComponent state={false} />
  //     </MemoryRouter>
  //   );

  //   expect(getByTestId('sidebar')).toBeVisible();
  //   userEvent.click(getByTestId('menu-button'));
  //   expect(await getByTestId('sidebar')).not.toBeVisible();
  // });
});
