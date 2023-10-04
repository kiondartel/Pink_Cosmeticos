import { configureStore } from "@reduxjs/toolkit";
import sliceCategories from "./reducers/categoriesReducer";
import sliceItens from "./reducers/itensReducer";
const store = configureStore({
  reducer: {
    categories: sliceCategories,
    itens: sliceItens,
  },
});

export default store;
