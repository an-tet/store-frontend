import { AxiosResponse } from 'axios';
import { AppDispatch } from '../../store';
import { storeApi } from '../../apis';
import { getAllUSers } from './user.slice';
import { UserModel } from '../../../models/user/user.model';

export const getAllUserThunk = () => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse<UserModel[]> = await storeApi.get('users');
    dispatch(getAllUSers(data));
  };
};

export const createUserThunk = (user: UserModel) => {
  return async () => {
    const { data }: AxiosResponse<UserModel> = await storeApi.post(
      'users',
      user
    );
    return data;
  };
};

export const updateUserThunk = (user: UserModel) => {
  return async () => {
    const id = user.id;
    delete user.id;
    const { data }: AxiosResponse<UserModel> = await storeApi.patch(
      `users/${id}`,
      user
    );
    return data;
  };
};

export const toggleUserStateThunk = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse = await storeApi.patch(
      `users/toggle-state/${id}`
    );
    dispatch(getAllUserThunk());
    return data;
  };
};
