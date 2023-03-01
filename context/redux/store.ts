import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
