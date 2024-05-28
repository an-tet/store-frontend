export const resolvePathname = (pathname: string): string => {
  const module: string = pathname.split('/')[1];

  switch (module) {
    case 'product':
      return 'Producto';
    case 'customer':
      return 'Cliente';
    case 'user':
      return 'Usuario';
    case 'supplier':
      return 'Proveedor';
    default:
      return 'Principal';
  }
};
