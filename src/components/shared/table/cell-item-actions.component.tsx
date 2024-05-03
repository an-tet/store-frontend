import { Delete, Edit } from '@mui/icons-material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const CellItemAction = (params: GridRowParams, actions: string[]) => {
  const navigate = useNavigate();
  const editAction = '/customer/edit/';
  const deleteAction = '/customer/delete/';
  const items: JSX.Element[] = [];

  actions.forEach((action) => {
    if (action === 'edit') {
      items.push(
        <GridActionsCellItem
          key={params.id.toLocaleString().concat('e-dit')}
          icon={<Edit color='primary' />}
          label='Editar'
          onClick={() => navigate(editAction + params.id)}
        />
      );
    }
    if (action === 'delete') {
      items.push(
        <GridActionsCellItem
          icon={<Delete color='error' />}
          label='Eliminar'
          onClick={() => navigate(deleteAction + params.id)}
        />
      );
    }
  });

  return items;
};
