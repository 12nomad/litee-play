import { useQuery } from "@tanstack/react-query";

import ApiClient from "../utils/axios.util";
import { IScreenShot } from "../context/app.interface";

const useScreenShots = (id: number) => {
  const client = new ApiClient<IScreenShot[]>("/games/" + id + "/screenshots");

  return useQuery({
    queryKey: ["games", id, "screenshots"],
    queryFn: client.getAll,
  });
};
export default useScreenShots;
