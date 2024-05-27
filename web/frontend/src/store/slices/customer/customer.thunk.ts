import { AxiosResponse } from 'axios';
import { AppDispatch } from '../../store';
import { storeApi } from '../../apis';
import { CustomerModel } from '../../../models/customer/customer.model';
import { getAllCustomers } from './customer.slice';

export const getAllCustomerThunk = () => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse<CustomerModel[]> = await storeApi.get(
      'customers'
    );
    dispatch(getAllCustomers(data));
  };
};

export const createCustomerThunk = (Customer: CustomerModel) => {
  return async () => {
    const { data }: AxiosResponse<CustomerModel> = await storeApi.post(
      'customers',
      Customer
    );
    return data;
  };
};

export const updateCustomerThunk = (Customer: CustomerModel) => {
  return async () => {
    const id = Customer.id;
    delete Customer.id;
    const { data }: AxiosResponse<CustomerModel> = await storeApi.patch(
      `customers/${id}`,
      Customer
    );
    return data;
  };
};

export const toggleCustomerStateThunk = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse = await storeApi.patch(
      `customers/toggle-state/${id}`
    );
    dispatch(getAllCustomerThunk());
    return data;
  };
};
