import { Grid } from '@mui/material';
import { TableComponent } from '../../../../components/shared/table/TableComponent';
import { RootLayout } from '../../RootLayout';

// TODO: Replace the following mock data with a call to the API
const products = {
  headers: [
    { key: 'id', text: 'id' },
    { key: 'name', text: 'Nombre' },
    { key: 'detail', text: 'Detalle' },
    { key: 'price', text: 'Precio' },
    { key: 'stock', text: 'stock' },
    { key: 'status', text: 'Estatus' },
    { key: 'supplier', text: 'Proveedor' },
    { key: 'actions', text: 'Acciones' },
  ],
  searchItem: {
    key: 'name',
    placeholder: 'Busca productos por nombre',
  },
  rows: [
    {
      id: 1,
      name: 'computador',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
    {
      id: 2,
      name: 'agua',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
    {
      id: 3,
      name: 'aceite',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
    {
      id: 4,
      name: 'calcetas',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
    {
      id: 5,
      name: 'teclado',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
    {
      id: 6,
      name: 'monitor',
      detail: 'detail',
      price: 100,
      stock: 10,
      status: 'Active',
      supplier: 'supplier',
    },
  ],
  actions: [
    {
      type: 'edit',
      redirectTo: '/product/edit/',
    },
    {
      type: 'delete',
      redirectTo: '/product/delete/',
    },
  ],
};

export const ListProductPage = () => {
  return (
    <>
      <RootLayout>
        <Grid
          container
          sx={{
            mt: 5,
          }}
        >
          <TableComponent {...products} />
        </Grid>
      </RootLayout>
    </>
  );
};
