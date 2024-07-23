import { useFormik } from 'formik';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import { RootLayout } from '../../root.layout';
import { BackLink } from '../../../../components/shared/backLink/back-link.component';
import { productValidationSchema } from '../validation/product.validation';
import { containerFormStyles, formStyles } from '../../root.styles';
import { initialProductForm } from './initial-product-form';
import { createProductThunk } from '../../../../store/slices/product/customer.thunk';
import { useAppDispatch } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { successNotification } from '../../../../components/shared/notifications/notification.provider';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../../../models/auth/error.model';
import { MessageErrorException } from '../../../../exceptions/message-error.exception';

export const CreateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialProductForm,
    validationSchema: productValidationSchema,
    onSubmit: (product) => {
      dispatch(createProductThunk(product))
        .then(() => {
          const successMessage = 'Producto creado exitosamente';
          successNotification(successMessage);
          navigate('/product/list');
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
        <BackLink to={'/product/list'} />
        <Grid component='form' onSubmit={formik.handleSubmit} sx={formStyles}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='name'
                name='name'
                label='Nombre'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ mr: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='detail'
                name='detail'
                label='Detalle'
                value={formik.values.detail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.detail && Boolean(formik.errors.detail)}
                helperText={formik.touched.detail && formik.errors.detail}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='price'
                name='price'
                label='Precio'
                type='number'
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id='stock'
                name='stock'
                label='Stock'
                type='number'
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                helperText={formik.touched.stock && formik.errors.stock}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='supplier_id'>Proveedor</InputLabel>
                <Select
                  id='supplier_id'
                  name='supplier_id'
                  label='Proveedor'
                  value={formik.values.supplier}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.supplier && Boolean(formik.errors.supplier)
                  }
                >
                  <MenuItem value={0}>Proveedor 1</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs='auto' sm='auto' sx={{ ml: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    id='status'
                    name='status'
                    checked={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label={formik.values.status ? 'Activado' : 'Desactivado'}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent='center' spacing={2} sx={{ mt: 5 }}>
            <Button variant='contained' type='submit'>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
