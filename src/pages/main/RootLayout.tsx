import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, Person, ShoppingBag, SupportAgent } from '@mui/icons-material';
import { blueTheme } from '../../theme/blueTheme';

import './root.css';
import { drawerWidth } from '../../components/shared/constants';
import { useState } from 'react';
import { NavbarComponent } from '../../components';

const openedMixin = (theme: Theme = blueTheme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.getContrastText(theme.palette.primary.light),
  height: `calc(100% - ${theme.spacing(4)})`,
  borderRadius: '24px 24px 24px 24px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme = blueTheme): CSSObject => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.getContrastText(theme.palette.primary.light),
  height: `calc(100% - ${theme.spacing(3)})`,
  borderRadius: '24px 24px 24px 24px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme = blueTheme, open }) => ({
  color: theme.palette.getContrastText(theme.palette.warning.light),
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavbarComponent setOpen={setOpen} state={open} />
      <Drawer variant='permanent' open={open}>
        <List>
          {[
            { text: 'Principal', icon: Home },
            { text: 'Usuarios', icon: SupportAgent },
            { text: 'Clientes', icon: Person },
            { text: 'Productos', icon: ShoppingBag },
          ].map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: 'block',
                color: 'primary.contrastText',
                // '&:focus': {
                //   backgroundColor: 'primary.main',
                // },
                // '&:hover': {
                //   backgroundColor: 'primary.main',
                // },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                  }}
                >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
