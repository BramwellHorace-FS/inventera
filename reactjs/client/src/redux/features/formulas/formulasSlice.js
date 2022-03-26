import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formulas: [],
  status: '',
};

export const getFormulas = createAsyncThunk(
  'formulas/getFormulas',
  async () => {
    return axios
      .get('https://private-13cc79-inventera.apiary-mock.com/formulas')
      .then((res) => res.data)
      .catch((err) => err);
  },
);

const formulasSlice = createSlice({
  name: 'formulas',
  initialState,
  extraReducers: {
    [getFormulas.pending]: (state) => {
      state.status = 'loading';
    },
    [getFormulas.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.formulas = payload;
    },
    [getFormulas.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default formulasSlice.reducer;
