import {
  NavigateFunction,
  Link as RouterLink,
  useNavigate,
} from 'react-router-dom';

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from './AuthLayout';

export const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <AuthLayout title='Inicio de sesión'>
      <Grid component='form' onSubmit={handleSubmit}>
        <Grid
          container
          direction='column'
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

          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              id='password'
              label='Contraseña'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid container sx={{ justifyContent: 'center', mb: 4 }}>
            <Grid item>
              <Button variant='contained' type='submit'>
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>

          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox size='small' />}
                label={
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      whiteSpace: 'nowrap',
                      color: 'primary.light',
                    }}
                  >
                    Recordar este dispositivo
                  </Typography>
                }
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Link
                component={RouterLink}
                to='/auth/recovery'
                underline='none'
                color={'primary.light'}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
