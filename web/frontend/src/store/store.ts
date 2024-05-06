import { configureStore } from '@reduxjs/toolkit';
import { customerSlice } from './slices/customer/customer.slice';
import { storeApi } from './apis';
import { productSlice } from './slices/product/product.slice';
import { authSlice } from './slices/auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customers: customerSlice.reducer,
    products: productSlice.reducer,

    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
