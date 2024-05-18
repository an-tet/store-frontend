import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

import { RootLayout } from '../../root.layout';
import {
  buttonContainerListStyles,
  buttonListStyles,
  containerListStyles,
} from '../../root.styles';
import { TableComponent } from '../../../../components';
import { tableConfig } from '../../../../components/shared/table/table.config';
import { userListColumns } from './customer-list-columns';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllUserThunk } from '../../../../store/slices/user/user.thunk';
import { useEffect } from 'react';
import { userListActions } from './user-list-actions';

export const ListUserPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch]);

  const selector = useAppSelector((state) => state.users);
  return (
    <RootLayout>
      <Grid container sx={containerListStyles}>
        <Grid item xs={12} sx={buttonContainerListStyles}>
          <Button variant='contained' href='/user/create' sx={buttonListStyles}>
            <Add />
          </Button>
        </Grid>
        <TableComponent
          {...tableConfig(userListColumns, selector.users, userListActions)}
        />
      </Grid>
    </RootLayout>
  );
};
