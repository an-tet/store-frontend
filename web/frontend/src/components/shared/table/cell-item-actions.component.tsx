import { Delete, Edit } from '@mui/icons-material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { TableActionInterface } from '../interfaces/table-action.interface';

export const CellItemAction = (
  params: GridRowParams,
  actions: TableActionInterface[]
) => {
  const navigate = useNavigate();
  const items: JSX.Element[] = [];

  actions.forEach((action) => {
    if (action.type === 'edit') {
      items.push(
        <GridActionsCellItem
          icon={<Edit color='primary' />}
          label='Editar'
          onClick={() => navigate(action.path + params.id)}
        />
      );
    }
    if (action.type === 'delete') {
      items.push(
        <GridActionsCellItem
          icon={<Delete color='error' />}
          label='Eliminar'
          onClick={() => navigate(action.path + params.id)}
        />
      );
    }
  });

  return items;
};
