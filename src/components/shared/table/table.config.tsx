import { TablePropsInterface } from '../interfaces/customer-table.interface';
import { GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import { CellItemAction } from './cell-item-actions.component';

export const customerTableData = (
  columns: GridColDef[],
  data: GridRowsProp,
  actions: string[]
): TablePropsInterface => {
  return {
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
  };
};
