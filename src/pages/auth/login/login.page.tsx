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
import { AuthLayout } from './auth.layout';
import { useFormik } from 'formik';
import { loginValidationSchema } from './login.validation';
import { LoginModel } from '../../../models/login.model';

export const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialLoginForm: LoginModel = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialLoginForm,
    validationSchema: loginValidationSchema,
    onSubmit: (formValues) => {
      // TODO: Implement login logic with redux store
      alert(JSON.stringify(formValues, null, 2));
      navigate('/');
    },
  });

  return (
    <AuthLayout title='Inicio de sesión'>
      <Grid component='form' onSubmit={formik.submitForm}>
        <Grid
          container
          direction='column'
          sx={{ justifyContent: 'center', direction: 'column' }}
        >
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id='email'
              name='email'
              label='Correo electrónico'
              variant='outlined'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type='password'
              id='password'
              name='password'
              label='Contraseña'
              variant='outlined'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid container sx={{ justifyContent: 'center', mb: 4 }}>
            <Grid item>
              <Button variant='contained' type='submit' name='login-button'>
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
