export const resolvePathname = (pathname: string): string => {
  switch (pathname) {
    case '/product/list' ||
      '/product/create' ||
      '/product/edit' ||
      '/product/delete':
      return 'Producto';
    case '/customer/list' ||
      '/customer/create' ||
      '/customer/edit' ||
      '/customer/delete':
      return 'Cliente';
    default:
      return 'Principal';
  }
};
