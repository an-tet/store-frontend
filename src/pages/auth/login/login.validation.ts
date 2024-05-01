import * as yup from 'yup';
export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('El campo Correo electrónico es un campo requerido')
    .email('El campo Correo electrónico debe ser un correo electrónico'),
  password: yup
    .string()
    .required('El campo Contraseña es un campo requerido')
    .min(12, 'El campo Contraseña debe tener al menos 20 caracteres')
    .max(40, 'El campo Contraseña debe tener como máximo 40 caracteres'),
});
