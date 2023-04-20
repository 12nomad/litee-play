import { useEffect } from "react";
import { useAppContext } from "../context/app.context";
import client from "../utils/axios.util";
import { IPlatform } from "../context/app.interface";

interface IGetPlatformsResponse {
  count: number;
  results: IPlatform[];
}

const usePlatforms = () => {
  const { dispatch, ...rest } = useAppContext();

  useEffect(() => {
    client
      .get<IGetPlatformsResponse>("/platforms/lists/parents")
      .then((res) => {
        dispatch({
          type: "GET_GAMES_PLATFORM",
          payload: {
            games: res.data.results,
          },
        });
      });
  }, []);

  return rest;
};

export default usePlatforms;
