import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Card } from '../types/Card';

const initialState: Card = {
  amount: 76220,
  number: '2544 7545 3785 1023',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCard: (_state, action: PayloadAction<Card>) => {
      _state = action.payload;
    },
  },
});
