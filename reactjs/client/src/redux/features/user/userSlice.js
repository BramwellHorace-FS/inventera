import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const user = JSON.parse(localStorage.getItem('user'));
const { token } = user;

// Initial state for user data
const initialState = {
  userData: null,
  loading: false,
  error: null,
};

// Fetch user data
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (thunkAPI) => {
    const userData = await userService.getUserData(token);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData.user;
  },
);

// Update user data
export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, thunkAPI) => {
    const userData = await userService.updateUserData(token, data);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData.user;
  },
);

// Delete user data
export const deleteUserData = createAsyncThunk(
  'user/deleteUserData',
  async (thunkAPI) => {
    const userData = await userService.deleteUserData(token);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData;
  },
);

// User slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(deleteUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export reducer
export default userSlice.reducer;
