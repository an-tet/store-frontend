// import { storeApi } from '../store/apis';
// import { useAppDispatch, useAppSelector } from '../store';
// import { login, logout } from '../store/slices/auth/auth.slice';
// import { AuthModel } from '../models/auth/auth.model';

// export const useAuthStore = () => {
//   const { status, errorMessages } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   const checkAuthToken = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return dispatch(logout());

//     try {
//       const { data } = await storeApi.get<AuthModel>('auth/validate-session');
//       localStorage.setItem('token', data.token);
//       dispatch(login(data));
//     } catch (error) {
//       localStorage.clear();
//       dispatch(logout());
//     }
//   };

//   return { errorMessages, status, checkAuthToken };
// };
