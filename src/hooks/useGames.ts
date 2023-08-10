import { IGame } from "../context/app.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { IResponse } from "../utils/axios.util";

interface GameQuery {
  genres?: number;
  parent_platforms?: number;
  ordering?: string;
  search?: string;
}

const client = new ApiClient<IGame[]>("/games");

const useGames = (gameQuery?: GameQuery) =>
  useInfiniteQuery<IResponse<IGame[]>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      client.getAll({ params: { ...gameQuery, page: pageParam } }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
