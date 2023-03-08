import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';
import { BasketData } from './../types/type';

interface BasketState {
  value: Array<BasketData>;
}

const initialState: BasketState = {
  value: [],
};

type Modyfy = {
  id: number;
  newQuantity: number;
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket(state, action: PayloadAction<BasketData>) {
      state.value.push(action.payload);
    },
    modyfyQuantity(state, action: PlayloadAction<Modyfy>) {
      const product = state.value.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity = action.payload.newQuantity;
      }
    },
  },
});

export const { addProductToBasket, modyfyQuantity } = basketSlice.actions;

export const menageBasket = (state: RootState) => state.basket.value;
export default basketSlice.reducer;
