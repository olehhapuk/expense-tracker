import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userSlice } from './user.slice';
import { cardSlice } from './card.slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    card: cardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
