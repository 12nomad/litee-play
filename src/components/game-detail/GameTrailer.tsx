import { FaRegSadTear } from "react-icons/fa";
import { Spinner } from "flowbite-react";

import useTrailers from "../../hooks/useTrailers";

interface IGameTrailer {
  gameId: number | undefined;
}

const GameTrailer = ({ gameId }: IGameTrailer) => {
  const { data, isLoading } = useTrailers(gameId!);

  if (isLoading)
    return (
      <div className="grid place-items-center text-white text-xl font-bold">
        <Spinner />
      </div>
    );

  if (!isLoading && data?.results.length === 0)
    return (
      <h2 className="flex gap-2 justify-center">
        Trailer Not Available... <FaRegSadTear className="mt-1" />
      </h2>
    );

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
