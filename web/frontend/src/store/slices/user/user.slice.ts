import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../../../models/user/user.model';

interface UserState {
  isFetching: boolean;
  users: UserModel[];
  errorMessages: string[];
}

const initialState: UserState = {
  isFetching: false,
  users: [],
  errorMessages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUSers: (
      state: UserState,
      { payload }: PayloadAction<UserModel[]>
    ) => {
      state.users = payload;
    },
  },
});

export const { getAllUSers } = userSlice.actions;
