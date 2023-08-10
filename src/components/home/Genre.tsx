import { useAppContext } from "../../context/app.context";
import { IGenre } from "../../context/app.interface";
import cropImage from "../../utils/crop-image.util";

const Genre = ({ name, image_background, id }: IGenre) => {
  const { dispatch, genreFilterId } = useAppContext();

  const onClick = () =>
    dispatch({ type: "SET_GENRE_FILTER", payload: { id, name } });

  return (
    <li
      className="flex items-center mb-4 gap-2 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={cropImage(image_background)}
        alt="genre image background"
        className="w-8 h-8 rounded-lg object-cover"
      />
      <span
        className={`text-lg mr-2 ${
          genreFilterId === id && "font-bold text-blue-500 underline"
        }`}
      >
        {name}
      </span>
    </li>
  );
};

export default Genre;
