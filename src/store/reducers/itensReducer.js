import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";

const initialState = {
  loading: true,
  data: [],
};

const sliceItens = createSlice({
  name: "itens",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setItems: (state, { payload }) => {
      state.data = payload;
    },
    changeFavorite: (state, { payload }) => {
      state.data = state.data.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      });
    },
  },
});

export const { setLoading, setItems, changeFavorite } = sliceItens.actions;

export default sliceItens.reducer;
