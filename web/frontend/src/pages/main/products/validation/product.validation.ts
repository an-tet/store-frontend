import * as yup from 'yup';
import { wordsAndSpaces } from '../../../../constants/regex-patterns.constant';
export const productValidationSchema = yup.object({
  name: yup
    .string()
    .required('El campo Nombre es un campo requerido')
    .min(3, 'El campo Nombre debe tener al menos 3 caracteres')
    .matches(wordsAndSpaces, 'El nombre solo puede contener letras y espacios'),
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
