import { Spinner } from "flowbite-react";
import { FaRegSadTear } from "react-icons/fa";

import useScreenShots from "../../hooks/useScreenShots";
import cropImage from "../../utils/crop-image.util";

interface IGameScreenShots {
  gameId: number | undefined;
}
const GameScreenShots = ({ gameId }: IGameScreenShots) => {
  const { data, isLoading } = useScreenShots(gameId!);

  if (isLoading)
    return (
      <div className="grid place-items-center text-white text-xl font-bold">
        <Spinner />
      </div>
    );

  if (!isLoading && data?.results.length === 0)
    return (
      <h2 className="flex gap-2 justify-center">
        Screenshots Not Available... <FaRegSadTear />
      </h2>
    );

  return (
    <ul className="flex flex-wrap justify-center items-center gap-2">
      {data?.results.map((el) => (
        <li key={el.id}>
          <img
            src={cropImage(el.image)}
            className="object-cover rounded-md w-64"
          />
        </li>
      ))}
    </ul>
  );
};

export default GameScreenShots;
