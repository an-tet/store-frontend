import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { formatDate } from '../../../../utils/date.util';
import { RootLayout } from '../../root.layout';
import { userUpdateValidationSchema } from '../validation/user.validation';
import { BackLink } from '../../../../components/shared/backLink/back-link.component';
import { UserModel } from '../../../../models/user/user.model';
import { shirtSizeEnum, roleEnum, documentTypeEnum } from '../../../../enum';
import { containerFormStyles, formStyles } from '../../root.styles';
import { useAppDispatch } from '../../../../store';
import { updateUserThunk } from '../../../../store/slices/user/user.thunk';
import { AxiosError } from 'axios';
import { MessageErrorException } from '../../../../exceptions/message-error.exception';
import { successNotification } from '../../../../components/shared/notifications/notification.provider';

export const EditUserPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state }: { state: UserModel } = useLocation();

  const formik = useFormik({
    initialValues: state,
    validationSchema: userUpdateValidationSchema,
    onSubmit: (userFormValues: UserModel) => {
      const user: UserModel = normalizeModel(userFormValues);

      dispatch(updateUserThunk(user))
        .then(() => {
          successNotification('Usuario creado exitosamente');
          navigate('/user/list');
        })
        .catch((error: AxiosError) => MessageErrorException(error?.message));
    },
  });

  const normalizeModel = (user: UserModel) => {
    if (user.password === '') delete user.password;

    return {
      ...user,
      birthday: formatDate(dayjs(user.birthday)),
    };
  };

  return (
    <RootLayout>
      <Grid container sx={containerFormStyles}>
        <BackLink to={'/user/list'} />
        <Grid component='form' onSubmit={formik.handleSubmit} sx={formStyles}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel id='document_type'>Tipo de documento</InputLabel>
                <Select
                  id='document_type'
                  name='document_type'
                  labelId='document_type'
                  label='Tipo de documento'
                  defaultValue='CC'
                  value={formik.values.documentType}
                  onChange={(e) =>
                    formik.setFieldValue(
                      'documentType',
                      e.target.value as string
                    )
                  }
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.documentType &&
                    Boolean(formik.errors.documentType)
                  }
                >
                  {Object.values(documentTypeEnum).map((documentType) => (
                    <MenuItem key={documentType} value={documentType}>
                      {documentType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                type='password'
                id='password'
                name='password'
                label='Contraseña'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='dni'
                name='dni'
                label='Número de documento'
                value={formik.values.dni}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dni && Boolean(formik.errors.dni)}
                helperText={formik.touched.dni && formik.errors.dni}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='fullName'
                name='fullName'
                label='Nombre completo'
                type='text'
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='email'
                name='email'
                label='email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <DatePicker
                  label='Fecha de nacimiento'
                  format='DD/MM/YYYY'
                  value={dayjs(formik.values.birthday)}
                  onChange={() => {
                    formik.setFieldValue(
                      'birthday',
                      dayjs(formik.values.birthday)
                    );
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='phone'
                name='phone'
                label='Celular'
                type='number'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel id='shirt_size'>Talla de camisa</InputLabel>
                <Select
                  id='shirt_size'
                  name='shirt_size'
                  labelId='shirt_size'
                  label='Talla de camisa'
                  value={formik.values.shirtSize}
                  onChange={(e) =>
                    formik.setFieldValue('shirtSize', e.target.value as string)
                  }
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.shirtSize && Boolean(formik.errors.shirtSize)
                  }
                >
                  {Object.values(shirtSizeEnum).map((shirtSize) => (
                    <MenuItem key={shirtSize} value={shirtSize}>
                      {shirtSize}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel id='role'>Rol</InputLabel>
                <Select
                  id='role'
                  name='role'
                  labelId='role'
                  label='Talla de camisa'
                  value={formik.values.role}
                  onChange={(e) =>
                    formik.setFieldValue('role', e.target.value as string)
                  }
                  onBlur={formik.handleBlur}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                >
                  {Object.values(roleEnum).map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent='center' spacing={2}>
            <Button variant='contained' type='submit'>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
