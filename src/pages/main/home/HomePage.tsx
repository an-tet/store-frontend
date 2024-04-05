import { RootLayout } from '../../../layout';
import { Grid, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <RootLayout>
      <Grid container>
        <Grid item>
          <Typography variant='h3' sx={{ marginTop: '2rem' }}>
            Home Page
          </Typography>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
