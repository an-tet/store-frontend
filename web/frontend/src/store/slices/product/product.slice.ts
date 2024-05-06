import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductModel } from '../../../models/product/product.model';
import { productsMock } from '../../../data/product.mock';
import { ProductMapper } from '../../../mapper/product/product.mapper';
import { supplierList } from '../../../data/supplier.mock';
interface ProductStateInterface {
  page: number;
  products: ProductModel[];
  isLoading: boolean;
}

const initialState: ProductStateInterface = {
  page: 0,
  products: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    getAll: (
      state: ProductStateInterface,
      action: PayloadAction<ProductStateInterface>
    ) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.products = ProductMapper.arrayToModel(productsMock, supplierList);
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingProducts, getAll } = productSlice.actions;
