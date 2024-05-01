import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

import {
  buttonContainerStyles,
  buttonStyles,
  containerStyles,
} from './list-product.styles';

import { RootLayout } from '../../root.layout';
import { TableComponent } from '../../../../components';
import { products } from '../../../../data/ProductMock';

export const ListProductPage = () => {
  return (
    <>
      <RootLayout>
        <Grid container sx={containerStyles}>
          <Grid item xs={12} sx={buttonContainerStyles}>
            <Button
              variant='contained'
              href='/product/create'
              sx={buttonStyles}
            >
              <Add />
            </Button>
          </Grid>
          <TableComponent {...products} />
        </Grid>
      </RootLayout>
    </>
  );
};
