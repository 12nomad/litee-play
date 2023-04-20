import { Dropdown, Spinner } from "flowbite-react";
import { useState } from "react";
import useGenres from "../hooks/useGenres";

const GenreDropdown = () => {
  const [selected, setSelected] = useState("");
  const { dispatch, genres, genresLoading, genresError } = useGenres();

  const onSelectGenre = (id: number, name: string) => {
    setSelected(name);
    dispatch({ type: "SET_GENRE_FILTER", payload: { id, name } });
  };

  if (genresError) return <>Error...</>;

  return (
    <div className="lg:hidden">
      <Dropdown
        label={selected ? `Genre: ${selected}` : "Genre: All"}
        dismissOnClick={true}
        color="gray"
      >
        {genresLoading ? (
          <Spinner />
        ) : (
          genres.map((genre) => (
            <Dropdown.Item
              key={genre.id}
              onClick={() => onSelectGenre(genre.id, genre.name)}
            >
              {genre.name}
            </Dropdown.Item>
          ))
        )}
      </Dropdown>
    </div>
  );
};

export default GenreDropdown;
