import { useEffect } from "react";
import { useAppContext } from "../context/app.context";
import client from "../utils/axios.util";
import { IGenre } from "../context/app.interface";
import { CanceledError } from "axios";

interface IGetByGenresResponse {
  count: number;
  results: IGenre[];
}

const useGenres = () => {
  const { dispatch, ...rest } = useAppContext();

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "SET_GENRES_LOADING", payload: { loading: true } });
    client
      .get<IGetByGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        dispatch({
          type: "GET_GENRES",
          payload: {
            genres: res.data.results,
          },
        });
        dispatch({ type: "SET_GENRES_LOADING", payload: { loading: false } });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch({
          type: "SET_GENRES_ERROR",
          payload: { error: err.message },
        });
        dispatch({ type: "SET_GENRES_LOADING", payload: { loading: false } });
      });

    return () => {
      return controller.abort();
    };
  }, []);

  return rest;
};

export default useGenres;
