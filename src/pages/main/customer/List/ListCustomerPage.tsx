import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { RootLayout } from '../../RootLayout';

export const ListCustomerPage = () => {
  return (
    <RootLayout>
      <Grid
        container
        sx={{
          display: 'flex',
          mt: 5,
        }}
      >
        <Grid item>
          <Typography variant='h3'>List customer Page</Typography>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
