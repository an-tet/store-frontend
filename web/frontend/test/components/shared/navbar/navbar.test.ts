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
