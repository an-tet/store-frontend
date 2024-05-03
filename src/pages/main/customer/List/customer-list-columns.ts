import { GridColDef } from '@mui/x-data-grid';

export const customerListColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'documentType', headerName: 'Tipo de documento' },
  { field: 'dni', headerName: 'DNI' },
  { field: 'fullName', headerName: 'Nombre completo' },
  { field: 'email', headerName: 'Correo electrónico' },
  { field: 'birthday', headerName: 'Fecha de nacimiento' },
  { field: 'phone', headerName: 'Teléfono' },
];
