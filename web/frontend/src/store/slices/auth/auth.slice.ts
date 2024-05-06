import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthModel } from '../../../models/auth/auth.model';

const initialState: AuthModel = {
  status: 'not-authenticated',
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
  errorMessages: '',
};

export const authSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    login: (state: AuthModel, action: PayloadAction<AuthModel>) => {},
    logout: (state: AuthModel, payload: PayloadAction<AuthModel>) => {},
    checkingCredentials: (state: AuthModel) => {
      state.status = 'loading';
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
