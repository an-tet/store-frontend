import { TablePropsInterface } from '../interfaces/customer-table.interface';
import { GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import { CellItemAction } from './cell-item-actions.component';
import { TableActionInterface } from '../interfaces/table-action.interface';

export const tableConfig = (
  columns: GridColDef[],
  data: GridRowsProp,
  actions: TableActionInterface[]
): TablePropsInterface => ({
  columns: [
    ...columns,
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      getActions: (params: GridRowParams) => CellItemAction(params, actions),
    },
  ],
  rows: data,
});
