import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productions: [],
  status: '',
};

export const getProductions = createAsyncThunk(
  'productions/getProductions',
  async () => {
    return axios
      .get('https://private-13cc79-inventera.apiary-mock.com/productions')
      .then((res) => res.data)
      .catch((err) => err);
  },
);

const productionsSlice = createSlice({
  name: 'productions',
  initialState,
  extraReducers: {
    [getProductions.pending]: (state) => {
      state.status = 'loading';
    },
    [getProductions.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.productions = payload;
    },
    [getProductions.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default productionsSlice.reducer;
