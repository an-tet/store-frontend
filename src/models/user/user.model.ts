import { Dayjs } from 'dayjs';

export type UserModel = {
  id?: string;
  password?: string;
  documentType: string;
  dni: string;
  fullName: string;
  email: string;
  birthday: string | Dayjs;
  phone: string;
  status: string;
  shirtSize: string;
  role: string;
};
