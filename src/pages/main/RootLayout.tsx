import { useState } from 'react';

import Box from '@mui/material/Box';

import { NavbarComponent, SidebarComponent } from '../../components';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavbarComponent setOpen={setOpen} state={open} />
      <SidebarComponent state={open} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
