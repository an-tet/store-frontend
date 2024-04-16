import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

import { AppBarPropsInterface } from '../interfaces/AppBarPropsInterface';

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarPropsInterface>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `100%`,
  boxShadow: 'none',
  paddingLeft: theme.spacing(9),
  transition: theme.transitions.create(['width', 'padding'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    paddingLeft: 0,
    width: `calc(100% )`,
    transition: theme.transitions.create(['width', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
