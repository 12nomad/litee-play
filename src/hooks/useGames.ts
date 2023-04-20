import { useEffect } from "react";
import { useAppContext } from "../context/app.context";
import client from "../utils/axios.util";
import { IAppContext, IGame } from "../context/app.interface";
import { AxiosRequestConfig, CanceledError } from "axios";

interface IGetGamesResponse {
  count: number;
  results: IGame[];
}

const useGames = (
  requestConfig?: AxiosRequestConfig
): Omit<IAppContext, "dispatch"> => {
  const { dispatch, ...rest } = useAppContext();

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "SET_LOADING", payload: { loading: true } });
    client
      .get<IGetGamesResponse>("/games", {
        signal: controller.signal,
        ...(requestConfig && requestConfig),
      })
      .then((res) => {
        dispatch({
          type: "GET_GAMES",
          payload: {
            games: res.data.results,
          },
        });
        dispatch({ type: "SET_LOADING", payload: { loading: false } });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch({
          type: "SET_ERROR",
          payload: { error: err.message },
        });
        dispatch({ type: "SET_LOADING", payload: { loading: false } });
      });

    return () => {
      return controller.abort();
    };
  }, [
    rest.genreFilterId,
    rest.platformFilterId,
    rest.platformSortValue,
    rest.searchValue,
  ]);

  return rest;
};

export default useGames;
