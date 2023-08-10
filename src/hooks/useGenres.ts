import { IGenre } from "../context/app.interface";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { IResponse } from "../utils/axios.util";

const client = new ApiClient<IGenre[]>("/genres");

const useGenres = () =>
  useQuery<IResponse<IGenre[]>, Error>({
    queryKey: ["genres"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;
