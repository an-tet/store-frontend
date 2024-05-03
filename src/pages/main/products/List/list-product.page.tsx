import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

import {
  buttonContainerListStyles,
  buttonListStyles,
  containerListStyles,
} from '../../root.styles';

import { RootLayout } from '../../root.layout';
import { TableComponent } from '../../../../components';
import { productsMock } from '../../../../data/product.mock';
import { productListColumns } from './product-list-columns';
import { customerTableData } from '../../../../components/shared/table/table.config';

export const ListProductPage = () => {
  const actions: string[] = ['edit', 'delete'];
  return (
    <>
      <RootLayout>
        <Grid container sx={containerListStyles}>
          <Grid item xs={12} sx={buttonContainerListStyles}>
            <Button
              variant='contained'
              href='/product/create'
              sx={buttonListStyles}
            >
              <Add />
            </Button>
          </Grid>
          <TableComponent
            {...customerTableData(productListColumns, productsMock, actions)}
          />
        </Grid>
      </RootLayout>
    </>
  );
};
