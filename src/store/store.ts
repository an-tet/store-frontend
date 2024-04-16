import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { storeApi } from './apis';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,

    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
