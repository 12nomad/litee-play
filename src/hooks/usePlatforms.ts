import { IPlatform } from "../context/app.interface";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { IResponse } from "../utils/axios.util";

const client = new ApiClient<IPlatform[]>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<IResponse<IPlatform[]>, Error>({
    queryKey: ["platforms"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
