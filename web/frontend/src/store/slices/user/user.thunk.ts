import { AxiosResponse } from 'axios';
import { AppDispatch } from '../../store';
import { storeApi } from '../../apis';
import { getAllUSers } from './user.slice';
import { UserModel } from '../../../models/user/user.model';

export const getAllUserThunk = () => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse = await storeApi.get('users');

    dispatch(getAllUSers(data));
  };
};

export const createUserThunk = (user: UserModel) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await storeApi.post('users', user);
    dispatch(createUserThunk(data));
    return data;
  };
};
