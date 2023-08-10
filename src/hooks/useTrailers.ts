import { useQuery } from "@tanstack/react-query";

import ApiClient from "../utils/axios.util";
import { ITrailer } from "../context/app.interface";

const useTrailers = (id: number) => {
  const client = new ApiClient<ITrailer[]>("/games/" + id + "/movies");

  return useQuery({
    queryKey: ["games", id, "movies"],
    queryFn: client.getAll,
  });
};
export default useTrailers;
