import { AxiosResponse } from 'axios';
import { LoginModel } from '../../../models/auth/login.model';
import { storeApi } from '../../apis';
import { AppDispatch } from '../../store';
import { checkingCredentials, login } from './auth.slice';

export const checkingAuthenticationThunk = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const loginThunk = (credentials: LoginModel) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const { data }: AxiosResponse = await storeApi.post(
      'auth/login',
      credentials
    );

    dispatch(login(data));
  };
};
