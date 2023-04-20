import useGenres from "../hooks/useGenres";
import Genre from "./Genre";
import GenreSkeleton from "./GenreSkeleton";
import { BiCategory } from "react-icons/bi";

const Sidebar = () => {
  const { genres, genresLoading, genresError } = useGenres();

  if (genresError) return <>error</>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BiCategory />
        <span>Categories</span>
      </h2>
      <ul className="max-h-[calc(100vh_-_144px)] overflow-y-auto custom-scrollbar">
        {genresLoading ? (
          <GenreSkeleton />
        ) : (
          genres.map((genre) => <Genre key={genre.id} {...genre} />)
        )}
      </ul>
    </>
  );
};

export default Sidebar;
