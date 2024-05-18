import * as yup from 'yup';
import { documentTypeEnum } from '../../../../enum/document-type.enum';
import {
  colombianCellphoneRegex,
  wordsSpacesAccents,
} from '../../../../constants/regex-patterns.constant';
import { shirtSizeEnum } from '../../../../enum/shirt-size.enum';
import { roleEnum } from '../../../../enum/role.enum';

const commonValidations = {
  documentType: yup
    .string()
    .required('El tipo de documento es requerido')
    .oneOf(Object.values(documentTypeEnum), 'El tipo de documento es inválido'),
  dni: yup
    .string()
    .min(6, 'El número de documento debe tener al menos 6 dígitos')
    .max(10, 'El número de documento debe tener como máximo 10 dígitos')
    .required('El número de documento es requerido'),
  fullName: yup
    .string()
    .matches(
      wordsSpacesAccents,
      'El nombre completo solo puede contener letras, espacios y acentos'
    )
    .required('El nombre completo es requerido'),
  email: yup
    .string()
    .email('El correo electrónico es inválido')
    .required('El correo electrónico es requerido'),
  birthday: yup.date().required('La fecha de nacimiento es requerida'),
  phone: yup
    .string()
    .min(10, 'El teléfono debe tener al menos 10 caracteres')
    .max(10, 'El teléfono debe tener como máximo 10 caracteres')
    .matches(colombianCellphoneRegex, 'El teléfono tiene un formato inválido')
    .required('El teléfono es requerido'),
  shirtSize: yup
    .string()
    .oneOf(Object.values(shirtSizeEnum), 'La talla de camisa es inválida')
    .required('La talla de camisa es requerida'),
  role: yup
    .string()
    .required('El rol es requerido')
    .oneOf(Object.values(roleEnum), 'El rol es inválido'),
};

export const userCreateValidationSchema = yup.object({
  ...commonValidations,
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(20, 'La contraseña debe tener como máximo 20 caracteres')
    .required('La contraseña es requerida'),
});

export const userUpdateValidationSchema = yup.object({
  ...commonValidations,
});
