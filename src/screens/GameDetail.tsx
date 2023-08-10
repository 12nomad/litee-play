import { useParams } from "react-router-dom";

import useGame from "../hooks/useGame";
import Spinner from "../components/Spinner";
import cropImage from "../utils/crop-image.util";
import GameInfo from "../components/game-detail/GameInfo";
import GameTrailer from "../components/game-detail/GameTrailer";
import GameScreenShots from "../components/game-detail/GameScreenShots";

const GameDetail = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div className="grid place-items-center h-[calc(100vh-70px)] text-white text-xl font-bold">
        <Spinner />
      </div>
    );

  if (!isLoading && error)
    <div className="grid place-items-center h-[calc(100vh-70px)] text-white text-xl font-bold">
      {error.message}
    </div>;

  return (
    <article className="text-white px-4 lg:px-8 max-h-[calc(100vh_-_133px)] md:max-h-[calc(100vh_-_144px)] overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <img
          src={cropImage(data?.background_image || "")}
          alt="genre image background"
          className="w-8 h-8 rounded-lg object-cover"
        />
        <span>{data?.name}</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <GameInfo game={data} />
        <GameTrailer gameId={data?.id} />
      </div>
      <GameScreenShots gameId={data?.id} />
    </article>
  );
};

export default GameDetail;
