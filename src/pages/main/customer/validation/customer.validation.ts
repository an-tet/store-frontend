import * as yup from 'yup';
import { documentTypeEnum } from '../../../../enum/document-type.enum';
import {
  colombianCellphoneRegex,
  wordsSpacesAccents,
} from '../../../../constants/regex-patterns.constant';

export const customerCreateValidationSchema = yup.object({
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
  email: yup.string().email('El correo electrónico es inválido'),
  birthday: yup.date().typeError('La fecha de nacimiento es inválida'),
  phone: yup
    .string()
    .min(10, 'El teléfono debe tener al menos 10 caracteres')
    .max(10, 'El teléfono debe tener como máximo 10 caracteres')
    .matches(colombianCellphoneRegex, 'El teléfono tiene un formato inválido'),
});
