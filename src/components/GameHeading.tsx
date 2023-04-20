import { useAppContext } from "../context/app.context";
import { AiOutlineStar } from "react-icons/ai";

const GameHeading = () => {
  const { genreFilterName, platformFilterName } = useAppContext();

  const label = `${platformFilterName || ""}  ${genreFilterName || ""} Games`;

  return (
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <AiOutlineStar />
      <span>{label}</span>
    </h2>
  );
};

export default GameHeading;
