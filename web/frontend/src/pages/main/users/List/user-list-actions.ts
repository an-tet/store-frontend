import { TableActionInterface } from '../../../../components/shared/interfaces/table-action.interface';

export const userListActions: TableActionInterface[] = [
  { type: 'edit', path: '/user/edit/' },
  { type: 'toggle', path: '/user/toggle-state/' },
];
