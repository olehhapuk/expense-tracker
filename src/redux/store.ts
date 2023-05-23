import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { userSlice } from './user.slice';
import { cardSlice } from './card.slice';
import { analyticsSlice } from './analytics.slice';
import { transactionsSlice } from './transactions.slice';
import { expensesSlice } from './expenses.slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    card: cardSlice.reducer,
    analytics: analyticsSlice.reducer,
    transactions: transactionsSlice.reducer,
    expenses: expensesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
