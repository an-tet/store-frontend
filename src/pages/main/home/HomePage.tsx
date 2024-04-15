import { Grid } from '@mui/material';

import { Image } from '@mui/icons-material';
import { RootLayout } from '../RootLayout';

export const HomePage = () => {
  return (
    <RootLayout>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Grid item>
          <Image
            sx={{
              fontSize: '8rem',
              color: 'primary.main',
            }}
          />
        </Grid>
      </Grid>
    </RootLayout>
  );
};
