import { AppDispatch } from '../../store';
import { checkingCredentials } from './auth.slice';

export const checkingAuthentication = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    // TODO: realizar petición http
    // const { data } = await exampleApi.get(
    //   `/example?limit=10&offset=${page * 10}`
    // );
  };
};
