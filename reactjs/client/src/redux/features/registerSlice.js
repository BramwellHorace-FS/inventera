import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistered: false,
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerPending(state) {
      state.isLoading = true;
    },
    registerSuccess(state) {
      state.isLoading = false;
      state.isRegistered = true;
      state.error = null;
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = registerSlice;

export const { registerPending, registerSuccess, registerFailure } = actions;

export default reducer;
