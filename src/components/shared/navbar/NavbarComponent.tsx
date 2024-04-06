import { useLocation } from 'react-router-dom';

import { Flip } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';

import { AppBar } from './NavbarStyles';

export const NavbarComponent = ({
  setOpen,
  state,
}: {
  state: boolean;
  setOpen: (state: boolean) => void;
}) => {
  const { pathname } = useLocation();

  const resolvePathname = (pathname: string): string => {
    switch (pathname) {
      case '/product' ||
        '/product/create' ||
        '/product/edit' ||
        '/product/delete':
        return 'Producto';
      default:
        return 'Principal';
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!state);
  };

  return (
    <AppBar position='fixed' open={state} color={'transparent'}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerToggle}
          edge='start'
          sx={{
            mr: 5,
          }}
        >
          <Flip sx={{ color: 'primary.light' }} />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ color: 'primary.light' }}
        >
          {resolvePathname(pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
