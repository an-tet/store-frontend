import { RootLayout } from '../../RootLayout';
import { ProductModel } from '../../../../models/ProductModel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { wordsAndSpaces } from '../../../../constants/RegexPatterns';
import {
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export const CreateProductPage = () => {
  const initialProductForm: ProductModel = {
    name: '',
    detail: '',
    price: 0,
    status: false,
    stock: 0,
    supplier_id: -1,
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
      .min(0, 'El campo Stock debe ser al menos 1'),
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

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setProductForm({
  //     ...productForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <RootLayout>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '70vw' }}>
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

          <Checkbox
            id='status'
            name='status'
            checked={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Select
            fullWidth
            id='supplier_id'
            name='supplier_id'
            label='Proveedor'
            value={formik.values.supplier_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.supplier_id && Boolean(formik.errors.supplier_id)
            }
          >
            <MenuItem value={-1}>Selecciona un proveedor</MenuItem>
            <MenuItem value={1}>Proveedor 1</MenuItem>
            <MenuItem value={2}>Proveedor 2</MenuItem>
          </Select>

          <Button variant='contained' type='submit'>
            Guardar
          </Button>
        </form>
      </Grid>
    </RootLayout>
  );
};
