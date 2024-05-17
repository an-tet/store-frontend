import { AxiosResponse } from 'axios';
import { AppDispatch } from '../../store';
import { storeApi } from '../../apis';
import { getAllUSers } from './user.slice';

export const getAllUserThunk = () => {
  return async (dispatch: AppDispatch) => {
    const { data }: AxiosResponse = await storeApi.get('users');

    dispatch(getAllUSers(data));
  };
};
