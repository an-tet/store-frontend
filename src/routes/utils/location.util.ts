export const resolvePathname = (pathname: string): string => {
  switch (pathname) {
    case '/product/list' ||
      '/product/create' ||
      '/product/edit' ||
      '/product/delete':
      return 'Producto';
    default:
      return 'Principal';
  }
};
