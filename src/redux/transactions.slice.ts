import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Transaction } from '../types/Transaction';

const initialState: Transaction[] = [
  {
    id: 'id-1',
    account: 'Bank Account',
    amount: 475,
    avatar:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-shoe-1PhQRw.png',
    target: 'Nike Super Store',
    time: new Date(),
  },
  {
    id: 'id-2',
    account: 'Bank Account',
    amount: 952,
    avatar:
      'https://www.yoco.com/za/blog/wp-content/uploads/2019/10/open-retail-store-1200x800.jpg',
    target: 'Puma Store',
    time: new Date(),
  },
];

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (_state, action: PayloadAction<Transaction[]>) => {
      _state = action.payload;
    },
    addTransaction: (_state, action: PayloadAction<Transaction>) => {
      _state.push(action.payload);
    },
    removeTransaction: (_state, action: PayloadAction<Transaction['id']>) => {
      _state = _state.filter(({ id }) => id !== action.payload);
    },
    updateTransaction: (_state, action: PayloadAction<Transaction>) => {
      _state = _state.map((transaction) =>
        transaction.id === action.payload.id ? action.payload : transaction
      );
    },
  },
});
