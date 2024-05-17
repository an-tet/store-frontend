import * as yup from 'yup';
import { documentTypeEnum } from '../../../../enum/document-type.enum';
import { wordsAndSpaces } from '../../../../constants/regex-patterns.constant';
import { shirtSizeEnum } from '../../../../enum/shirt-size.enum';
import { roleEnum } from '../../../../enum/role.enum';
export const userValidationSchema = yup.object({
  documentType: yup
    .string()
    .required('El tipo de documento es requerido')
    .oneOf(Object.values(documentTypeEnum), 'El tipo de documento es inválido'),
  dni: yup.string().required('El número de documento es requerido'),
  fullName: yup
    .string()
    .matches(wordsAndSpaces, 'El nombre completo solo puede contener letras')
    .required('El nombre completo es requerido'),
  email: yup
    .string()
    .email('El correo electrónico es inválido')
    .required('El correo electrónico es requerido'),
  birthday: yup.date().required('La fecha de nacimiento es requerida'),
  phone: yup.string().required('El teléfono es requerido'),
  shirtSize: yup
    .string()
    .oneOf(Object.values(shirtSizeEnum), 'La talla de camisa es inválida')
    .required('La talla de camisa es requerida'),
  role: yup
    .string()
    .required('El rol es requerido')
    .oneOf(Object.values(roleEnum), 'El rol es inválido'),
});
