import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../../../models/user/user.model';

interface UserState {
  users: UserModel[];
}

const initialState: UserState = {
  users: [],
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
