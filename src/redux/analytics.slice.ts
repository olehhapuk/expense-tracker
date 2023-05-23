import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Revenue } from '../types/Revenue';

const initialState: Revenue[] = [
  {
    id: 'id-1',
    month: 0,
    revenue: 1234,
  },
  {
    id: 'id-2',
    month: 1,
    revenue: 2234,
  },
  {
    id: 'id-3',
    month: 2,
    revenue: 5234,
  },
  {
    id: 'id-4',
    month: 3,
    revenue: 2234,
  },
  {
    id: 'id-5',
    month: 4,
    revenue: 1000,
  },
  {
    id: 'id-6',
    month: 5,
    revenue: 2900,
  },
  {
    id: 'id-7',
    month: 6,
    revenue: 3900,
  },
];

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<Revenue[]>) => {
      state = action.payload;
    },
  },
});
