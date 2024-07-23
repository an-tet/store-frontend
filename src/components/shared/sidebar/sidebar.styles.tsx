import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import { blueTheme } from '../../../theme/blueTheme';

import './Sidebar.css';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const hideDrawer = (theme: Theme = blueTheme): CSSObject => ({
  width: 0,
  visibility: 'hidden',
  backgroundColor: 'transparent',
  color: 'transparent',
  height: `calc(100% - ${theme.spacing(3)})`,
  transition: theme.transitions.create(['width', 'border'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  border: 'none',
});

const openDrawer = (theme: Theme = blueTheme): CSSObject => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.getContrastText(theme.palette.primary.light),
  height: `calc(100% - ${theme.spacing(3)})`,
  borderRadius: 24,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create(['width', 'border'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme = blueTheme, open }) => ({
  color: theme.palette.getContrastText(theme.palette.warning.light),
  visibility: 'visible',
  width: 240,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...hideDrawer(theme),
    '& .MuiDrawer-paper': hideDrawer(theme),
  }),
  ...(!open && {
    ...openDrawer(theme),
    '& .MuiDrawer-paper': openDrawer(theme),
  }),
}));
