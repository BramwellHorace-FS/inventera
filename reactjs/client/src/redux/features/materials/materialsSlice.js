import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  materials: [],
  status: '',
};

export const getMaterials = createAsyncThunk(
  'materials/getMaterials',
  async () => {
    return axios
      .get('https://private-13cc79-inventera.apiary-mock.com/materials')
      .then((res) => res.data)
      .catch((err) => err);
  },
);

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  extraReducers: {
    [getMaterials.pending]: (state) => {
      state.status = 'loading';
    },
    [getMaterials.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.materials = payload;
    },
    [getMaterials.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default materialsSlice.reducer;
