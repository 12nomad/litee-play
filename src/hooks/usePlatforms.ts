import { useEffect } from "react";
import { useAppContext } from "../context/app.context";
import client from "../utils/axios.util";
import { IPlatform } from "../context/app.interface";
import { CanceledError } from "axios";

interface IGetByGenresResponse {
  count: number;
  results: IPlatform[];
}

export const usePlatforms = () => {
  const { dispatch, ...rest } = useAppContext();

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "SET_PLATFORMS_LOADING", payload: { loading: true } });
    client
      .get<IGetByGenresResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        dispatch({
          type: "GET_PLATFORMS",
          payload: {
            platforms: res.data.results,
          },
        });
        dispatch({
          type: "SET_PLATFORMS_LOADING",
          payload: { loading: false },
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch({
          type: "SET_PLATFORMS_ERROR",
          payload: { error: err.message },
        });
        dispatch({
          type: "SET_PLATFORMS_LOADING",
          payload: { loading: false },
        });
      });

    return () => {
      return controller.abort();
    };
  }, []);

  return { ...rest, dispatch };
};

export default usePlatforms;
