import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

import Genre from "./Genre";
import useGenres from "../../hooks/useGenres";
import GenreSkeleton from "../GenreSkeleton";
import Spinner from "../Spinner";

const Sidebar = () => {
  const { data, isLoading, error } = useGenres();

  const slideLeft = () =>
    (document.getElementById("slider")!.scrollLeft -= 500);

  const slideRight = () =>
    (document.getElementById("slider")!.scrollLeft += 500);

  if (isLoading)
    return (
      <div className="grid place-items-center text-white text-xl font-bold">
        <Spinner />
      </div>
    );

  if (error) return <>{error?.message}</>;

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 lg:mb-3 flex items-center gap-2">
        <BiCategory />
        <span>Categories</span>
      </h2>
      <div className=" flex items-start gap-4">
        <AiFillLeftCircle
          className="hidden lg:block lg:cursor-pointer lg:pb-6 lg:w-14 lg:h-14"
          onClick={slideLeft}
        />
        <ul
          id="slider"
          className="overflow-x-scroll flex gap-12 custom-scrollbar scroll scroll-smooth whitespace-nowrap"
        >
          {isLoading ? (
            <GenreSkeleton />
          ) : (
            data?.results.map((genre) => <Genre key={genre.id} {...genre} />)
          )}
        </ul>
        <AiFillRightCircle
          className="hidden lg:block lg:cursor-pointer lg:pb-6 lg:w-14 lg:h-14"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Sidebar;
