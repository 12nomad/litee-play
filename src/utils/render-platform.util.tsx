import {
  BsLaptop,
  BsNintendoSwitch,
  BsPhone,
  BsPlaystation,
  BsXbox,
} from "react-icons/bs";

const renderPlatform = (platform: string, key: number): JSX.Element => {
  switch (platform.toLowerCase()) {
    case "playstation":
      return <BsPlaystation size={22} className="text-gray-400" key={key} />;
    case "xbox":
      return <BsXbox size={18} className="text-gray-400" key={key} />;
    case "pc":
      return <BsLaptop size={22} className="text-gray-400" key={key} />;
    case "nintendo":
      return <BsNintendoSwitch size={18} className="text-gray-400" key={key} />;
    case "android":
      return <BsPhone size={18} className="text-gray-400" key={key} />;
    default:
      return <></>;
  }
};

export default renderPlatform;
