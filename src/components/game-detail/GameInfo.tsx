import { useState } from "react";

import { IGame } from "../../context/app.interface";

interface IGameInfo {
  game: IGame | undefined;
}

const GameInfo = ({ game }: IGameInfo) => {
  const [expand, setExpand] = useState(false);
  const description = game?.description.replaceAll(/(<([^>]+)>)/gi, "");

  return (
    <div>
      <div className="flex gap-6 flex-wrap justify-start">
        <div>
          <h5 className=" text-white mb-2 inline-block bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1">
            Platforms
          </h5>
          <ul>
            {game?.parent_platforms.map((el) => (
              <li key={el.platform.id}>{el.platform.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className=" text-white mb-2 inline-block bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1">
            Genres
          </h5>
          <ul>
            {game?.genres.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className=" text-white mb-2 inline-block bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1">
            Publishers
          </h5>
          <ul>
            {game?.publishers.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className=" text-white mb-2 inline-block bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1">
            Release Date
          </h5>
          <p>{game?.released}</p>
        </div>
      </div>
      <h4 className="text-xl font-bold mt-6 underline">Synopsis</h4>
      <p className="mt-4">
        {expand ? (
          <>
            <span className="pr-2">{description}</span>
            <button
              type="button"
              className="inline-block mt-2  text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1 mr-2 mb-2 focus:outline-none "
              onClick={() => setExpand(false)}
            >
              Show Less...
            </button>
          </>
        ) : (
          <>
            <span className="pr-2">{description?.substring(0, 250)}...</span>
            <button
              type="button"
              className="inline-block mt-2 text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 font-medium rounded-sm text-sm px-3 py-1 mr-2 mb-2  focus:outline-none"
              onClick={() => setExpand(true)}
            >
              Show More...
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default GameInfo;
