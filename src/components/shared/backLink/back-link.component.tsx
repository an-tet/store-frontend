import { ArrowBackIos } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const BackLink = ({ to }: { to: string }) => (
  <Grid item xs={12} sx={{ mb: 5, ml: { md: '10vw' } }}>
    <Link
      component={RouterLink}
      to={to}
      underline='none'
      color={'primary.light'}
    >
      <ArrowBackIos sx={{ fontSize: '.8rem' }} /> Regresar
    </Link>
  </Grid>
);
