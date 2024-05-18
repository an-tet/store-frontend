import { GridColDef } from '@mui/x-data-grid';

export const userListColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 100 },
  {
    field: 'documentType',
    headerName: 'Tipo de documento',
    flex: 1,
    minWidth: 100,
  },
  { field: 'dni', headerName: 'DNI', flex: 1, minWidth: 100 },
  { field: 'fullName', headerName: 'Nombre completo', flex: 1, minWidth: 100 },
  { field: 'email', headerName: 'Correo electrónico', flex: 1, minWidth: 100 },
  {
    field: 'birthday',
    headerName: 'Fecha de nacimiento',
    flex: 1,
    minWidth: 100,
  },
  { field: 'status', headerName: 'Estado', flex: 1, minWidth: 100 },
  { field: 'phone', headerName: 'Teléfono', flex: 1, minWidth: 100 },
  { field: 'shirtSize', headerName: 'Talla de camisa', flex: 1, minWidth: 100 },
  { field: 'role', headerName: 'Rol', flex: 1, minWidth: 100 },
];
