import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

import { AppBarPropsInterface } from '../interfaces/AppBarPropsInterface';
import { drawerWidth } from '../constants';

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarPropsInterface>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${theme.spacing(9)})`,
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    ml: drawerWidth,
    width: `calc(100% - ${drawerWidth}px - 10px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
