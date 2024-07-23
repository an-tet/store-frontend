import { createTheme } from '@mui/material';

export const blueTheme = createTheme({
  palette: {
    primary: {
      light: '#094067',
      main: '#3DA9FC',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00456d',
      main: '#00639d',
      contrastText: '#185b86',
    },
    error: {
      main: '#ba1a1a',
    },
  },
});
