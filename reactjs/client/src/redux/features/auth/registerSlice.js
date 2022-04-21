import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  success: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      state.success = 'Account created successfully. Please login';
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = registerSlice;

export const { registerPending, registerSuccess, registerFailure } = actions;

export default reducer;
