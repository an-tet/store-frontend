import { RootLayout } from '../../root.layout';
import { ProductModel } from '../../../../models/product/product.model';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { wordsAndSpaces } from '../../../../constants/regex-patterns.constant';
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
import { containerFormStyles, formStyles } from './create-product.styles';

export const CreateProductPage = () => {
  const initialProductForm: ProductModel = {
    name: '',
    detail: '',
    price: 0,
    status: true,
    stock: 0,
    supplier_id: 0,
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('El campo Nombre es un campo requerido')
      .min(3, 'El campo Nombre debe tener al menos 3 caracteres')
      .matches(
        wordsAndSpaces,
        'El nombre solo puede contener letras y espacios'
      ),
    detail: yup
      .string()
      .required('El campo Detalle es un campo requerido')
      .min(20, 'El campo Detalle debe tener al menos 20 caracteres')
      .max(200, 'El campo Detalle debe tener como máximo 200 caracteres'),
    price: yup
      .number()
      .required('El campo Precio es un campo requerido')
      .min(1, 'El campo Precio debe ser al menos 100'),
    stock: yup
      .number()
      .integer('El campo Stock debe ser un número entero')
      .required('El campo Stock es un campo requerido')
      .min(1, 'El campo Stock debe ser al menos 1'),
    status: yup.boolean().required('El campo Estado es un campo requerido'),
    supplier_id: yup
      .number()
      .required('El campo Proveedor es un campo requerido'),
  });

  const formik = useFormik({
    initialValues: initialProductForm,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <RootLayout>
      <Grid container sx={containerFormStyles}>
        <Grid component='form' onSubmit={formik.handleSubmit} sx={formStyles}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
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
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
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
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
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
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
              {' '}
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
          </Grid>

          <Grid container spacing={1} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='supplier_id'>Proveedor</InputLabel>
                <Select
                  id='supplier_id'
                  name='supplier_id'
                  label='Proveedor'
                  value={formik.values.supplier_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.supplier_id &&
                    Boolean(formik.errors.supplier_id)
                  }
                >
                  <MenuItem value={0}>Proveedor 1</MenuItem>
                  <MenuItem value={1}>Proveedor 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs='auto' sm='auto' sx={{ ml: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    id='active'
                    name='active'
                    checked={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label='Activar usuario'
              />
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
            <Button variant='contained' type='submit'>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </RootLayout>
  );
};
