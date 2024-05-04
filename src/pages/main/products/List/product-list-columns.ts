import { GridColDef } from '@mui/x-data-grid';

export const productListColumns: GridColDef[] = [
  { field: 'id', headerName: 'id', flex: 1, minWidth: 100 },
  { field: 'name', headerName: 'Nombre', flex: 1, minWidth: 100 },
  { field: 'detail', headerName: 'Detalle', flex: 1, minWidth: 100 },
  { field: 'price', headerName: 'Precio', flex: 1, minWidth: 100 },
  { field: 'stock', headerName: 'Stock', flex: 1, minWidth: 100 },
  { field: 'status', headerName: 'Estatus', flex: 1, minWidth: 100 },
  { field: 'supplier', headerName: 'Proveedor', flex: 1, minWidth: 100 },
];
