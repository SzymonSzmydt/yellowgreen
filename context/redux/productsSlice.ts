import { CorrectProductType } from './../types/type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../context/redux/store';
import { CorrectProductType } from '../../context/types/type';

interface ProductsState {
  value: Array<CorrectProductType>;
}

const initialState: ProductsState = {
  value: [],
};

interface Modyfy {
  id: number;
  new: CorrectProductType;
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Array<CorrectProductType>>) => {
      state.value = action.payload;
    },
    modyfyProductState(state, action: PayloadAction<Modyfy>) {
      const modyfyProduct = state.value.find(
        (product) => product.id === action.payload.id
      );
      if (modyfyProduct) {
        modyfyProduct.priceEU = action.payload.new.priceEU;
        modyfyProduct.pricePL = action.payload.new.pricePL;
        modyfyProduct.category = action.payload.new.category;
        modyfyProduct.delivery = action.payload.new.delivery;
        modyfyProduct.colorEN = action.payload.new.colorEN;
        modyfyProduct.colorPL = action.payload.new.colorPL;
        modyfyProduct.descriptionEN = action.payload.new.descriptionEN;
        modyfyProduct.descriptionPL = action.payload.new.descriptionPL;
        modyfyProduct.nameEN = action.payload.new.nameEN;
        modyfyProduct.namePL = action.payload.new.namePL;
        modyfyProduct.shipping = action.payload.new.shipping;
        modyfyProduct.image1 = action.payload.new.image1;
        modyfyProduct.image2 = action.payload.new.image2;
        modyfyProduct.image3 = action.payload.new.image3;
        modyfyProduct.weight = action.payload.new.weight;
      }
    },
  },
});

export const { getProducts, modyfyProductState } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.value;
export default productsSlice.reducer;
