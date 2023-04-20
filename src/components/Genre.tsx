import { useAppContext } from "../context/app.context";
import { IGenre } from "../context/app.interface";
import { FaAngleRight } from "react-icons/fa";

const Genre = ({ name, image_background, id }: IGenre) => {
  const { dispatch, genreFilterId } = useAppContext();

  const onClick = () =>
    dispatch({ type: "SET_GENRE_FILTER", payload: { id, name } });

  return (
    <li className="flex items-center mb-4 cursor-pointer" onClick={onClick}>
      <img
        src={image_background}
        alt="genre image background"
        className="w-8 h-8 rounded-lg"
      />
      <span
        className={`text-lg ml-4 mr-2 ${
          genreFilterId === id && "font-bold text-blue-500 underline"
        }`}
      >
        {name}
      </span>
      <FaAngleRight
        className={`mt-1 ${
          genreFilterId === id && "font-bold text-blue-500 underline"
        }`}
      />
    </li>
  );
};

export default Genre;
