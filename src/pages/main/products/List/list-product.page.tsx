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
import { ProductModel } from '../../../../models/product/product.model';
import { ProductMapper } from '../../../../mapper/product/product.mapper';
import { supplierList } from '../../../../data/supplier.mock';

export const ListProductPage = () => {
  const actions: string[] = ['edit', 'delete'];

  const requestProducts = (): ProductModel[] => {
    return productsMock.map((product) =>
      ProductMapper.toModel(product, supplierList)
    );
  };

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
            {...customerTableData(
              productListColumns,
              requestProducts(),
              actions
            )}
          />
        </Grid>
      </RootLayout>
    </>
  );
};
