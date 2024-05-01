import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { AuthLayout } from '../login/auth.layout';

export const RecoveryPage = () => {
  return (
    <AuthLayout title='Recuperar credenciales'>
      <form>
        <Grid
          container
          direction='column'
          xs={12}
          sx={{ justifyContent: 'center', direction: 'column' }}
        >
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              id='email'
              label='Correo electrónico'
              variant='outlined'
              fullWidth
            />
          </Grid>

          <Grid container xs={12} sx={{ justifyContent: 'center', mb: 4 }}>
            <Grid item>
              <Button variant='contained'>Recuperar</Button>
            </Grid>
          </Grid>

          <Grid container xs={true}>
            <Grid
              item
              xs={12}
              sx={{
                fontSize: '0.8rem',
              }}
            >
              <Link
                component={RouterLink}
                to='/auth/login'
                underline='none'
                sx={{
                  color: 'primary.light',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ArrowBackIos
                  sx={{
                    fontSize: '1rem',
                  }}
                />
                Volver al inicio de sesión
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
