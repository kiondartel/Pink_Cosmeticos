import { configureStore } from "@reduxjs/toolkit";
import sliceCategories from "./reducers/categoriesReducer";

const store = configureStore({
  reducer: {
    categories: sliceCategories,
  },
});

export default store;
