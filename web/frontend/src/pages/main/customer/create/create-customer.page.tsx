import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { RootLayout } from '../../root.layout';
import { BackLink } from '../../../../components/shared/backLink/back-link.component';
import { CustomerModel } from '../../../../models/customer/customer.model';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { customerCreateValidationSchema } from '../validation/customer.validation';
import { useAppDispatch } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../../utils/date.util';
import { createCustomerThunk } from '../../../../store/slices/customer/customer.thunk';
import { successNotification } from '../../../../components/shared/notifications/notification.provider';
import { MessageErrorException } from '../../../../exceptions/message-error.exception';
import { AxiosError } from 'axios';
import { containerFormStyles, formStyles } from '../../root.styles';
import { documentTypeEnum } from '../../../../enum';
import { DatePicker } from '@mui/x-date-pickers';
import { ErrorResponse } from '../../../../models/auth/error.model';

export const CreateCustomerPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialCustomerForm: CustomerModel = {
    documentType: '',
    dni: '',
    fullName: '',
    email: '',
    birthday: dayjs(),
    phone: '',
  };

  const formik = useFormik({
    initialValues: initialCustomerForm,
    validationSchema: customerCreateValidationSchema,
    onSubmit: (values: CustomerModel) => {
      const customer: CustomerModel = {
        ...values,
        birthday: formatDate(dayjs(values.birthday)),
      };

      dispatch(createCustomerThunk(customer))
        .then(() => {
          const successMessage = 'Cliente modificado exitosamente';
          successNotification(successMessage);
          navigate('/customer/list');
        })
        .catch(({ response }: AxiosError) => {
          const error: ErrorResponse = response?.data as ErrorResponse;
          MessageErrorException(error?.message);
        });
    },
  });

  return (
    <RootLayout>
      <Grid container sx={containerFormStyles}>
        <BackLink to={'/customer/list'} />
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
            <Grid item xs={12} sm={6} lg={3}>
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
          </Grid>
          <Grid container justifyContent='center' spacing={2} sx={{ mt: 3 }}>
            <Button variant='contained' type='submit'>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
