import { Box } from '@mui/material';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';

export const SearchToolbar = (): JSX.Element => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput: string) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
};
