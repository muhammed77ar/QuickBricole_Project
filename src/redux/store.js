import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import categoriesSlice from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    categories : categoriesSlice
  },
});
export default store;