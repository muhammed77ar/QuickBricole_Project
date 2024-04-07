import { createSlice } from "@reduxjs/toolkit";
import {insialState} from "../state";

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: insialState.categories,
  reducers: {
    setCategories: (state, action) => {
      return {...state, categories:action.payload};
    },
  }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
