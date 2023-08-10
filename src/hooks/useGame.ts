import { useQuery } from "@tanstack/react-query";

import { IGame } from "../context/app.interface";
import ApiClient from "../utils/axios.util";

const client = new ApiClient<IGame>("/games");

const useGame = (slug: string) =>
  useQuery<IGame, Error>({
    queryKey: ["games", slug],
    queryFn: () => client.get(slug),
  });

export default useGame;
