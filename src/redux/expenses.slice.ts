import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Expense } from '../types/Expense';

const initialState: Expense[] = [
  {
    id: 'id-1',
    account: 'Bank Account',
    amount: 475,
    avatar:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-shoe-1PhQRw.png',
    target: 'Nike Super Store',
    time: new Date(),
    budget: 3000,
  },
  {
    id: 'id-2',
    account: 'Bank Account',
    amount: 952,
    avatar:
      'https://www.yoco.com/za/blog/wp-content/uploads/2019/10/open-retail-store-1200x800.jpg',
    target: 'Puma Store',
    time: new Date(),
    budget: 3750,
  },
];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses: (state, action: PayloadAction<Expense[]>) => {
      state = action.payload;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<Expense['id']>) => {
      state = state.filter(({ id }) => id !== action.payload);
    },
    updateExpense: (state, { payload }: PayloadAction<Expense>) => {
      state = state.map((expense) =>
        expense.id === payload.id ? payload : expense
      );
    },
  },
});
