import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from './features/loginSlice';
// import registerReducer from './features/registerSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // login: loginReducer,
    // register: registerReducer,
    auth: authReducer,
  },
});
