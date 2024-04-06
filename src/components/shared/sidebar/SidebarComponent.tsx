import { Drawer } from './SidebarStyles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';
import {
  Home,
  Image,
  Person,
  ShoppingBag,
  SupportAgent,
} from '@mui/icons-material';

export const SidebarComponent = ({ state }: { state: boolean }) => {
  return (
    <Drawer variant='permanent' open={state}>
      <List>
        <Tooltip title='Logo' placement='top'>
          <ListItem
            key={-1}
            disablePadding
            sx={{
              display: 'block',
              color: 'primary.contrastText',
              mb: 2,
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  mr: state ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'primary.contrastText',
                }}
              >
                {
                  <Image
                    sx={{
                      fontSize: state ? '6em' : '2rem',
                      transition: 'font-size 0.3s',
                    }}
                  />
                }
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Tooltip>
        {[
          { icon: Home, text: 'Principal', href: '/' },
          { icon: SupportAgent, text: 'Usuarios', href: '/user/list' },
          { icon: Person, text: 'Clientes', href: '/customer/list' },
          { icon: ShoppingBag, text: 'Productos', href: '/product/list' },
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
              href={item.href}
              sx={{
                minHeight: 48,
                justifyContent: state ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: state ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'primary.contrastText',
                }}
              >
                {<item.icon />}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: state ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
