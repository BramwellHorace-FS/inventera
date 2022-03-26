import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from './features/materials/materialsSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
  },
});
