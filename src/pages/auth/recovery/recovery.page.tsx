import {
  NavigateFunction,
  Link as RouterLink,
  useNavigate,
} from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { AuthLayout } from '../login/auth.layout';
import { useFormik } from 'formik';
import { recoveryValidationSchema } from './recovery.validation';
import { RecoveryModel } from '../../../models/auth/recovery.model';

export const RecoveryPage = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialLoginForm: RecoveryModel = {
    email: '',
  };

  const { handleChange, handleBlur, handleSubmit, touched, errors, values } =
    useFormik({
      initialValues: initialLoginForm,
      validationSchema: recoveryValidationSchema,
      onSubmit: (formValues) => {
        alert(JSON.stringify(formValues, null, 2));
        navigate('/');
      },
    });

  return (
    <AuthLayout title='Recuperar credenciales'>
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

          <Grid container sx={{ justifyContent: 'center', mb: 4 }}>
            <Grid item>
              <Button variant='contained' type='submit'>
                Recuperar
              </Button>
            </Grid>
          </Grid>

          <Grid container>
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
      </Grid>
    </AuthLayout>
  );
};
