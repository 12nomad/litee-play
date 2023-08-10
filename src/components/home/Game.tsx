import { Link } from "react-router-dom";

import { IGame } from "../../context/app.interface";
import cropImage from "../../utils/crop-image.util";
import renderPlatform from "../../utils/render-platform.util";
import { Fragment } from "react";

const Game = ({
  name,
  background_image,
  parent_platforms,
  metacritic,
  slug,
}: IGame) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-auto max-w-full"
          src={cropImage(background_image)}
          alt=""
        />

        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <ul className="flex gap-2 items-center">
              {parent_platforms.map(({ platform }) => (
                <Fragment key={platform.id}>
                  {renderPlatform(platform.name, platform.id)}
                </Fragment>
              ))}
            </ul>
            <div
              className={`px-1 rounded-sm ${
                metacritic > 75
                  ? "bg-teal-400"
                  : metacritic > 60
                  ? "bg-amber-400"
                  : "bg-rose-400"
              }`}
            >
              <p className="text-sm">{metacritic}</p>
            </div>
          </div>
          <Link to={"/games/" + slug}>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Game;
