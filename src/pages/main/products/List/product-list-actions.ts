import { TableActionInterface } from '../../../../components/shared/interfaces/table-action.interface';

export const productListActions: TableActionInterface[] = [
  { type: 'edit', path: '/product/edit/' },
  { type: 'delete', path: '/product/delete/' },
];
