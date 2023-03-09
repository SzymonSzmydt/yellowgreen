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

interface Modyfy {
  id: number;
  newQuantity: number;
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<BasketData>) => {
      state.value.push(action.payload);
    },
    deleteBasketProduct(state, action: PayloadAction<number>) {
      const newBasket = state.value.filter(
        (product) => product.id !== action.payload
      );
      state.value = newBasket;
    },
    modyfyQuantity(state, action: PayloadAction<Modyfy>) {
      const basketProducts = state.value.find(
        (product) => product.id === action.payload.id
      );
      if (basketProducts) {
        basketProducts.quantity = action.payload.newQuantity;
      }
    },
  },
});

export const { addProductToBasket, modyfyQuantity, deleteBasketProduct } =
  basketSlice.actions;

export const menageBasket = (state: RootState) => state.basket.value;
export default basketSlice.reducer;
