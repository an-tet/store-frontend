import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthModel } from '../../../models/auth/auth.model';

const initialState: AuthModel = {
  status: 'not-authenticated',
  id: '',
  token: '',
  email: '',
  role: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state: AuthModel, { payload }: PayloadAction<AuthModel>) => {
      state.status = 'authenticated';
      state.id = payload.id;
      state.email = payload.email;
      state.token = payload.token;
      state.role = payload.role;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    logout: (state: AuthModel) => {
      state.status = 'not-authenticated';
      state.id = '';
      state.email = '';
      state.token = '';
      state.role = '';
      localStorage.removeItem('user');
    },
    checkingCredentials: (state: AuthModel) => {
      state.status = 'loading';
      state.id = '';
      state.email = '';
      state.token = '';
      state.role = '';
    },
    validateSession: (
      state: AuthModel,
      { payload }: PayloadAction<AuthModel>
    ) => {
      state.status = 'authenticated';
      state.id = payload.id;
      state.email = payload.email;
      state.token = payload.token;
      state.role = payload.role;
      localStorage.setItem('user', JSON.stringify(payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
