import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  userInfo: [],
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
          username: "yraigatt3",
          password: "sRQxjPfdS",
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

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
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
  },
});

export default userSlice.reducer;

/*
fetch('https://dummyjson.com/users/5/carts')
.then(res => res.json())
.then(console.log);
*/
