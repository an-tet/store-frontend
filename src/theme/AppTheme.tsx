import { createTheme } from '@mui/material';
import { AppColors } from './AppColors';

export const AppTheme = createTheme({
  palette: {
    primary: {
      light: '#062c48',
      main: '#094067',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00456d',
      main: '#00639d',
      contrastText: '#185b86',
    },
    error: {
      main: AppColors.error,
    },
  },
});
