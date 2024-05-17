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
import { containerFormStyles, formStyles } from '../../root.styles';
import { userValidationSchema } from '../validation/user.validation';
import { useFormik } from 'formik';
import { UserModel } from '../../../../models/user/user.model';
import { documentTypeEnum } from '../../../../enum/document-type.enum';

export const CreateUserPage = () => {
  const initialUserForm: UserModel = {
    documentType: 'CC',
    dni: '',
    fullName: '',
    email: '',
    birthday: '',
    phone: '',
    shirtSize: '',
    role: '',
  };

  const formik = useFormik({
    initialValues: initialUserForm,
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <RootLayout>
      <Grid container sx={containerFormStyles}>
        <BackLink to={'/user/list'} />
        <Grid component='form' onSubmit={formik.handleSubmit} sx={formStyles}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
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
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
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
          </Grid>
          {/* TODO:End create user page and integrate with backend */}
          {/* <Grid container spacing={1}>
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
                  value={formik.values.supplier}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.supplier && Boolean(formik.errors.supplier)
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

           */}
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
