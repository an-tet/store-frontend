import { Button, Grid } from '@mui/material';
import { RootLayout } from '../../root.layout';
import {
  buttonContainerListStyles,
  buttonListStyles,
  containerListStyles,
} from '../../root.styles';
import { Add } from '@mui/icons-material';
import { TableComponent } from '../../../../components';
import { customerTableData } from '../../../../components/shared/table/table.config';
import { customersMock } from '../../../../data/customers.mock';
import { customerListColumns } from './customer-list-columns';

export const ListCustomerPage = () => {
  const actions: string[] = ['edit', 'delete'];
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
          {...customerTableData(customerListColumns, customersMock, actions)}
        />
      </Grid>
    </RootLayout>
  );
};
