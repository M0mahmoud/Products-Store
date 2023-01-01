import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  cartIsVisible: false,
  userInfo: [],
  userCart: [],
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    const { userName, password } = userData;
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // username: userName,
          // password: password,
          username: "kmeus4",
          password: "aUTdmmmbH",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const cartOfUser = createAsyncThunk(
  "auth/userCart",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}/carts`);
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  "auth/updateCart",
  async (userData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://dummyjson.com/carts/${userData.cartId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            merge: true,
            products: [
              {
                id: userData.productId,
              },
            ],
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log("data ddddddddddddddddddd", data);
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });
    // Cart User
    builder.addCase(cartOfUser.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(cartOfUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userCart = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(cartOfUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    });
    // Update Cart
    builder.addCase(updateCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.loading = false;
      state.userCart = action.payload;
      console.log("action.payload", action.payload.totalQuantity);
    });
    builder.addCase(updateCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
