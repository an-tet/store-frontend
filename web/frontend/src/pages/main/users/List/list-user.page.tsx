import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { RootLayout } from '../../root.layout';

export const ListUserPage = () => {
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
          <Typography variant='h3'>List User Page</Typography>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
