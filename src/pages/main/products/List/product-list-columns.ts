import { GridColDef } from '@mui/x-data-grid';

export const productListColumns: GridColDef[] = [
  { field: 'id', headerName: 'id' },
  { field: 'name', headerName: 'Nombre' },
  { field: 'detail', headerName: 'Detalle' },
  { field: 'price', headerName: 'Precio' },
  { field: 'stock', headerName: 'Stock' },
  { field: 'status', headerName: 'Estatus' },
  { field: 'supplier', headerName: 'Proveedor' },
];
