import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: '',
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return axios
    .get(
      'https://private-13cc79-inventera.apiary-mock.com/users/3e836f45-5f86-4a9a-a27b-17e71b60317d',
    )
    .then((res) => res.data)
    .catch((err) => err);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.users = payload;
    },
    [getUsers.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default usersSlice.reducer;
