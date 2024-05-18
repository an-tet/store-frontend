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
import { tableConfig } from '../../../../components/shared/table/table.config';
import { ProductModel } from '../../../../models/product/product.model';
import { ProductMapper } from '../../../../mapper/product/product.mapper';
import { supplierList } from '../../../../data/supplier.mock';
import { TableActionInterface } from '../../../../components/shared/interfaces/table-action.interface';

export const ListProductPage = () => {
  const actions: TableActionInterface[] = [
    { type: 'edit', path: '/product/edit/' },
    { type: 'delete', path: '/product/delete/' },
  ];

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
            {...tableConfig(productListColumns, requestProducts(), actions)}
          />
        </Grid>
      </RootLayout>
    </>
  );
};
