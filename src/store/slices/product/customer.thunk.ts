import { AxiosResponse } from 'axios';
import { AppDispatch } from '../../store';
import { storeApi } from '../../apis';
import { ProductModel } from '../../../models/product/product.model';
import { getAllProducts } from './product.slice';

export const getAllProductsThunk = () => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse<ProductModel[]> = await storeApi.get(
      'products'
    );
    dispatch(getAllProducts(data));
  };
};

export const createProductThunk = (product: ProductModel) => {
  return async () => {
    const { data }: AxiosResponse<ProductModel> = await storeApi.post(
      'products',
      product
    );
    return data;
  };
};

export const updateProductThunk = (product: ProductModel) => {
  return async () => {
    const id = product.id;
    delete product.id;
    const { data }: AxiosResponse<ProductModel> = await storeApi.patch(
      `products/${id}`,
      product
    );
    return data;
  };
};

export const toggleCustomerStateThunk = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse = await storeApi.patch(
      `products/toggle-state/${id}`
    );
    dispatch(getAllProductsThunk());
    return data;
  };
};
