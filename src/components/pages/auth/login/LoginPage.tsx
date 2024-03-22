import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import './loginPage.css';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.contrastText' }}
    >
      <Grid
        item
        xs={12}
        sx={{ color: 'primary.main', padding: 3, borderRadius: 2 }}
      >
        <Typography
          variant='h3'
          sx={{ mb: 6, textAlign: 'center', color: 'primary.light' }}
        >
          Inicio de sesión
        </Typography>
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

            <Grid item xs={12} sx={{ mb: 2 }}>
              <TextField
                id='password'
                label='Contraseña'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid container xs={12} sx={{ justifyContent: 'center', mb: 4 }}>
              <Grid item>
                <Button variant='contained'>Iniciar sesión</Button>
              </Grid>
            </Grid>

            <Grid container xs={12} sx={{ justifyContent: 'space-between' }}>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox defaultChecked size='small' />}
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
        </form>
      </Grid>
    </Grid>
  );
};
