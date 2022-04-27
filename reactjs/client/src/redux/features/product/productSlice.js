import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
  success: null,
};

// Get Products
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (token, thunkAPI) => {
    const products = await productService.getProducts(token);

    if (products.error) {
      return thunkAPI.rejectWithValue(products.error.message);
    }

    return products.products;
  },
);

// Get Product
export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (data, thunkAPI) => {
    const { productId } = data;
    const { token } = data;

    const product = await productService.getProduct(token, productId);

    if (product.error) {
      return thunkAPI.rejectWithValue(product.error.message);
    }

    return product.product;
  },
);

// Create Product
export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (data, thunkAPI) => {
    const { product } = data;
    const { token } = data;

    const newProduct = await productService.createProduct(token, product);

    if (newProduct.error) {
      return thunkAPI.rejectWithValue(newProduct.error.message);
    }

    return newProduct.product;
  },
);

// Update Product
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (data, thunkAPI) => {
    const { productId, product } = data;
    const { token } = data;

    const updatedProduct = await productService.updateProduct(
      token,
      productId,
      product,
    );

    if (updatedProduct.error) {
      return thunkAPI.rejectWithValue(updatedProduct.error.message);
    }

    return updatedProduct.product;
  },
);

// Delete Product
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (data, thunkAPI) => {
    const { productId } = data;
    const { token } = data;

    const deletedProduct = await productService.deleteProduct(token, productId);

    if (deletedProduct.error) {
      return thunkAPI.rejectWithValue(deletedProduct.error.message);
    }

    return deletedProduct.product;
  },
);

// Create slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    });
  },
});

export const { reset, setProduct } = productSlice.actions;

export default productSlice.reducer;
