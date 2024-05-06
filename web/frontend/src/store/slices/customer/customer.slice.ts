import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CustomerModel } from '../../../models/customer/customer.model';

interface CustomerStateInterface {
  page: number;
  customers: CustomerModel[];
  isLoading: boolean;
}

const initialState: CustomerStateInterface = {
  page: 0,
  customers: [],
  isLoading: false,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    getAll: (
      state: CustomerStateInterface,
      action: PayloadAction<CustomerStateInterface>
    ) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.customers = action.payload.customers;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, getAll } = customerSlice.actions;
