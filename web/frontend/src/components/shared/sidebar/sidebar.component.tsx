import { Drawer } from './sidebar.styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Tooltip } from '@mui/material';
import {
  Home,
  Image,
  Logout,
  Person,
  ShoppingBag,
  SupportAgent,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { logoutThunk } from '../../../store/slices/auth/auth.thunk';

export function SidebarComponent({ state }: { state: boolean }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/auth/login');
  };

  const listItems = [
    { icon: Home, text: 'Principal', href: '/' },
    { icon: SupportAgent, text: 'Usuarios', href: '/user/list' },
    { icon: Person, text: 'Clientes', href: '/customer/list' },
    { icon: ShoppingBag, text: 'Productos', href: '/product/list' },
  ];

  return (
    <Drawer data-testid='sidebar' variant='permanent' open={state}>
      <List sx={{ height: '100%' }}>
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
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              display: 'block',
              color: 'primary.contrastText',
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
        <ListItem
          onClick={handleLogout}
          key={-1}
          disablePadding
          sx={{
            color: 'primary.contrastText',
            position: 'absolute',
            bottom: 10,
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
                <Logout
                  data-testid='logout-button'
                  sx={{
                    fontSize: state ? '4em' : '2rem',
                    transition: 'font-size 0.3s',
                  }}
                />
              }
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
