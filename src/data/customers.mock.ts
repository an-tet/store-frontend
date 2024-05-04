import { GridRowsProp } from '@mui/x-data-grid';
import { CustomerModel } from '../models/customer/customer.model';

// TODO: Replace the following mock data with a call to the API
export const customersMock: GridRowsProp<CustomerModel> = [
  {
    id: '1',
    documentType: 'cc',
    dni: '793048291',
    fullName: 'Carlos Hernandez Perez',
    email: 'correo@dominio.com',
    birthday: '10/05/1990',
    phone: '3047389097',
  },
  {
    id: '2',
    documentType: 'cc',
    dni: '1345736640',
    fullName: 'Juan Perez Perez',
    email: 'prueba@dominio.com',
    birthday: '20/02/1997',
    phone: '3047480097',
  },
];
