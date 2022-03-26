import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from './features/materials/materialsSlice';
import productsReducer from './features/products/productsSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    products: productsReducer,
  },
});
