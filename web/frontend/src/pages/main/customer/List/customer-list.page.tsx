import { Button, Grid } from '@mui/material';
import { RootLayout } from '../../root.layout';
import {
  buttonContainerListStyles,
  buttonListStyles,
  containerListStyles,
} from '../../root.styles';
import { Add } from '@mui/icons-material';
import { TableComponent } from '../../../../components';
import { tableConfig } from '../../../../components/shared/table/table.config';
import { customerListColumns } from './customer-list-columns';
import { customerListActions } from './customer-list-actions';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { useEffect } from 'react';
import { getAllCustomerThunk } from '../../../../store/slices/customer/customer.thunk';

export const ListCustomerPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCustomerThunk());
  }, [dispatch]);

  const selector = useAppSelector((state) => state.customers);
  return (
    <RootLayout>
      <Grid container sx={containerListStyles}>
        <Grid item xs={12} sx={buttonContainerListStyles}>
          <Button
            variant='contained'
            href='/customer/create'
            sx={buttonListStyles}
          >
            <Add />
          </Button>
        </Grid>
        <TableComponent
          {...tableConfig(
            customerListColumns,
            selector.customers,
            customerListActions
          )}
        />
      </Grid>
    </RootLayout>
  );
};
