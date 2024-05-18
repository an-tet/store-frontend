import { useLocation } from 'react-router-dom';

import { Flip } from '@mui/icons-material';
import { IconButton, Toolbar, Typography } from '@mui/material';

import { NavbarStyles } from './navbar.styles';
import { resolvePathname } from '../../../utils/location.util';

export const NavbarComponent = ({
  setOpen,
  state,
}: {
  state: boolean;
  setOpen: (state: boolean) => void;
}) => {
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!state);
  };

  return (
    <NavbarStyles position='fixed' open={state}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          data-testid='menu-button'
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerToggle}
          edge='start'
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
    </NavbarStyles>
  );
};
