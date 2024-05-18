import { Delete, Edit, ToggleOff, ToggleOn } from '@mui/icons-material';
import { GridActionsCellItem, GridRowParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { TableActionInterface } from '../interfaces/table-action.interface';
import { useAppDispatch } from '../../../store';
import { toggleUserStateThunk } from '../../../store/slices/user/user.thunk';
import { useEffect, useState } from 'react';

export const CellItemAction = (
  params: GridRowParams,
  actions: TableActionInterface[]
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [state, setState] = useState('Activo');
  const items: JSX.Element[] = [];

  useEffect(() => {
    setState(params.row.status);
  }, [setState, params.row.status]);

  actions.forEach((action) => {
    if (action.type === 'edit') {
      items.push(
        <GridActionsCellItem
          icon={<Edit color='primary' />}
          label='Editar'
          onClick={() =>
            navigate(action.path + params.id, { state: params.row })
          }
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

    if (action.type === 'toggle') {
      items.push(
        <GridActionsCellItem
          icon={
            state === 'Activo' ? (
              <ToggleOn color='secondary' />
            ) : (
              <ToggleOff color='error' />
            )
          }
          label='Estado'
          onClick={() => dispatch(toggleUserStateThunk(params.id.toString()))}
        />
      );
    }
  });

  return items;
};
