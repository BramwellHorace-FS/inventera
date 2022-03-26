import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: '',
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    return axios
      .get('https://private-13cc79-inventera.apiary-mock.com/products')
      .then((res) => res.data)
      .catch((err) => err);
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.products = payload;
    },
    [getProducts.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default productsSlice.reducer;
