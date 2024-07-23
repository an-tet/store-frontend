import { AxiosError } from 'axios';
import { useFormik } from 'formik';
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
import { ArrowForwardIos } from '@mui/icons-material';
import { AuthLayout } from './auth.layout';
import { LoginModel } from '../../../models/auth/login.model';
import { loginValidationSchema } from './login.validation';
import { loginThunk } from '../../../store/slices/auth/auth.thunk';
import { useAppDispatch } from '../../../store';
import { successNotification } from '../../../components/shared/notifications/notification.provider';
import { MessageErrorException } from '../../../exceptions/message-error.exception';
import { ErrorResponse } from '../../../models/auth/error.model';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const initialLoginForm: LoginModel = {
    email: '',
    password: '',
  };

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: initialLoginForm,
      validationSchema: loginValidationSchema,
      onSubmit: (formValues: LoginModel) => {
        dispatch(loginThunk(formValues))
          .then(() => {
            successNotification('Inicio de sesión exitoso');
            navigate('/');
          })
          .catch(({ response }: AxiosError) => {
            const error: ErrorResponse = response?.data as ErrorResponse;
            MessageErrorException(error?.message);
          });
      },
    });

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
              fullWidth
              id='email'
              name='email'
              label='Correo electrónico'
              variant='outlined'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>
          <Grid container sx={{ justifyContent: 'center', mb: 4 }}>
            <Grid item>
              <Button variant='contained' type='submit' name='login-button'>
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: { lg: 'space-between' },
              alignItems: { xs: 'center' },
            }}
            direction={{ xs: 'column', lg: 'row' }}
          >
            <Grid item xs={12} lg={6}>
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
              xs={12}
              lg={6}
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
                <ArrowForwardIos
                  sx={{
                    fontSize: '.8rem',
                    verticalAlign: 'middle',
                  }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
