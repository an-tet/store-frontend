import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import { Grid } from '@mui/material';
import { TablePropsInterface } from '../interfaces/customer-table.interface';
import { CustomNoRowsOverlay } from './customNoRowsOverlay/custom-no-rows-overlay.component';
import { SearchToolbar } from './searchToolbar/search-toolbar.component';
import { RowSpacing } from './row-spacing.component';

export const TableComponent = (data: TablePropsInterface) => {
  return (
    <Grid sx={{ minHeight: 400, width: '100%', mt: 3 }}>
      <DataGrid
        ignoreDiacritics
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
          toolbar: SearchToolbar,
        }}
        {...data}
        getRowSpacing={RowSpacing()}
        editMode='row'
        density='comfortable'
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      />
    </Grid>
  );
};
