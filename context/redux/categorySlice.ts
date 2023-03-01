import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';

interface CategoryState {
  value: Array<string>;
}

const initialState: CategoryState = {
  value: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategory: (state, action: PayloadAction<Array<string>>) => {
      state.value = action.payload;
    },
    addCategory(state, action: PayloadAction<string>) {
      state.value.push(action.payload);
    },
  },
});

export const { getCategory, addCategory } = categorySlice.actions;

export const selectProducts = (state: RootState) => state.category.value;
export default categorySlice.reducer;
