import { configureStore } from '@reduxjs/toolkit';
import materialsReducer from './features/materials/materialsSlice';
import productsReducer from './features/products/productsSlice';
import formulasReducer from './features/formulas/formulasSlice';
import usersReducer from './features/users/usersSlice';
import productionsReducer from './features/productions/productionsSlice';
import loginReducer from './features/auth/loginSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    products: productsReducer,
    formulas: formulasReducer,
    users: usersReducer,
    productions: productionsReducer,
    login: loginReducer,
  },
});
