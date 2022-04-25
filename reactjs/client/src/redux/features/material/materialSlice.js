import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import materialService from './materialService';

const initialState = {
  materials: [],
  material: {},
  loading: false,
  error: null,
  success: null,
};

// Get Materials
export const getMaterials = createAsyncThunk(
  'material/getMaterials',
  async (token, thunkAPI) => {
    const materials = await materialService.getMaterials(token);

    if (materials.error) {
      return thunkAPI.rejectWithValue(materials.error);
    }

    return materials.materials;
  },
);

// Get Material
export const getMaterial = createAsyncThunk(
  'material/getMaterial',
  async (data, thunkAPI) => {
    const { materialId } = data;
    const { token } = data;

    const material = await materialService.getMaterial(token, materialId);

    if (material.error) {
      return thunkAPI.rejectWithValue(material.error.message);
    }

    return material.material;
  },
);

// Create Material
export const createMaterial = createAsyncThunk(
  'material/createMaterial',
  async (data, thunkAPI) => {
    const { material } = data;
    const { token } = data;

    const newMaterial = await materialService.createMaterial(token, material);

    if (newMaterial.error) {
      return thunkAPI.rejectWithValue(newMaterial.error.message);
    }

    return newMaterial.material;
  },
);

// Update Material
export const updateMaterial = createAsyncThunk(
  'material/updateMaterial',
  async (data, thunkAPI) => {
    const { materialId, material } = data;
    const { token } = data;

    const updatedMaterial = await materialService.updateMaterial(
      token,
      materialId,
      material,
    );

    if (updatedMaterial.error) {
      return thunkAPI.rejectWithValue(updatedMaterial.error.message);
    }

    return updatedMaterial.material;
  },
);

// Delete Material
export const deleteMaterial = createAsyncThunk(
  'material/deleteMaterial',
  async (data, thunkAPI) => {
    const { materialId } = data;
    const { token } = data;

    const deletedMaterial = await materialService.deleteMaterial(
      token,
      materialId,
    );

    if (deletedMaterial.error) {
      return thunkAPI.rejectWithValue(deletedMaterial.error.message);
    }

    return deletedMaterial.material;
  },
);

export const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaterials.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(getMaterials.fulfilled, (state, action) => {
      state.loading = false;
      state.materials = action.payload;
    });
    builder.addCase(getMaterials.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getMaterial.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(getMaterial.fulfilled, (state, action) => {
      state.loading = false;
      state.material = action.payload;
    });
    builder.addCase(getMaterial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(createMaterial.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(createMaterial.fulfilled, (state, action) => {
      state.loading = false;
      state.material = action.payload;
    });
    builder.addCase(createMaterial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updateMaterial.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(updateMaterial.fulfilled, (state, action) => {
      state.loading = false;
      state.material = action.payload;
    });
    builder.addCase(updateMaterial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteMaterial.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(deleteMaterial.fulfilled, (state, action) => {
      state.loading = false;
      state.material = action.payload;
    });
    builder.addCase(deleteMaterial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default materialSlice.reducer;
