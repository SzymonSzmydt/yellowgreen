import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';

interface BasketData {
    id: number;
  quantity: number;
  name: string;
  price: number;
}

interface BasketState {
  value: Array<BasketData>;
}

const initialState: BasketState = {
  value: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<BasketData>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addProductToBasket } = basketSlice.actions;

export const selectProducts = (state: RootState) => state.basket.value;
export default basketSlice.reducer;
