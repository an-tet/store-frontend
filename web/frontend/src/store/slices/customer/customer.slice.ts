import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CustomerModel } from '../../../models/customer/customer.model';

interface CustomerStateInterface {
  isFetching: boolean;
  customers: CustomerModel[];
  errorMessages: string[];
}

const initialState: CustomerStateInterface = {
  isFetching: false,
  customers: [],
  errorMessages: [],
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.isFetching = true;
    },
    getAllCustomers: (
      state: CustomerStateInterface,
      { payload }: PayloadAction<CustomerModel[]>
    ) => {
      state.isFetching = false;
      state.customers = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, getAllCustomers } = customerSlice.actions;
