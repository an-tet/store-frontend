import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductModel } from '../../../models/product/product.model';
interface ProductStateInterface {
  products: ProductModel[];
  isFetching: boolean;
}

const initialState: ProductStateInterface = {
  isFetching: false,
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isFetching = true;
    },
    getAllProducts: (
      state: ProductStateInterface,
      { payload }: PayloadAction<ProductModel[]>
    ) => {
      state.isFetching = false;
      state.products = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingProducts, getAllProducts } = productSlice.actions;
