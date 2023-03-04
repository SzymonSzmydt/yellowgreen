import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';
import { CorrectProductType } from '../../components/dashboard/types/type';

interface ProductsState {
  value: Array<CorrectProductType>;
}

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Array<CorrectProductType>>) => {
      state.value = action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
