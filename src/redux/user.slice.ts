import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../types/User';

const initialState: User = {
  avatar:
    'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
  username: 'John Doe',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      _state = action.payload;
    },
  },
});
