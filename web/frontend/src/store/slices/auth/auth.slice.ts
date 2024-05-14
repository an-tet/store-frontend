import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthModel } from '../../../models/auth/auth.model';

const initialState: AuthModel = {
  status: 'not-authenticated',
  id: '',
  email: '',
  displayName: '',
  photoURL: '',
  errorMessages: '',
};

export const authSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    login: (state: AuthModel, { payload }: PayloadAction<AuthModel>) => {
      state.status = 'authenticated';
      state.id = payload.id;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessages = payload.errorMessages || '';
    },
    logout: (state: AuthModel, { payload }: PayloadAction<AuthModel>) => {
      state.status = 'not-authenticated';
      state.id = '';
      state.email = '';
      state.displayName = '';
      state.photoURL = '';
      state.errorMessages = payload.errorMessages || '';
    },
    checkingCredentials: (state: AuthModel) => {
      state.status = 'loading';
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
