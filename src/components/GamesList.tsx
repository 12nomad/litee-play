import { useAppContext } from "../context/app.context";
import useGames from "../hooks/useGames";
import Game from "./Game";
import GameSkeleton from "./GameSkeleton";

const GamesList = () => {
  const { genreFilterId, platformFilterId, platformSortValue, searchValue } =
    useAppContext();
  const { games, loading, error } = useGames({
    params: {
      genres: genreFilterId,
      parent_platforms: platformFilterId,
      ordering: platformSortValue,
      search: searchValue,
    },
  });

  if (error) return <>Error...</>;

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[calc(100vh_-_266px)] md:max-h-[calc(100vh_-_216px)] lg:max-h-[calc(100vh_-_226px)] overflow-y-auto scrollbar-hide">
        {loading
          ? Array.from({ length: 14 }, (_, idx) => (
              <GameSkeleton key={idx} />
            )).map((el) => el)
          : games.map((game) => <Game key={game.id} {...game} />)}
      </ul>
    </>
  );
};

export default GamesList;
