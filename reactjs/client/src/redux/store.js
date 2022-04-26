import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import unitReducer from './features/unit/unitSlice';
import productionBoardReducer from './features/productionBoard/productionBoardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    unit: unitReducer,
    board: productionBoardReducer,
  },
});
