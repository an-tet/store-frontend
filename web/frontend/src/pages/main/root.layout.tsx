import { useState } from 'react';

import Box from '@mui/material/Box';

import { NavbarComponent, SidebarComponent } from '../../components';
import { DrawerHeader } from '../../components/shared/sidebar/sidebar.styles';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <NavbarComponent setOpen={setOpen} state={open} />
      <SidebarComponent state={open} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          overflow: 'auto',
          transition: 'margin-left 0.3s',
          marginLeft: open ? 0 : 10,
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
