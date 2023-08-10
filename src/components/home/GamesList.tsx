import { Fragment } from "react";
import { CgMoreO } from "react-icons/cg";

import GameSkeleton from "../GameSkeleton";
import { useAppContext } from "../../context/app.context";
import useGames from "../../hooks/useGames";
import Game from "./Game";

const GamesList = () => {
  const { genreFilterId, platformFilterId, platformSortValue, searchValue } =
    useAppContext();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames({
    genres: genreFilterId,
    parent_platforms: platformFilterId,
    ordering: platformSortValue,
    search: searchValue,
  });

  if (error) return <>{error.message}</>;

  return (
    <div className="pb-2">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 max-h-[calc(100vh_-_344px)] lg:max-h-[calc(100vh_-_366px)] overflow-y-auto scrollbar-hide">
        {isLoading
          ? Array.from({ length: 14 }, (_, idx) => (
              <GameSkeleton key={idx} />
            )).map((el) => el)
          : data.pages.map((games, idx) => (
              <Fragment key={idx}>
                {games.results.map((game) => (
                  <Game key={game.id} {...game} />
                ))}
              </Fragment>
            ))}

        {hasNextPage && (
          <button
            type="button"
            className="flex items-center gap-2 col-span-full justify-self-center self-center text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            <CgMoreO />
            <span>{isFetchingNextPage ? "Loading..." : "Load More..."}</span>
          </button>
        )}
      </ul>
    </div>
  );
};

export default GamesList;
