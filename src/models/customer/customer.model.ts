import { Dayjs } from 'dayjs';

export type CustomerModel = {
  id?: string;
  documentType: string;
  dni: string;
  fullName: string;
  email: string;
  birthday: string | Dayjs;
  phone: string;
};
