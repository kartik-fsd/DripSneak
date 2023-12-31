import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

import { dataReducer, initialState } from "../reducer/dataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getAllCategories = async () => await axios.get("/api/categories");

  const getAllProducts = async () => await axios.get("/api/products");

  const getAllSneakers = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await getAllProducts();
      if (response.request.status === 200) {
        setLoading(false);
        dispatch({
          type: "GET_ALL_PRODUCTS_FROM_API",
          payload: [
            ...response.data.products
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value),
          ],
        });
      }
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      if (response.request.status === 200) {
        dispatch({
          type: "GET_ALL_CATEGORIES",
          payload: response.data.categories,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const flag = () => {
    // Add the logic to toggle the liked state of the product
    // Dispatch the "IS_BADGE" action
    dispatch({ type: "IS_BADGE" });
  };

  useEffect(() => {
    getAllSneakers();
    getCategories();
    flag();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch, loading, flag }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
