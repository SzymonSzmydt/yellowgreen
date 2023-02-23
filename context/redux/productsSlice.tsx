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
    deleteProduct(state, action: PayloadAction<number>) {
      const newProductList = state.value.filter(
        (product) => product.id !== action.payload
      );
      state.value = newProductList;
    },
  },
});

export const { getProducts, deleteProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
