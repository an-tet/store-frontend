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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      <Provider store={store}>
        <SnackbarProvider />
        <RouterProvider router={Routes} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
