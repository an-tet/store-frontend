import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { blueTheme } from './theme/blueTheme';
import { store } from './store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={Routes} />
        </LocalizationProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
