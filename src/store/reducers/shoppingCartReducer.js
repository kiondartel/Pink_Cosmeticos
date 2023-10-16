import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sliceShoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    changeShoppingCart: (state, { payload }) => {
      const item = state.some((item) => item.id === payload);
      if (!item)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      state.push();
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { changeShoppingCart } = sliceShoppingCart.actions;
export default sliceShoppingCart.reducer;
