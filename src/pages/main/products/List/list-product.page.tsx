import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

import {
  buttonContainerListStyles,
  buttonListStyles,
  containerListStyles,
} from '../../root.styles';

import { RootLayout } from '../../root.layout';
import { TableComponent } from '../../../../components';
import { productListColumns } from './product-list-columns';
import { tableConfig } from '../../../../components/shared/table/table.config';
import { productListActions } from './product-list-actions';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { useEffect } from 'react';
import { getAllProductsThunk } from '../../../../store/slices/product/customer.thunk';

export const ListProductPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  const selector = useAppSelector((state) => state.products);

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
            {...tableConfig(
              productListColumns,
              selector.products,
              productListActions
            )}
          />
        </Grid>
      </RootLayout>
    </>
  );
};
