import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';
import { CorrectProductType } from './../types/type';

interface BasketState {
  value: Array<CorrectProductType>;
}

const initialState: BasketState = {
  value: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<CorrectProductType>) => {
      state.value = action.payload;
    },
  },
});

export const { addProductToBasket } = basketSlice.actions;

export const selectProducts = (state: RootState) => state.basket.value;
export default basketSlice.reducer;
