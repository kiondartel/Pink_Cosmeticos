import { getStoreItems } from "../api/itens_helper";
import { setItems, setLoading } from "../store/reducers/itensReducer";

export function fetchAndSetItems() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const data = await getStoreItems();
      dispatch(setItems(data));
    } catch (error) {
      console.log("Erro ao buscar itens:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
