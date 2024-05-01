import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

import { NavBarPropsInterface } from '../interfaces/navbar-props.interface';

export const NavbarStyles = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<NavBarPropsInterface>(({ theme, open }) => ({
  boxShadow: 'none',
  paddingLeft: theme.spacing(9),
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create(['width', 'padding'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    paddingLeft: 0,
    transition: theme.transitions.create(['width', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
