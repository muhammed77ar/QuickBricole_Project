import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import categoriesSlice from "./slices/categoriesSlice";
import { PortfolioHandymanSlice } from "./slices/portfolioHandymanSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    categories : categoriesSlice,
    handymanPortfolio : PortfolioHandymanSlice.reducer,
  },
});
export default store;