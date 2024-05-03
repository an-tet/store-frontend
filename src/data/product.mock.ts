import { ProductModel } from '../models/product.model';
import { GridRowsProp } from '@mui/x-data-grid';

// TODO: Replace the following mock data with a call to the API
export const productsMock: GridRowsProp<ProductModel> = [
  {
    id: '1',
    name: 'computador',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
  {
    id: '2',
    name: 'agua',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
  {
    id: '3',
    name: 'aceite',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
  {
    id: '4',
    name: 'calcetas',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
  {
    id: '5',
    name: 'teclado',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
  {
    id: '6',
    name: 'monitor',
    detail: 'detail',
    price: 100,
    stock: 10,
    status: 'active',
    supplier: 'supplier',
  },
];
