import { Flip } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const NavbarComponent = ({
  module,
  open,
}: {
  module: string;
  state: boolean;
  open: () => void;
}) => {
  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          aria-label='open drawer'
          onClick={open}
          edge='start'
          sx={{ mr: 2 }}
        >
          <Flip />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          {module}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
