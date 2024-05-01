import * as yup from 'yup';

export const recoveryValidationSchema = yup.object({
  email: yup
    .string()
    .required('El campo Correo electrónico es un campo requerido')
    .email('El campo Correo electrónico debe ser un correo electrónico'),
});
