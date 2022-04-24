import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const initialState = {
  userData: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: '',
};

// fetch user data
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (token, { rejectWithValue }) => {
    try {
      const response = await userService.getUserData(token);

      if (response.status === 'error') {
        const { message } = response.error;
        return rejectWithValue(message);
      }

      return response.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export default userSlice.reducer;
