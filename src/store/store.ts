import { configureStore } from '@reduxjs/toolkit';
import { customerSlice } from './slices/customer/customer.slice';
import { productSlice } from './slices/product/product.slice';
import { authSlice } from './slices/auth/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from './slices/user/user.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: userSlice.reducer,
    customers: customerSlice.reducer,
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
