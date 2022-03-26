import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from './features/materials/materialsSlice';
import productsReducer from './features/products/productsSlice';
import formulasReducer from './features/formulas/formulasSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    products: productsReducer,
    formulas: formulasReducer,
  },
});
