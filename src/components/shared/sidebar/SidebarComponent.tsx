import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, Person, ShoppingBag, SupportAgent } from '@mui/icons-material';
import { Drawer } from './SidebarStyles';

export const SidebarComponent = ({ state }: { state: boolean }) => {
  return (
    <Drawer variant='permanent' open={state}>
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
