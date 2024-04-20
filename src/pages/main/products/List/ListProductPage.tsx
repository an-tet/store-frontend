import { Button, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';

import { containerStyles } from './ListProductStyles';

import { RootLayout } from '../../RootLayout';
import { TableComponent } from '../../../../components';
import { products } from '../../../../data/ProductMock';

export const ListProductPage = () => {
  return (
    <>
      <RootLayout>
        <Grid container sx={containerStyles}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button variant='contained' sx={{ backgroundColor: 'primary' }}>
              <Add />
            </Button>
          </Grid>
          <TableComponent {...products} />
        </Grid>
      </RootLayout>
    </>
  );
};
