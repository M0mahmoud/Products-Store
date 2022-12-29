import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    auth: userSlice,
  },
});

export default store;
