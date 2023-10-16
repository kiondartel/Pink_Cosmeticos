import { configureStore } from "@reduxjs/toolkit";
import sliceCategories from "./reducers/categoriesReducer";
import sliceItens from "./reducers/itensReducer";
import sliceShoppingCart from "./reducers/shoppingCartReducer";
const store = configureStore({
  reducer: {
    categories: sliceCategories,
    itens: sliceItens,
    shoppingCart: sliceShoppingCart,
  },
});

export default store;
