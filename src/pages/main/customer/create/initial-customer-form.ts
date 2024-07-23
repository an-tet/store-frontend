import dayjs from 'dayjs';
import { CustomerModel } from '../../../../models/customer/customer.model';

export const initialCustomerForm: CustomerModel = {
  documentType: '',
  dni: '',
  fullName: '',
  email: '',
  birthday: dayjs(),
  phone: '',
};
