import batomThumb from "../../assets/images/batom.jpg";
import esmalteThumb from "../../assets/images/esmalte.jpg";
import baseThumb from "../../assets/images/base.jpg";
import hidratanteThumb from "../../assets/images/hidratante.jpg";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    nomeProduto: "Esmaltes",
    thumbnail: esmalteThumb,
    id: "esmalte",
    descrição: "Temos varios tipos de esmaltes",
  },
  {
    nomeProduto: "Batom",
    thumbnail: batomThumb,
    id: "batom",
    descrição: "Temos varios tipos de baton",
  },
  {
    nomeProduto: "Base",
    thumbnail: baseThumb,
    id: "base",
    descrição: "Temos varios tipos de base",
  },
  {
    nomeProduto: "Hidratante",
    thumbnail: hidratanteThumb,
    id: "hidratante",
    descrição: "Temos varios tipos de hidratante",
  },
];

const sliceCategories = createSlice({
  name: "categories",
  initialState,
});
export default sliceCategories.reducer;
