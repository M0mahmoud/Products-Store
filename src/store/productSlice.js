import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  catg: [],
  product: [],
  loading: false,
  error: null,
  cartIsVisible: false,
};

export const getSingleproduct = createAsyncThunk(
  "products/getSingleproduct",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (skip, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=15&skip=${skip}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
  extraReducers: (builder) => {
    // Categories
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.catg = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Products
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Single Product
    builder.addCase(getSingleproduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleproduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getSingleproduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const uiAction = productSlice.actions;

export default productSlice.reducer;