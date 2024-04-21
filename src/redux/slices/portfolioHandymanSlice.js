import { createSlice } from "@reduxjs/toolkit";
import { insialState } from "../state";

export const PortfolioHandymanSlice = createSlice({
  name: 'handymanPortfolio',
  initialState: {
    handymanPortfolio: insialState.handymanPortfolio,
  },
  reducers: {
    setPortfolio: (state, action) => {
      state.handymanPortfolio = action.payload;
    },
  }
});

export const { setPortfolio } = PortfolioHandymanSlice.actions;

export default PortfolioHandymanSlice.reducer;
