import { TableActionInterface } from '../../../../components/shared/interfaces/table-action.interface';

export const userListActions: TableActionInterface[] = [
  { type: 'edit', path: '/customer/edit/' },
  { type: 'delete', path: '/customer/delete/' },
];
